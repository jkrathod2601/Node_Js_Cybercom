const express=require('express')
const app=express()
const router=express.Router()
const path=require('path')

const product_data=[]

var nodemailer = require('nodemailer');
const { route } = require('express/lib/router')
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

router.get('/sendmail',(req,res)=>{
    res.render('mail')
})

router.post('/sendmail',async(req,res)=>{
    // console.log(req.body.email)
    let transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
           user:'jkrathod2601@gmail.com',
           pass:'RJ@$BORN@$2601'
        }
    });
    const message = {
        from: 'jkrathod2601@gmail.com', // Sender address
        to: req.body.email,         // List of recipients
        subject: "testing nodemailer", // Subject line
        html:'<h3>You successfully send the mail</h3><h1>'// Plain text body
    };
    await transport.sendMail(message, function(err, info) {
        if (err) {
          res.send(err)
        } else {
            res.redirect('/')
        }
    });
})

module.exports=router