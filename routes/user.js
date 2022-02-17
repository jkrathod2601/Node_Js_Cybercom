const express=require('express')
const app=express()
const router=express.Router()
const path=require('path')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

router.get('/',(req, res)=>{
    console.log("routing is calling and it is simple routing")
    res.sendFile(path.join(__dirname, '../','views','shop.html'))
})

router.get('/addproduct',(req,res)=>{
    res.sendFile(path.join(__dirname, '../','views','add_product.html'))
})

router.post('/addproduct',(req,res)=>{
    console.log(req.body)
    // res.sendFile(path.join(__dirname, '../','views','add_product.html'))
    res.redirect('/')
})

module.exports=router