const chalk=require('chalk')
const reader = require("readline-sync");
require("dotenv").config();
const fs=require("fs");
const path=require("path");
const db = require('../../database/models/index');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize=new Sequelize(
    process.env.mysql_databse_name,    //database name
    process.env.mysql_databse_username, //username
    process.env.mysql_databse_password,  //password
    {    
    dialect:process.env.databse_dialect,    //type of database name
    host:process.env.mysql_databse_host     //host url
    }
);

const queryInterface = sequelize.getQueryInterface();

const exec= require('child_process').exec

require('../../database/models/index')

console.log(chalk.blue("with use of database"),"====>",chalk.yellow("1"))
console.log(chalk.blue("with use of static"),"====>",chalk.yellow("2"))
const answer=reader.question(chalk.green("which method use for authentication?"))

if(answer==2){
    const file_data=fs.readFileSync(path.join(__dirname,"../files/auth_static.js"),"utf-8")
    fs.writeFileSync(path.join(__dirname,"../../core/core_controller.js"),file_data)
    console.log("successfully added static authentication")
}

if(answer==1){
    const answer=reader.question(chalk.green("are you ready to use our database schema yes / no?"))
    if(answer=="yes"){
       let user_model=fs.readFileSync(path.join(__dirname,"../files/auth_model.js"),'utf-8')
       fs.writeFileSync(path.join(__dirname,"../../database/models/user_model.js"),user_model)
       let user_migration=fs.readFileSync(path.join(__dirname,"../files/auth_migrations.js"),'utf-8')
       fs.writeFileSync(path.join(__dirname,"../../database/migrations/user_migration.js"),user_migration)

    const file_data=fs.readFileSync(path.join(__dirname,"../files/auth_database.js"),"utf-8")
    fs.writeFileSync(path.join(__dirname,"../../core/core_controller.js"),file_data)
    }
    if(answer=="no"){
        for(let i in dynamic_db_obj){
            console.log(chalk.blue(dynamic_db_obj[i]),"====>",chalk.yellow(i))
        }
        const answer=reader.question(chalk.green("select one model number for use our authentication"))
        queryInterface.addColumn(dynamic_db_obj[answer], 'key', { type: DataTypes.STRING }).then((data)=>{
            console.log("added key column to table")
        })
        queryInterface.addColumn(dynamic_db_obj[answer], 'refreshtoken', { type: DataTypes.STRING }).then((data)=>{
            console.log("added refreshtoken column to table")
        })
        const file_data=fs.readFileSync(path.join(__dirname,"../files/auth_database.js"),"utf-8")
        fs.writeFileSync(path.join(__dirname,"../../core/core_controller.js"),file_data)
    }
}


