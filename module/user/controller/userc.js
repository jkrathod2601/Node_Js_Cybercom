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
    console.log("called")
    try {
            const daat_veryfine = jwt.verify(req.headers.veryfication_token, framework.jwtkey)
            console.log(daat_veryfine)
            let userid = daat_veryfine.user_id
            const token_key=await db.user.findAll({raw:true},{where: {userid:userid}})
            try {
                const tokne_data=jwt.verify(req.headers.refreshtoken,token_key[0].key)

                const jwt_token=jwt.sign({
                    id:tokne_data.id,
                    name:tokne_data.name,
                    role:tokne_data.role,
                    key:daat_veryfine.ip
                },token_key[0].key,{expiresIn:"1h"})

                const refresh_token=jwt.sign({
                    id:tokne_data.id,
                    name:tokne_data.name,
                    role:tokne_data.role,
                    key:daat_veryfine.ip
                },token_key[0].key,{expiresIn:"2h"})

                await db.user.update({
                    token:jwt_token,
                    refreshtoken:refresh_token
                },{where:{id:userid}}).then((data)=>{
                    res.send("jwt and refresh token changed successfully")
                })
            } catch (error) {
                console.log(error)
            }
    } catch (error) {
        res.send(error.message)
    }
}


module.exports.getip=(req,res)=>{
    console.log(req.headers["x-forwarded-for"])
    res.send(req.headers["x-forwarded-for"])
}