const express=require('express');
const app=express();
const db=require("./db");
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const person=require("./models/menu");


const personRoutes=require("./routes/personRoutes");
app.use("/person",personRoutes);

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})