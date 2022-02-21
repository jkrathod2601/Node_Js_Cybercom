const data=require('./route.json')
const express=require('express')
const app=express()
const router=new express.Router()
const home=require('../controller/home')
const product=require('../controller/product')
const auth=require('../core/auth.js')
// console.log('from router file')

data.forEach((ele)=>{
    router.use(ele.path,eval(ele.middlewares[0]))
    switch (ele.method){
        case "get":
            router.get(ele.path,eval(ele.controller))
        case "post":
            router.post(ele.path,eval(ele.controller))
        case "put":
            router.put(ele.path,eval(ele.controller))
        case "delete":
            router.delete(ele.path,eval(ele.controller))
        case "patch":
            router.patch(ele.path,eval(ele.controller))
    }
})

module.exports=router
console.log('--------------------------------')