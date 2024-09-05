// db_connection.js

// Step 1: Import the required modules
// Express is a web application framework for Node.js, used for building web applications and APIs.
// MySQL is a popular relational database management system, and 'mysql' is a Node.js driver for MySQL.
const express = require('express');
const mysql = require('mysql');

// Step 2: Initialize Express
// Create an instance of Express. This 'app' object will be used to define routes and middleware.
const app = express();

// Step 3: Create a MySQL Database Connection
// Use the 'mysql.createConnection' method to set up a connection to your MySQL database.
// The object passed to 'createConnection' contains the database configuration details.
const db = mysql.createConnection({
    host: 'localhost', // Database host (usually 'localhost' for local development)
    user: 'root', // MySQL username
    password: '', // MySQL password (leave empty if no password is set)
    database: 'testdb' // Name of the database you want to connect to
});

// Step 4: Connect to the Database
// Use the 'connect' method to establish the connection.
// If the connection is successful, a message is logged to the console.
// If there is an error, it is logged to the console.
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

// Step 5: Define a Simple Route
// This route handles GET requests to the root URL ('/'). When a request is made to this URL, 
// a simple message is sent as the response.
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Step 6: Define a Route to Test the Database Connection
// This route handles GET requests to '/createdb'. It runs a SQL query to create a new database 
// (if it doesn't exist already).
app.get('/createdb', (req, res) => {
    const sql = 'CREATE DATABASE IF NOT EXISTS testdb';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error creating database:', err);
            res.send('Error creating database');
            return;
        }
        console.log('Database created:', result);
        res.send('Database created');
    });
});

// Step 7: Start the Express Server
// Use the 'listen' method to start the server. It listens for connections on a specified port 
// (in this case, port 3000). Once the server is running, a message is logged to the console.
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// Summary
// This file demonstrates how to connect to a MySQL database using Node.js and Express.
// The connection is established using the 'mysql' module, and routes are defined using Express 
// to handle HTTP requests. One route is a simple GET request that sends a "Hello, World!" message,
// while another route runs a SQL query to create a database. Finally, the Express server is started
// and listens on port 3000 for incoming requests.
