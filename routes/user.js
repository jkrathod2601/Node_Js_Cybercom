const express=require('express')
const router=express.Router()

router.get('/',(req, res)=>{
    console.log("routing is calling and it is simple routing")
    res.send("the first routing from the routr is calling")
})

router.get('/simple',(req,res)=>{
    res.send("simple routing is called")
})

module.exports=router