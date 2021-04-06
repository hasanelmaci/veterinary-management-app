const http = require('http')
const express = require('express');
require("./db/mongoose")
const userRouter = require("./routers/user");
const customerRouter = require("./routers/customer")

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(userRouter)
app.use(customerRouter)

server.listen(port,()=>{
    console.log(`Server is up on port ${port} !`)
    app.listen();
})
