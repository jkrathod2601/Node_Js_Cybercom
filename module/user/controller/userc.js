// const Car=require('../../../models/car')
const db=require('../../../models/index')

module.exports.done=async(req,res)=>{
    // Car.findAll({raw:true}).then((data)=>{
    //     console.log(data)
    // }).catch((err)=>{
    //     console.log(err)
    // })

    db.cars.create({
        Name:"jay",
        modelName:"1.0.20.3"
    }).then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })

    // process.kill(process.pid, 'SIGINT')
}