const mongoose=require('mongoose');

const mongoURL="mongodb://localhost:27017/vg";

mongoose.connect(mongoURL,{
useNewUrlParser:true,
useUnifiedTopology:true
})

const db=mongoose.connection;

db.on("coonected",()=>{
    console.log("coonected to mongodb");
})

db.on("error",(err)=>{
    console.log("error in connecting to mongodb",err);
})

db.on("disconnected",()=>{
    console.log("disconnected from mongodb");
})

module.exports=db;