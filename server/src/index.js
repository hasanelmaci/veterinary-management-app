const http = require("http");
const express = require("express");
const socketio = require("socket.io");
require("./db/mongoose");
const userRouter = require("./routers/user");
const customerRouter = require("./routers/customer");
const petRouter = require("./routers/pet");
const cors = require("cors");

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(userRouter);
app.use(customerRouter);
app.use(petRouter);

io.on("connection", (socket) => {
    console.log("New Websocket connection");

    socket.on("send-message", ([room,user,message]) => {
        console.log(message);
        io.to(room).emit("receive-message", {user,message});
    });

    socket.on('join',({username,room}) =>{
      
        console.log('ROOM SERVER ',username,room)
        socket.join(room)
        socket.emit('welcome-room',room)
    })

    socket.on("disconnect", () => {
        console.log("disconnect");
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port} !`);
    app.listen();
});
