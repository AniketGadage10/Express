const express=require("express")
const app=express();
const parse=require("body-parser")
const path=require("path");
const rout=require("./router/router")

app.use(parse.urlencoded({extended:false}))

app.use(parse.json());

app.set("views",path.join(__dirname,"Views"))

app.set("view engine","ejs")

//app.set(express.static(path.join(__dirname,"public")))

app.use("/",rout)

app.listen(3002,()=>
{
console.log("server started");
})
module.exports=app;
