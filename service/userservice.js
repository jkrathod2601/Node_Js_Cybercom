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
}