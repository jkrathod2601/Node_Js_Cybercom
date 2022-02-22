const route_json_array = require("../util/route.json");
const express = require("express");
const router = new express.Router();
const validateerror=require('../src/extra/validateerror')
const colors=require('colors')


try {
  if(Array.isArray(route_json_array)){
    route_json_array.forEach((ele,index) => {
      try {
        // setting up middleware
        let middlewares = ele.middlewares.map((x) => {
          let middleware_file_name = x.split(".")[0];
          let middleware_function_name = x.split(".")[1];
          const middleware_file = require(`${process.env.middleware_path}${middleware_file_name}`);
          return middleware_file[middleware_function_name];
        });
        //setting up controller
        let [controller_filname, controller_functionname] =ele.controller.split(".");
        const controller_calling = require(`${process.env.controller_path}${controller_filname}`);
        const controller = controller_calling[controller_functionname];
    
        router[ele.method](ele.path, middlewares, controller);
      } catch (error) {
        validateerror(ele,index)
      }
    });
  }else{
    throw new Error("enter the correct format of route.json file")
  }
} catch (error) {
  console.log(colors.red(error.message))
}


  




module.exports = router;


