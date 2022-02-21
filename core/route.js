const data = require("./route.json");
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const router = new express.Router();

// accessing the all file name of middleware and controller
const file_name_controller = fs.readdirSync(
  path.join(__dirname, "../controller")
);
const file_name_middleware = fs.readdirSync(
  path.join(__dirname, "../middleware")
);
// creating the object that imports validate file
const imports = {};
const imports_controller = {};
// console.log(file_name)
// console.log('from router file')
console.log("--------------------------------");
data.forEach((ele) => {
  try {
    // for middleware require
    let middlewares = ele.middlewares.map((x) => {
      // get file name
      let value = x.split(".")[0];
      // get middleware name
      let value2 = x.split(".")[1];
      // require this into tyhe middleware object
      imports[value] = require(`../middleware/${value}`);
      // console.log(imports[value][value2])
      return imports[value][value2];
    });
    //imort controller
    imports_controller[ele.controller.split(".")[0]] = require(`../controller/${
      ele.controller.split(".")[0]
    }`);
    const controller = eval(
      imports_controller[ele.controller.split(".")[0]][
        ele.controller.split(".")[1]
      ]
    );
    // creating the dynamic route
    router[ele.method](ele.path, middlewares, controller);
  } catch (error) {
    console.log("check your controller or middlewares path and name");
  }
});
// console.log(imports)
module.exports = router;
console.log("--------------------------------");
