const express=require('express');
const app=express();
const db=require("./db");
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const person=require("./models/menu");


app.get("/",(req,res)=>{
    res.send("hello world");
})

app.post("/person",async(req,res)=>{
   
    try{

    const data=req.body;
    const newperson = new person(data);

    const response= await newperson.save();
     console.log("data saved ");
     res.status(200).json(response);

    }catch(err){

       console.log(err);
       res.status(500).json({error:"internal server error"});
    }
        
    });

    app.get("/person",async(req,res)=>{
try{
        const data=await person.find();
        console.log("data fetched");
        res.status(200).json(data);
    
    }
        catch(err){
            console.log(err);
            res.status(500).json({error:"internal server error"});
        }
    }    )

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})