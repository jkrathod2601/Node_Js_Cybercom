const User=require("../model/user.js")
const sequelize=require("../util/databse")

User.findAll().then((data)=>{
    console.log("--------------------------------")
    console.log(data)
}).catch((err)=>{
    console.error(err)
})