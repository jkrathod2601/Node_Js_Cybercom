const data=[]

module.exports=class User{
    constructor(title){
        this.title=title;
    }

    save(){
        data.push(this)
    }

    static fatchdata(){
        return data
    }
}