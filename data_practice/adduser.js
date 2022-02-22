const User=require("../model/user.js")
const sequelize=require("../util/databse")

User.create({
    id:3,
    name:"taqi",
    age:28,
    address:"near patel factory"
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.error(err)
})