const express = require('express');
const app = express();

app.get('',(req,res)=>{
    // console.log("data requested by browser",req.query.name);
    res.send(`
      <h1>hi home page  ${req.query.name}</h1>
       <a href="/about">Go to about page</a>
      <a href="/contact">Go to contact page</a>
    `);
})

app.get('/about',(req,res)=>{
    res.send(`
    <h1>hi about page</h1><a href="/">Go to home page</a>
    `);
})

app.get('/contact',(req,res)=>{
    res.send(`
    <input placeholder="use name" value="${req.query.name}" />
    <button>back</button>
    <a href="/">Go to home page</a>
    `);
})

app.listen(5000);