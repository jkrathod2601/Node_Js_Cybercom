module.exports.googlecheck = async (email, id) => {
    try {
        console.log(framework.chalk("google service is called"));
        return new Promise(async (resolve, reject) => {
            console.log(email, id);
            const data = await db.user.findAll({
                where: {
                    email: email
                },
                raw: true,
            });
            if (data.length > 0) {
                if(data[0].googleid==id){
                    console.log(
                        framework.chalk.green(
                        "user is allready present in database and we confirming your login")
                    );
                    console.log(framework.chalk.blue(data[0].id))
                    resolve({userid:data[0].id,username:data[0].email,role:data[0].role})
                    // resolve("successfully login with google")
                }else{
                    await db.user.update({googleid:id},{where: {email:email}}).then(()=>{
                        console.log(framework.chalk.green('user found but first time login with googleid'))
                        resolve("sucessfully logged in with googleid")
                    })
                }
            } else {
                await db.user
                    .create({
                        email: email,
                        role: "admin",
                        googleid: id,
                    })
                    .then(() => {
                        console.log(framework.chalk.blue("user not found and then we register you into the system"))
                    });
                resolve("added successfully new user with googleid")
            }
        });
    } catch (error) {
        resolve(error);
    }
};


// facebook
module.exports.facebookcheck = async (email, id) => {
    try {
        console.log(framework.chalk("google service is called"));
        return new Promise(async (resolve, reject) => {
            console.log(email, id);
            const data = await db.user.findAll({
                where: {
                    email: email
                },
                raw: true,
            });
            if (data.length > 0) {
                if(data[0].facebookid==id){
                    console.log(
                        framework.chalk.green(
                        "user is allready present in database and we confirming your login")
                    );
                    resolve("successfully login with facebook")
                }else{
                    await db.user.update({facebookid:id},{where: {email:email}}).then(()=>{
                        console.log(framework.chalk.green('user found but first time login with facebook'))
                        resolve("sucessfully logged in with facebookid")
                    })
                }
            } else {
                await db.user
                    .create({
                        email: email,
                        role: "admin",
                        facebookid: id,
                    })
                    .then(() => {
                        console.log(framework.chalk.blue("user not found and then we register you into the system"))
                    });
                resolve("added successfully new user with facebookid")
            }
        });
    } catch (error) {
        resolve(error);
    }
};