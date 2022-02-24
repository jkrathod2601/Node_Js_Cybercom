const usercontroller=require('../controller/usercontroller')
var router = framework.express.Router();

/* GET users listing. */
router
  .get("/user", usercontroller.getusers)
  .post("/user", usercontroller.adduser)
  .delete("/user/:id", usercontroller.deleteuser)
  .put("/user/:id", usercontroller.updateuser)
  .get('/user/:id',usercontroller.singleuser)

module.exports = router;
