const chalk=require('chalk')
// const service=require('../util/serviceloader')
// console.log(service)

exports.getusers=async(req,res,next) =>{
    console.log(service)
    console.log(chalk.yellow("get user is calling"))
    let all_user_data=await userservice.getusersdata()
    res.status(200).json(all_user_data)
}

exports.adduser=async(req,res,next)=>{
    console.log(chalk.yellow("add user is calling"))
    
    await userservice.adduser(req.body).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        console.log(chalk.red(err))
        res.status(501).send(err)
    })
}

exports.deleteuser=async(req,res,next)=>{
    console.log(chalk.yellow("delete user is calling"))
    let id=req.params.id
    await userservice.deleteuser(id).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(404).send(err)
    })
}

exports.updateuser=async(req,res,next)=>{
    let id=req.params.id
    await userservice.updateuser(id,req.body).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(500).send(err)
    })
    console.log(id)
    console.log(chalk.yellow("update user is called"))
}

exports.singleuser=async(req,res,next)=>{
    let id=req.params.id
    await userservice.singleuserfind(id).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(404).send(err)
    })
}