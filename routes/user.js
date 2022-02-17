const express=require('express')
const app=express()
const router=express.Router()
const path=require('path')

const product_data=[]

// set ejs

router.get('/',(req, res)=>{
    console.log("routing is calling and it is simple routing")
    res.render('shop',{
        about:"this is page about to learn EJS",
        data:product_data
    })
})

// without view engine
// router.get('/addproduct',(req,res)=>{
//     res.sendFile(path.join(__dirname, '../','views','add_product.html'))
// })


router.get('/addproduct',(req,res)=>{
    res.render('add_product')
})

router.post('/addproduct',(req,res)=>{
    console.log(req.body)
    product_data.push(req.body.product_name)
    // res.sendFile(path.join(__dirname, '../','views','add_product.html'))
    res.redirect('/')
})

module.exports=router