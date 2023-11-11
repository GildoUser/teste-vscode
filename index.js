require("dotenv").config();

const db = require('./db');

const express = require('express');

const app = new express();

app.use(express.json())

app.post("/clientes",(req,res)=>{
    const customer = req.body
    db.insertCustomer(customer)
    res.sendStatus(201)

})

app.get("/clientes/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    res.json(db.findCustomer(id))
})

app.get("/clientes",(req, res)=>{
    res.json(db.findCustomers())
})

app.listen(process.env.PORT,()=>{
    console.log('This server is running now...')
})