const User=require("../model/user.js")
const sequelize=require("../util/databse")

User.update({id:2}).then((user)=>{
    user.id=2
    user.name="samay"
    user.age=34
    user.address="junagadh"
    return user.save()
}).then((data)=>{
    console.log("data updated successfully")
    console.log(data)
}).catch((err)=>{
    console.log(err)
})