const mysql = require("mysql")
require('dotenv').config();
const database_url = process.env.DATABASE
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    port: 3306,
    database : database_url
})



connection.connect((error)=>{
    if(error){
       console.log({Error:error.sqlMessage})
    }
    else{
        console.log("Database connect")
    }
})


module.exports = {connection}