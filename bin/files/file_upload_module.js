const express= require('express')
const multer=require('multer')

console.log("---------------------------------------")

const filestorage=multer.diskStorage({
  destination:(req,file,cb)=>{
    req.filesubmission=true
    cb(null,"taqi_file_save")
  },
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+'-'+Date.now() + '-' + Math.round(Math.random() * 1E9)+file.originalname)
  }
})

const filefilter=(req,file,cb)=>{
if(file.mimetype=="image/jpeg"){
  req.filesubmission=true
  cb(null,true)
}else{
  cb(null,false)
}
}

let ip=multer({storage:filestorage,fileFilter:filefilter})


exports.fileuploadis=ip.fields([{name:"file",maxCount:1}])