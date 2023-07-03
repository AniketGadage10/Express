const express=require("express")
const router=express.Router()
const connect=require("../db/db")

router.get("/teachers",(req,resp)=>
{
    connect.query("select * from teachers",(err,data)=>
    {
        if(err)
        {
            resp.status(500).send("server side error"+JSON.stringify(err));
        }
        else{
            resp.send(data);
        }

    })
})

router.get("/teachers/:tid",(req,resp)=>
{
    var id=parseInt(req.params.tid);
    connect.query("select * from teachers where id=?",[id],(err,data)=>
    {
        if(err)
        {
            resp.status(500).send("Server side error"+JSON.stringify(err))
        }
        else
        {
            resp.send(data[0]);
        }
    })
})

router.post("/insertion",(req,resp)=>
{
    var name=req.body.name
    var course=req.body.course
    var salary=req.body.salary
    var date=req.body.join_date
    connect.query("INSERT INTO teachers (name, course, salary, join_date) VALUES (?,?,?,?)",[name, course, salary,date],(err,result)=>
    {
        if(err)
        {   
            resp.status(500).send(JSON.stringify(err))
        }else
        {
            resp.send(result)
        }
    })
})

router.put("/updation/:id",(req,resp)=>
{
    var id=parseInt(req.params.id)
    var name=req.body.name
    var course=req.body.course
    var salary=parseFloat(req.body.salary)
    var date=req.body.join_date
   //console.log(date)
    connect.query("update teachers set name=? ,course=?,salary=?,join_date=? where id=?",[name, course, salary,date,id],(err,result)=>
    {
        if(err)
        {
            resp.status(500).send(JSON.stringify(err))
        }else
        {
            resp.send(result)
        }
    })
})

router.delete("/deletion/:id",(req,resp)=>
{
    var tid=parseInt(req.params.id)
    connect.query("delete from teachers where id=?",[tid],(err,result)=>
    {
        if(err)
        {
            resp.status(500).send(JSON.stringify(err))
        }else
        {
            resp.send(result)
        }
    })
})

module.exports=router;