const data=require('./route.json')
const express=require('express')

const app=express()
const router=new express.Router()
const home=require('../controller/home')
const product=require('../controller/product')
const auth=require('../core/auth.js')



// console.log('from router file')
console.log('--------------------------------')


data.forEach((ele)=>{
    let middlewares=ele.middlewares.map((x)=>{
        return eval(x)
    })
    router[ele.method](ele.path,[...middlewares],eval(ele.controller))
})

module.exports=router
console.log('--------------------------------')