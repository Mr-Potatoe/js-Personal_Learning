// Import necessary modules
const express = require('express'); // Import the Express library
const bodyParser = require('body-parser'); // Import body-parser for parsing incoming request bodies
const path = require('path'); // Import path module for resolving file paths
const db = require('./db_connection'); // Import the database connection module (assumed to be a custom module you've created)
require('dotenv').config(); // Load environment variables from a .env file

// Initialize the Express application
const app = express();
const PORT = process.env.PORT; // Use the PORT from environment variables

// Middleware to parse JSON bodies
app.use(bodyParser.json()); // This middleware will parse incoming requests with JSON payloads

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files like HTML, CSS, and JS from the 'public' directory

// Create a new user
app.post('/users', (req, res) => {
    // Extract the 'name' and 'email' fields from the request body
    const { name, email } = req.body;

    // SQL query to insert a new user into the database
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    
    // Execute the query
    db.query(sql, [name, email], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err); // Log error to the console
            res.status(500).send('Error inserting user'); // Send a 500 error response to the client
            return;
        }
        // Send a success response with the new user's ID
        res.status(201).send(`User created with ID: ${result.insertId}`);
    });
});

// Read all users
app.get('/users', (req, res) => {
    // SQL query to select all users from the database
    const sql = 'SELECT * FROM users';
    
    // Execute the query
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err); // Log error to the console
            res.status(500).send('Error fetching users'); // Send a 500 error response to the client
            return;
        }
        // Send the list of users as a JSON response
        res.json(results);
    });
});

// Read a single user by ID
app.get('/users/:id', (req, res) => {
    // Extract the user ID from the request parameters
    const userId = req.params.id;
    
    // SQL query to select a user by ID
    const sql = 'SELECT * FROM users WHERE id = ?';
    
    // Execute the query
    db.query(sql, [userId], (err, results) => {
        if (err) {
            console.error('Error fetching user:', err); // Log error to the console
            res.status(500).send('Error fetching user'); // Send a 500 error response to the client
            return;
        }
        if (results.length === 0) {
            res.status(404).send('User not found'); // Send a 404 response if no user is found with the given ID
            return;
        }
        // Send the user data as a JSON response
        res.json(results[0]);
    });
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
    // Extract the user ID from the request parameters
    const userId = req.params.id;
    
    // Extract the new name and email from the request body
    const { name, email } = req.body;
    
    // SQL query to update the user's name and email by ID
    const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    
    // Execute the query
    db.query(sql, [name, email, userId], (err, result) => {
        if (err) {
            console.error('Error updating user:', err); // Log error to the console
            res.status(500).send('Error updating user'); // Send a 500 error response to the client
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).send('User not found'); // Send a 404 response if no user is found with the given ID
            return;
        }
        // Send a success message
        res.send('User updated successfully');
    });
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
    // Extract the user ID from the request parameters
    const userId = req.params.id;
    
    // SQL query to delete a user by ID
    const sql = 'DELETE FROM users WHERE id = ?';
    
    // Execute the query
    db.query(sql, [userId], (err, result) => {
        if (err) {
            console.error('Error deleting user:', err); // Log error to the console
            res.status(500).send('Error deleting user'); // Send a 500 error response to the client
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).send('User not found'); // Send a 404 response if no user is found with the given ID
            return;
        }
        // Send a success message
        res.send('User deleted successfully');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Log a message to the console when the server starts
});
