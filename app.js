const express=require('express');
const app=express()
const userrout=require('./routes/user')

app.use(userrout)
// add prefix at the bigning
//app.use("/admin", userrout)
// it access by /admin/add ex

// app.use((req,res,next) => {
//     console.log("hello from 1st")
//     next()
// })

// app.use((req,res,next) => {
//     console.log("hello from 2")
//     res.send("<h1>hello from server 2</h1>")
// })

// page not found
// app.get("*",(req,res)=>{
//     res.send("error found plz check some other page")
// })
//page  not found
app.use((req,res,next)=>{
    res.status(404).send("not found")
})

app.listen(3000,()=>{
    console.log("server started on the porn number 3000")
})