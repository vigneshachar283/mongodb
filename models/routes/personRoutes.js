const express = require('express');
const router = express.Router();
const person = require('./../models/person');

router.post("/", async (req,res)=>{
    try{
        const data = req.body;

        const newperson = new person(data);
        const response = await newperson.save();
console.log("data saved");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
});

router.get("/", async (req,res)=>{
    try{
        const data = await person.find();

        console.log("data fetched");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
    }
});

module.exports = router