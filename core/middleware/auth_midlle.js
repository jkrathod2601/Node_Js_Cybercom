const jwt=require('jsonwebtoken')
exports.validate = function(access_array){
    return async (req, res, next) => {
        try {
            if(access_array.length > 0){
                console.log(req.headers.jwttoken)
                const access_user=jwt.verify(req.headers.jwttoken,'123456789').role
                if(access_array.includes(access_user)){
                    console.log(framework.chalk.green("successfully validate login"))
                    next();
                }else{
                    res.end("unauthorized user")
                }
            }
           else{
               console.log("this route don't have an validation")
               next()
           }
        }
        catch (error) {
            console.log(error)
            res.end("unauthorized user")
        }
    }
}