const express=require('express')
const router=express.Router()
const path=require('path')

router.get('/',(req, res)=>{
    console.log("routing is calling and it is simple routing")
    res.sendFile(path.join(__dirname, '../','views','shop.html'))
})

router.get('/addproduct',(req,res)=>{
    res.sendFile(path.join(__dirname, '../','views','add_product.html'))
})

module.exports=router