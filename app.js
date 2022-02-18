const express=require('express');
const app=express()
const path=require('path');
const userrout=require('./routes/user')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, 'public')))
app.use(userrout)
// setting ejs
app.set('view engine', 'ejs')

app.get("*",(req,res)=>{
    // res.status(404).sendFile(path.join(__dirname, './','views','404.html'))
    res.render('404')
})

app.listen(3000,()=>{
    console.log("server started on the porn number 3000")
})