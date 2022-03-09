const jwt=require('jsonwebtoken')
exports.validate = function(access_array){
    return async (req, res, next) => {
        try {
            if(access_array.length > 0){
                // console.log(req.headers.jwttoken)
                const access_user=jwt.verify(req.headers.jwttoken,framework.jwtkey)
                // console.log(access_user.exp)
                // console.log(Math.round(new Date().getTime()/1000))
                // console.log(date1.getTime()-date.getTime())
                if(Math.round(new Date().getTime()/1000)-access_user.exp>=300){
                    console.log("jwt token changed")
                    let jwt_token=jwt.sign({
                        name:req.body.name,
                        role:req.body.role
                    },framework.jwtkey,{expiresIn:"1H"})
                    await db.user.update({token:jwt_token},{where:{name:access_user.name,role:access_user.role}}).then((data) => {
                        console.log(data)
                    })
                }
                if(access_array.includes(access_user.role)){
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
            console.log(framework.chalk.red(error.message))
            res.end("unauthorized user")
        }
    }
}