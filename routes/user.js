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

// router.get('/htmltopdf',(req,res)=>{
//     let data_html=fs.readFileSync(path.join(__dirname,'../','views','add_product.ejs'),'utf-8')
//     console.log(data_html)
//     let options = {
//         "height": "11.25in",
//         "width": "8.5in",
//         "header": {
//             "height": "20mm"
//         },
//         "footer": {
//             "height": "20mm",
//         },
//     };
//     pdf.create(data_html, options).toFile("report.pdf", function (err, data) {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send("File created successfully");
//         }
//     });
// })


router.get("/pdf", (req, res) => {

    // your missing data, wheres it coming from?
    // it should also look like:
    // let data = { data: [{ imei: { name: '', ...}}, ...], ...}
  
    // render the ejs file
    ejs.renderFile(path.join(__dirname,"../views/shop.ejs"),{about:"this is page about to learn EJS",data:User.fatchdata() }, function(err, str) {
      if (err) return res.send(err);
  
      // str now contains your rendered html
      pdf.create(str).toFile("report.pdf", function(err, data) {
        if (err) return res.send(err);
  
        res.send("File created successfully");
      });
    });
  });

module.exports=router