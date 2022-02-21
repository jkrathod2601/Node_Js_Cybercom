const express=require('express')
const app=express()
const router=express.Router()
const path=require('path')
const ejs = require("ejs");
const shopcontroller=require("../controllers/shopcontroller")
const User=require("../model/usermodel")
const pdf=require("html-pdf")
// let pdf = require("html-pdf");

const { route } = require('express/lib/router')
// set ejs

router.get('/',shopcontroller.shopcontroller)

// without view engine
// router.get('/addproduct',(req,res)=>{
//     res.sendFile(path.join(__dirname, '../','views','add_product.html'))
// })

router.get('/addproduct',shopcontroller.addproducts)

router.post('/addproduct',shopcontroller.addproductspost)

router.get('/sendmail',shopcontroller.sendmail)

router.post('/sendmail',shopcontroller.sendmailpost)

router.get("/pdf",shopcontroller.pdfconverter);

router.get("/getinfo/:id/:age",shopcontroller.getinfo)

module.exports=router