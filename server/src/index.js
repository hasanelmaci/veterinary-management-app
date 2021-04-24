const http = require('http')
const express = require('express');
require("./db/mongoose")
const userRouter = require("./routers/user");
const customerRouter = require("./routers/customer")
const petRouter = require("./routers/pet")
const cors = require('cors')


const app = express();
app.use(cors())

const server = http.createServer(app);

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(userRouter)
app.use(customerRouter)
app.use(petRouter)

server.listen(port,()=>{
    console.log(`Server is up on port ${port} !`)
    app.listen();
})
