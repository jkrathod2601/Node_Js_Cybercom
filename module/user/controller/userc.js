// const Car=require('../../../models/car')

const db = require("../../../database/models/index")

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