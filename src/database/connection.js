// // import mysql from 'mysql2'
const mysql = require('mysql2')
const dotenv = require('dotenv')
// // import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createConnection(
    {
        // host: process.env.MYSQL_HOST,
        // user: process.env.MYSQL_USER,
        // password: process.env.MYSQL_PASSWORD,
        // database: process.env.MYSQL_DATABASE,
        // port: process.env.MYSQL_PORT,
        // multipleStatements: true
        host: "127.0.0.1",
        user: "root",
        password: "Owooluwa@123",
        database: "vestica_app",
        port: 3306,
        multipleStatements: true,
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
    }
).promise()

// pool.getConnection((error) =>{
//     if (error) throw error;
//     console.log('Successfully connected to the database')
// });

module.exports = pool;