const product_data=[]
const path=require('path')
const fs=require('fs')
const ejs=require('ejs')
const User=require('../model/usermodel')
var nodemailer = require('nodemailer');
const pdf=require("html-pdf")
require('dotenv').config()



exports.addproducts=(req,res)=>{
    res.render('add_product')
}

exports.addproductspost=(req,res)=>{
    // console.log(req.body)
    let user=new User(req.body.product_name)
    user.save()
    // product_data.push(req.body.product_name)
    // res.sendFile(path.join(__dirname, '../','views','add_product.html'))
    res.redirect('/')
}

exports.shopcontroller=(req, res)=>{
    console.log("routing is calling and it is simple routing")
    console.log(User.fatchdata())
    res.render('shop',{
        about:"this is page about to learn EJS",
        data:User.fatchdata()
    })
}

exports.sendmail=(req,res)=>{
    res.render('mail')
}

exports.sendmailpost=async(req,res)=>{
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
           user:'jkrathod2601@gmail.com',
           pass:'RJ@$BORN@$2601'
        }
    });
    ejs.renderFile(path.join(__dirname,"../views/shop.ejs"), { about:"this is page about to learn EJS",data:User.fatchdata() }, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            var mainOptions = {
                from: '"YOUR_NAME" YOUR_EMAIL_ADDRESS',
                to: req.body.email,
                subject: 'Account Activated',
                html: data
            };
            //console.log("html data ======================>", mainOptions.html);
    
            transporter.sendMail(mainOptions, function (err, info) {
              if (err) {
                res.json({
                  msg: 'fail'
                })
              } else {
                res.redirect('/')
              }
          });
          }
      });
    // console.log(req.body.email)
    // let transport = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //        user:'jkrathod2601@gmail.com',
    //        pass:'RJ@$BORN@$2601'
    //     }
    // });
    // const message = {
    //     from: 'jkrathod2601@gmail.com', // Sender address
    //     to: req.body.email,         // List of recipients
    //     subject: "testing nodemailer", // Subject line
    //     html:fs.readFileSync(path.join(__dirname,'../','views','add_product.ejs'),'utf-8')// Plain text body
    // };
    // await transport.sendMail(message, function(err, info) {
    //     if (err) {
    //       res.send(err)
    //     } else {
    //         res.redirect('/')
    //     }
    // });
}

exports.pdfconverter=(req, res) => {
    ejs.renderFile(path.join(__dirname,"../views/shop.ejs"),{about:"this is page about to learn EJS",data:User.fatchdata() }, function(err, str) {
      if (err) return res.send(err);
      pdf.create(str).toFile("report.pdf", function(err, data) {
        if (err) return res.send(err);
        res.sendfile(path.join(__dirname,'../report.pdf'))
      });
    });
  }

exports.getinfo = (req, res) => {
  console.log(process.env.S3_BUCKET)
  console.log(req.params.id);
  console.log(req.params.age);
  console.log(req.query);
  res.redirect("/");
};