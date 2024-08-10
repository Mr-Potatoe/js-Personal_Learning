// Example JavaScript code demonstrating various error-checking and debugging techniques

// 1. Console Logging
// Use console.log to output general information and debugging data to the console.
let userName = 'Alice';
console.log('User name:', userName); // Output: User name: Alice

// 2. Console Error
// Use console.error to output error messages to the console.
let errorMessage = 'Failed to load resource.';
console.error('Error:', errorMessage); // Output: Error: Failed to load resource.

// 3. Console Warning
// Use console.warn to output warning messages to the console.
console.warn('This is a warning. Check the input value.'); // Output: This is a warning. Check the input value.

// 4. Console Assertion
// Use console.assert to test conditions and log an error message if the condition is false.
let age = 25;
console.assert(age > 18, 'Age should be greater than 18'); // No output, condition is true
console.assert(age < 18, 'Age should be less than 18');  // Output: Assertion failed: Age should be less than 18

// 5. Console Table
// Use console.table to display arrays or objects in a tabular format.
const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 }
];
console.table(users); // Displays users array in a table format

// 6. Try-Catch for Error Handling
// Use try...catch to handle exceptions and manage errors gracefully.
function riskyFunction() {
    // Simulate an error
    throw new Error('Something went wrong!');
}

try {
    let result = riskyFunction(); // This will throw an error
} catch (error) {
    console.error('An error occurred:', error.message); // Output: An error occurred: Something went wrong!
}

// 7. Error Object
// Use the Error object to create and throw custom errors.
try {
    throw new Error('Custom error message');
} catch (e) {
    console.error(e.message); // Output: Custom error message
}

// 8. Typeof Operator
// Use typeof to determine the type of a variable or expression.
let value = 42;
console.log(typeof value); // Output: number

// 9. Instanceof Operator
// Use instanceof to test if an object is an instance of a specific class or constructor.
let date = new Date();
console.log(date instanceof Date); // Output: true

// 10. Object.keys() and Object.values()
// Use Object.keys() and Object.values() to retrieve keys and values from an object.
const person = { name: 'Alice', age: 30 };
console.log(Object.keys(person));   // Output: ['name', 'age']
console.log(Object.values(person)); // Output: ['Alice', 30]

// 11. Real-World Example: Debugging API Responses
// Fetch data from an API and use console.log to inspect the response.
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log('API response:', data); // Inspect API response
    })
    .catch(error => {
        console.error('Fetch error:', error); // Handle fetch errors
    });

// 12. Real-World Example: Handling User Input
// Validate user input and use console.assert to log errors if validation fails.
let userInput = 5;
console.assert(userInput > 10, 'User input should be greater than 10'); // Logs error if condition is false

// 13. Real-World Example: Managing Errors in Asynchronous Code
// Handle errors in asynchronous functions using try...catch blocks.
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.table(data); // Display data in a table format
    } catch (error) {
        console.error('Error fetching data:', error); // Handle fetch errors
    }
}

fetchData(); // Call the async function to fetch data
