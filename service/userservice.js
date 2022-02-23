const user_data={}


module.exports=class User{
    constructor(geting_user_data){
        this.id=geting_user_data.id;
        this.name=geting_user_data.name;
        this.age=geting_user_data.age
    }

    adduser(){
        return new Promise((resolve,reject)=>{
            let all_id_user_data=Object.keys(user_data)
            if(all_id_user_data.includes(String(this.id))){
                reject("this id is allready prsent in a database")
            }else{
                user_data[this.id]={
                    name:this.name,
                    age:this.age
                }
                console.log(user_data)
                resolve("user added sucessfully")
            }
        })
    }

    static getusersdata(){
        return user_data
    }

    static updateuser(id,getting_user_data){
        return new Promise((resolve,reject)=>{
            let all_id_user_data=Object.keys(user_data)
            if(all_id_user_data.includes(String(id))){
                user_data[id]={
                    name:getting_user_data.name,
                    age:getting_user_data.age
                }
                console.log(user_data)
                resolve("user updated sucessfully")
            }else{
                
                reject("this id is not prsent in a database")
            }
        })
    }

    static deleteuser(id){
        return new Promise((resolve,reject)=>{
            let all_id_user_data=Object.keys(user_data)
            if(all_id_user_data.includes(String(id))){
                delete user_data[id]
                resolve("user deleted sucessfully")
            }else{
                reject("this id is not prsent in a database")
            }
        })
    }

    static singleuserfind(id){
        return new Promise((resolve,reject)=>{
            let all_id_user_data=Object.keys(user_data)
            if(all_id_user_data.includes(String(id))){
                resolve(user_data[id])
            }else{
                reject("this id is not prsent in a database")
            }
        })
    }
}