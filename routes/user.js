const express=require('express')
const app=express()
const router=express.Router()

const ejs = require("ejs");
const shopcontroller=require("../controllers/shopcontroller")
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

module.exports=router