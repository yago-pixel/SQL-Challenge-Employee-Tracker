const mysql = require('mysql2');
//require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'Giovanna@2020',
    database: 'SQL-Challenge-Employee-Tracker'
});

module.exports = db;