const framework={}
const fs=require('fs')
const chalk=require('chalk')
const path=require('path');
var express = require('express');


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



global.framework=framework



