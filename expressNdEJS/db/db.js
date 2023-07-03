const mysql=require("mysql2")

const connection=mysql.createConnection({

    host:"127.0.0.1",
    user:"root",
    password:"1810",
    database:"anu",
    port:3306
})

connection.connect((err)=>
{
    if(err)
    {
        console.log("error"+JSON.stringify(err))
    }
    else
    {
        console.log("Database Connection Sucessfull");
    }
})

module.exports=connection;
