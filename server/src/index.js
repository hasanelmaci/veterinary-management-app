const http = require('http')
const express = require('express');
require("./db/mongoose")
const userRouter = require("./routers/user");


const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(userRouter)

server.listen(port,()=>{
    console.log(`Server is up on port ${port} !`)
    app.listen();
})
