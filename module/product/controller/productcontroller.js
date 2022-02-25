module.exports.done1=(req,res)=>{
    framework.product.service.connect.connect()
    console.log(framework.chalk.yellow("productc.js is calling controller"))
}