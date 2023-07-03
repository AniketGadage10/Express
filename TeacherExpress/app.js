const express=require("express")
const app =express()
const bodyparser=require("body-parser")
const path=require("path")
const cors=require("cors")
const rout=require("./router/router")

app.use(bodyparser.urlencoded({extended:false}))

app.use(bodyparser.json())

app.use(cors({origin:"http://localhost:3000",credentials:true}))

//app.set("views",path.join(__dirname,"views"))

app.use("/",rout)

app.listen(3002,()=>{console.log("Server Started At 3002")})

module.exports=app
