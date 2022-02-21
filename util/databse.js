const Sequelize = require('sequelize');

const sequelize=new Sequelize('demo','root','root',{
    dialect:'mysql',
    host:'localhost'
});

sequelize.authenticate().then(()=>{
    console.log("connection create successfully");
}).catch((err)=>{
    console.log(err)
})