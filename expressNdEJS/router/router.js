const express=require("express")
const router=express.Router();
const connection =require("../db/db")

router.get("/product",(req,resp)=>
{
    connection.query("select * from product",(err,data)=>
    {
        if(err)
        {
            resp.status(500).send(" server side ")
        }
        else
        {

            resp.render("table",{product:data})
        }
    })
})

router.get("/update/:id",(req,resp)=>
{
    let id=parseInt(req.params.id);
    connection.query("select * from product where id=?",[id],(err,data)=>
    {
        if(err)
        {
            resp.status(500).send(JSON.stringify(err))
        }else{
            resp.render("Productupdate",{p:data[0]})
        }
    })
})

router.get("/addp",(req,resp)=>
{
    resp.render("Productform");
})

//id | description | pname | price | qty  | imgpath
router.post("/add",(req,resp)=>
{
    let id=parseInt(req.body.id);
    let description=req.body.description
    let pname=req.body.pname
    let price=parseFloat(req.body.price)
    let qty=parseInt(req.body.qty)
    console.log(id)
    connection.query("insert into product(description,pname,price,qty) value(?,?,?,?)",[description,pname,price,qty],(err,result)=>
    {
        if(err)
        {
            resp.status(500).send(" insert "+JSON.stringify(err))
        }else
        {
            if(result.affectedRows>0)
            resp.send("data insert Sucessfully "+result.affectedRows)
        }
    })


})
router.put("/update/:id",(req,resp)=>
{
        let id=parseInt(req.params.id);
        let description=req.body.description
        let pname=req.body.pname
        let price=parseFloat(req.body.price)
        let qty=parseInt(req.body.qty)
    console.log(id+" "+description+" "+price+" "+qty)
        connection.query("update product set description=?,pname=?,price=?,qty=? where id=?",[description,pname,price,qty,id]
        ,(err,result)=>
        {
            if(err)
        {
            resp.status(500).send("update"+JSON.stringify(err))
        }else
        {
            if(result.affectedRows>0)
            resp.send("data update Sucessfully "+result.affectedRows)
        } 
        })
})

router.delete("/delete/:pid",(req,resp)=>
{
    let id =parseInt(req.params.pid);
    connection.query("delete from product where id=?",[id],(err,result)=>
    {
        if(err)
        {
            resp.status(500).send("update"+JSON.stringify(err))
        }else
        {
            if(result.affectedRows>0)
            resp.send("data delete Sucessfully "+result.affectedRows)
        } 
    })
})


router.get("/delete/:pid",(req,resp)=>
{
    let id =parseInt(req.params.pid);
    connection.query("delete from product where id=?",[id],(err,result)=>
    {
        if(err)
        {
            resp.status(500).send("update"+JSON.stringify(err))
        }else
        {
            if(result.affectedRows>0)
            resp.send("data delete Sucessfully "+result.affectedRows)
        } 
    })
})

module.exports=router;