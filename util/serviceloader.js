const fs = require('fs');
const path=require('path');
// Getting an Array of the files in the 'controllers' folder.
let files = fs.readdirSync(path.join(__dirname, '../service'));

let service_d={}

files.forEach( fileName => {
    let [file_a_name]=fileName.split('.')
    global[file_a_name]=require(`../service/${fileName}`);
});


global.service=service_d
// module.exports=service_d