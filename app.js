const express=require('express');
const app=express()
const path=require('path');
const userrout=require('./routes/user')

app.use(userrout)



app.get("*",(req,res)=>{
    res.status(404).sendFile(path.join(__dirname, './','views','404.html'))
})

app.listen(3000,()=>{
    console.log("server started on the porn number 3000")
})