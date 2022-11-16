// import mysql from 'mysql2'
const mysql = require('mysql2')
const dotenv = require('dotenv')
// import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool(
    {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    }
).promise()

pool.getConnection((error) =>{
    if (error) throw error;
    console.log('Successfully connected to the database')
});

module.exports = pool();