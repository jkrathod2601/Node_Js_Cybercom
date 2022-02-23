const chalk=require('chalk')
const User=require('../service/userservice')

exports.getusers=async(req,res,next) =>{
    console.log(chalk.yellow("get user is calling"))
    let all_user_data=await User.getusersdata()
    res.status(200).json(all_user_data)
}

exports.adduser=(req,res,next)=>{
    console.log(chalk.yellow("add user is calling"))
    let user=new User(req.body)
    user.adduser().then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        console.log(chalk.red(err))
        res.status(501).send(err)
    })
}

exports.deleteuser=(req,res,next)=>{
    let id=req.params.id
    console.log(id)
    console.log(chalk.yellow("delete user is calling"))
}

exports.updateuser=(req,res,next)=>{
    let id=req.params.id
    console.log(id)
    console.log(chalk.yellow("update user is called"))
}