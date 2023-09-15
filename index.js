const express=require('express')
require('dotenv').config()
const cors=require('cors')
const {Server}=require('socket.io')
const {createServer}=require('http')
const app=express()
const server=createServer(app)
// app.use(cors())
const io=new Server(server,{
    cors:true,
    origin:["http://127.0.0.1:5500/index.html"]
})

const port=process.env.PORT
server.listen(port,() => { 
    console.log(`server running at http://localhost:${port}`);
 })

 io.on("connection",(socket) => { 
        console.log("a user is connected");
        socket.on("message",(msg) => { 
            console.log(msg);
            socket.broadcast.emit("msg",msg)
         })
  })
