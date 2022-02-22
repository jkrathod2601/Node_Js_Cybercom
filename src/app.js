require("dotenv").config();
const express = require("express");
const app = express();
const router = require("../core/route.js");
const chalk=require('chalk')
const colors = require("colors");
const sequelize = require("../util/databse");
const portcheck = require("../src/extra/portcheck");
let port = process.env.port || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
// require("../util/databse")
// console.log(router)

// require('../data_practice/adduser')
// require('../data_practice/getuser')
// require('../data_practice/updateuser')

// define model
// const User=require("../model/user.js")

app.use(router);

const servercreation = async () => {
  await portcheck(port).then((data) => {
    if (data == false) {
      port = eval(port) + 1;
      servercreation();
    } else {
      readline.question(
        chalk.green(`yes or no for creating server on port ${port}?`),
        (answer_port_choice) => {
          if (answer_port_choice == "yes") {
            app.listen(port, () => {
              console.log(
                colors.green.underline(`server started on port ${port}`)
              );
              return;
            });
          } else {
            return;
          }
        }
      );
    }
  });
};

// const servercreation=async()=>{
//   await portcheck(port).then((data)=>{
//     if(data==true){
//       app.listen(port, () => {
//         console.log(colors.green.underline(`server started on port ${port}`));
//         return
//       });
//     }else{
//       console.log(colors.red(`${port} is allready listening`))
//       port=parseInt(port)+1
//       console.log(`are you ready to start this with port number ${port} yes/no?`)
//       readline.question(`yes or no?`, answer_port_choice => {
//         if(answer_port_choice=="yes"){
//           servercreation()
//         }else{
//           return
//         }
//         // readline.close()
//       })
//     }
//   })
// }
servercreation();

// sequelize
//   .sync()
//   .then((data) => {
//     // console.log(data);

//   })
//   .catch((err) => {
//     console.log(err);
//   });
