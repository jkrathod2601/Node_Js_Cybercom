

exports.getproduct=async(req,res,next) =>{
   console.log(framework.chalk.yellow("get product is calling"));
   await framework.service.productservice.getproductdata().then((data)=>{
       res.status(200).send(data)
   }).catch((err)=>{
       res.status(500).send(err)
   })
}

exports.addproduct=async(req,res,next)=>{
    console.log(framework.chalk.yellow("add product is calling"));
    await framework.service.productservice.addproduct(req.body).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(400).send(err)
    })
}

exports.deleteproduct=async(req,res,next)=>{
    let id=req.params.id
    console.log(framework.chalk.yellow("delete product is calling"));
    framework.service.productservice.deleteproduct(id).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(400).send(err)
    })
}

exports.updateproduct=async(req,res,next)=>{
    let id=req.params.id
    console.log(framework.chalk.yellow("update product is calling"));
    framework.service.productservice.updateproduct(id,req.body).then((data)=>{
        res.status(200).send("updated sucessfully")
    }).catch((err)=>{
        res.status(400).send(err)
    })
}

exports.singleproduct=async(req,res,next)=>{
    let id=req.params.id
    console.log(framework.chalk.yellow("single product is calling"));
    framework.service.productservice.singleproductfind(id).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(400).send(err)
    })
}