const framework={}
const fs=require('fs')
const chalk=require('chalk')
const path=require('path');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// adding services
let files = fs.readdirSync(path.join(__dirname, '../service'));
let service={}
files.forEach( fileName => {
    let [file_a_name]=fileName.split('.')
    service[file_a_name]=require(`../service/${fileName}`);
});
framework.service=service

// adding npm package
framework.chalk=chalk
framework.path=path
framework.fs=fs
framework.express=express
framework.cookieParser=cookieParser
framework.logger=logger


const functionpath=path.join(__dirname,"../function")
const ufunction={}
const definefunction=(objecttostore,path)=>{
    let all_file_folder=fs.readdirSync(path)
    all_file_folder.forEach((f_name)=>{
        if(fs.statSync(path+'/'+f_name).isFile()){
            let [file_name]=f_name.split(".")
            objecttostore[file_name]=require(path+'/'+f_name)
        }else{
            objecttostore[f_name]={}
            definefunction(objecttostore[f_name],path+"/"+f_name)
        }
    })
}
definefunction(ufunction,functionpath)
// console.log(ufunction)
framework.ufunction=ufunction

corefunction={}
const core_function_path=path.join(__dirname,"../core/function")
let all_core_function=fs.readdirSync(core_function_path)
all_core_function.forEach((f_name)=>{
    let [file_name]=f_name.split(".")
    corefunction[file_name]=require(core_function_path+"/"+f_name)
})
framework.corefunction=corefunction


// adding module function and service
let module_path=path.join(__dirname,"../module")
let module_file=fs.readdirSync(module_path)

module_file.forEach((ele)=>{
    let function_path=`${module_path}/${ele}/function`
    let service_path=`${module_path}/${ele}/service`
    let function_array_names=fs.readdirSync(function_path)
    let service_array_name=fs.readdirSync(service_path)
    gfunction={}
    gservice={}
    function_array_names.forEach((f_name)=>{
        let [function_name]=f_name.split(".")
        gfunction[function_name]=require(`${function_path}/${f_name}`)
    })
    service_array_name.forEach((f_name)=>{
        let [function_name]=f_name.split(".")
        gservice[function_name]=require(`${service_path}/${f_name}`)
    })
    framework[ele]={
        function:gfunction,
        service:gservice
    }
})









global.framework=framework



