// const Car=require('../../../models/car')

const db = require("../../../database/models/index")
const jwt = require("jsonwebtoken");

module.exports.done=async(req,res)=>{
    // Car.findAll({raw:true}).then((data)=>{
    //     console.log(data)
    // }).catch((err)=>{
    //     console.log(err)
    // })
    // console.log(db)
    await db.cars.create({
        name:"jay",
        price:"1.0.20.3"
    }).then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })

    // process.kill(process.pid, 'SIGINT')
}


module.exports.formdata=(req,res)=>{
    console.log("called")
    console.log(req.file)
}



module.exports.refreshtoken=async(req,res)=>{
//    console.log(req.cookies["_csrf"])
//    console.log(req.cookies["refresh_token"])
   console.log(await jwt.verify(req.cookies["refresh_token"],req.cookies["_csrf"]))
}


module.exports.getip=(req,res)=>{
    console.log(req.headers["x-forwarded-for"])
    res.send(req.headers["x-forwarded-for"])
}


module.exports.giveloginpage=(req,res)=>{
    res.render('login',{title:"",csrftoken:req.csrfToken()})
}

module.exports.login = (req,res)=>{
    console.log(req.body)
    if(req.body.username=="jay" && req.body.password=="2601"){
        console.log(req.cookies["_csrf"])
        let refreshtoken=jwt.sign({username:req.body.username},req.cookies["_csrf"],{expiresIn: "1h",})
        res.cookie("refresh_token",refreshtoken,{ maxAge: 900000, httpOnly: true ,secure:true})
        res.render('index',{
            title: 'jay'
        })
    }else{
        res.render('login',{title:"enter right username",csrftoken:req.csrfToken()})
    }
}