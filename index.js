const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");
const path = require("path")
require("./src/db/mongoose");
const userRouter = require("./src/routers/user");
const customerRouter = require("./src/routers/customer");
const petRouter = require("./src/routers/pet");
const chatRouter = require("./src/routers/chat");

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(userRouter);
app.use(customerRouter);
app.use(petRouter);
app.use(chatRouter);


io.on("connection", (socket) => {
  console.log("New Websocket connection");

  
  socket.on("send-message", ([room, user, message]) => {
    io.to(room).emit("receive-message", { user, message });
  });

  socket.on("join", ({ username, room }) => {
    socket.join(room);
    socket.emit("welcome-room", room);
  });

  socket.on("disconnect", () => {
    console.log("disconnect");
  });
});

if(process.env.NODE_ENV==="production"){
  app.use(express.static("client/build"));
  app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"client","build","index.html"))
  })
}

server.listen(port, () => {
  console.log(`Server is up on port ${port} !`);
  app.listen();
});
