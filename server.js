const express = require("express");
const todo_controller = require("./controller");
const app = express();
const port = 3005;


// app.get("/",(req,res)=>{
//     res.send("hello")
// })

app.get("/",todo_controller.readAllitems)

app.listen(port,()=>{
    console.log("server is running")    
})