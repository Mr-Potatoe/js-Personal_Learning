// db_connection.js

const mysql = require('mysql');
require('dotenv').config(); // To use environment variables from the .env file

// Create a connection to the MySQL database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1); // Exit the process if there's a connection error
    }
    console.log('Connected to the MySQL database');
});

module.exports = db;
