const express = require('express');
const app = express();

app.get('',(req,res)=>{
    console.log("data requested by browser",req.query.name);
    res.send("hi home page" + req.query.name);
})

app.get('/about',(req,res)=>{
    res.send("hi about page");
})

app.listen(5000);