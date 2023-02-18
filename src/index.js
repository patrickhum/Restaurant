const express = require('express')
const path = require('path')
const app = express()

const publicDirectory = '../public'


const indexPage = path.resolve(publicDirectory, 'index.html')

app.get("/",(req,res)=>{
    res.sendFile(indexPage)
})

app.listen(3000,()=>{
    console.log("Start server in port 3000");
})