const express=require('express');
const app=express()
const path=require('path');
const userrout=require('./routes/user')
const db=require('./util/database')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, 'public')))
app.use(userrout)
// setting ejs
app.set('view engine', 'ejs')

db.execute('select * from customer').then((data)=>{
    console.log(data[0])
}).catch((err)=>{
    console.log(err)
})

app.get("*",(req,res)=>{
    // res.status(404).sendFile(path.join(__dirname, './','views','404.html'))
    res.render('404')
})

app.listen(3000,()=>{
    console.log("server started on the porn number 3000")
})

