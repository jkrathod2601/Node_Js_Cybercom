var express = require('express');
const productcontroller = require('../controller/productcontroller')
var router = express.Router();

/* GET users listing. */
router
  .get("/product", productcontroller.getproduct)
  .post("/product", productcontroller.addproduct)
  .delete("/product/:id", productcontroller.deleteproduct)
  .put("/product/:id", productcontroller.updateproduct)
  .get('/product/:id',productcontroller.singleproduct)

module.exports = router;
