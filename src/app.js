const express=require('express');
const app= express();
const router=require("../core/route.js")

require('dotenv').config()
const port=process.env.port || 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))
require("../util/databse")
// console.log(router)


app.use(router)



app.listen(port, ()=>{
    console.log(process.env.port)
    console.log(`server started on port ${port}`);
})