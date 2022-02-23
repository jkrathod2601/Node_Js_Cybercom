const fs = require('fs');
const path=require('path');
// Getting an Array of the files in the 'controllers' folder.
let files = fs.readdirSync(path.join(__dirname, '../service'));

let service_d={}

files.forEach( fileName => {
    let file_a_name=fileName.split('.')[0]
    service_d[file_a_name]=require(`../service/${fileName}`);
});


module.exports=service_d