const path=require('path')
const fs=require('fs')
const express = require("express");
const router = new express.Router();
const validateerror=require('./validerror')
const auth_midlle=require('./middleware/auth_midlle');
// const { validate } = require('../module/user/middleware/auth');

let module_path=path.join(__dirname,"../module")
let module_array=fs.readdirSync(module_path)

module_array.forEach((dirname)=>{
    let route_json_array=require(module_path+"/"+dirname+"/route.json")
    // ----------------------------------------------------------------
    try {
  if(Array.isArray(route_json_array)){
    route_json_array.forEach((ele,index) => {
      try {
        // setting up middleware
        let middlewares = ele.middlewares.map((x) => {
          let middleware_file_name = x.split(".")[0];
          let middleware_function_name = x.split(".")[1];
          const middleware_file = require(`${module_path}/${dirname}/middleware/${middleware_file_name}`);
          return middleware_file[middleware_function_name];
        });


        //setting up controller
        let [controller_filname, controller_functionname] =ele.controller.split(".");
        const controller_calling = require(`${module_path}/${dirname}/controller/${controller_filname}`);
        const controller = controller_calling[controller_functionname];
    
        router[ele.method](ele.path,[auth_midlle.validate(ele.access),...middlewares], controller);
      } catch (error) {
        // validateerror(ele,index)
        console.log(error);
      }
    });
  }else{
    throw new Error("enter the correct format of route.json file")
  }
} catch (error) {
  console.log(framework.chalk.red(error.message))
}
    // ----------------------------------------------------------------
})

module.exports = router;