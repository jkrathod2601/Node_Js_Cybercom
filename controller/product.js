const express=require('express');
const app=express()


exports.index=(req,res)=>{
    console.log("produict is called index")
}

exports.add=(req,res)=>{
    console.log("produict is called add")
    console.log(req.body)
}