const express=require('express');
const app=express();
const db=require("./db");
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const Person=require("./models/person");

app.get("/",async(req,res)=>{
    res.send("hello world");
})

app.post("/person",(req,res)=>{
   
    try{

    const data=req.body;
    const newperson = new person(data);

    const response=await newperson.save();
     console.log("data saved ");
     res.status(200).json(response);

    }catch(err){


    }
        
    });

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})