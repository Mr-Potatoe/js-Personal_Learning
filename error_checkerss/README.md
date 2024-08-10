
# JavaScript Error Checking and Debugging

This document provides an overview of useful built-in functions and techniques for error checking and debugging in JavaScript. These tools can help you diagnose issues, inspect variables, and ensure your code runs as expected.

## Built-In Functions and Methods

### `console.log()`

**Purpose:** Outputs information to the console.

**Usage:** Commonly used to log variable values, messages, and debugging information.

**Example:**

```javascript
let userName = 'Alice';
console.log('User name:', userName); // Output: User name: Alice
```

### `console.error()`

**Purpose:** Outputs error messages to the console.

**Usage:** Used to log error messages, making them stand out in the console.

**Example:**

```javascript
let errorMessage = 'Failed to load resource.';
console.error('Error:', errorMessage); // Output: Error: Failed to load resource.
```

### `console.warn()`

**Purpose:** Outputs warning messages to the console.

**Usage:** Useful for highlighting potential issues that are not necessarily errors.

**Example:**

```javascript
console.warn('This is a warning. Check the input value.'); // Output: This is a warning. Check the input value.
```

### `console.assert()`

**Purpose:** Tests if a condition is true, and if not, logs an error message.

**Usage:** Useful for assertion checks in code.

**Example:**

```javascript
let age = 25;
console.assert(age > 18, 'Age should be greater than 18'); // No output, condition is true
console.assert(age < 18, 'Age should be less than 18');  // Output: Assertion failed: Age should be less than 18
```

### `console.table()`

**Purpose:** Displays tabular data as a table.

**Usage:** Useful for viewing arrays or objects in a table format.

**Example:**

```javascript
const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 }
];
console.table(users);
```

### `try...catch`

**Purpose:** Handles exceptions by allowing you to catch errors and manage them gracefully.

**Usage:** Used for error handling in code blocks.

**Example:**

```javascript
try {
    let result = riskyFunction(); // Assume riskyFunction may throw an error
} catch (error) {
    console.error('An error occurred:', error.message);
}
```

### `Error` Object

**Purpose:** Represents an error that occurs during execution.

**Usage:** Can be instantiated and thrown manually.

**Example:**

```javascript
try {
    throw new Error('Something went wrong!');
} catch (e) {
    console.error(e.message); // Output: Something went wrong!
}
```

### `typeof` Operator

**Purpose:** Determines the type of a variable or expression.

**Usage:** Useful for checking data types and debugging type-related issues.

**Example:**

```javascript
let value = 42;
console.log(typeof value); // Output: number
```

### `instanceof` Operator

**Purpose:** Tests whether an object is an instance of a specific class or constructor.

**Usage:** Useful for type checking and debugging object types.

**Example:**

```javascript
let date = new Date();
console.log(date instanceof Date); // Output: true
```

### `Object.keys()` and `Object.values()`

**Purpose:** Retrieves the keys or values of an object.

**Usage:** Useful for debugging object properties.

**Example:**

```javascript
const person = { name: 'Alice', age: 30 };
console.log(Object.keys(person));   // Output: ['name', 'age']
console.log(Object.values(person)); // Output: ['Alice', 30]
```

## Real-World Examples

1. **Debugging API Responses:**
   When working with API responses, use `console.log()` to inspect the data structure and ensure it matches your expectations.

   ```javascript
   fetch('https://api.example.com/data')
       .then(response => response.json())
       .then(data => {
           console.log('API response:', data);
       })
       .catch(error => {
           console.error('Fetch error:', error);
       });
   ```

2. **Handling User Input:**
   Use `console.assert()` to validate user input and log errors when validation fails.

   ```javascript
   let userInput = 5;
   console.assert(userInput > 10, 'User input should be greater than 10');
   ```

3. **Managing Errors in Asynchronous Code:**
   Handle errors in asynchronous operations using `try...catch` blocks.

   ```javascript
   async function fetchData() {
       try {
           let response = await fetch('https://api.example.com/data');
           let data = await response.json();
           console.table(data);
       } catch (error) {
           console.error('Error fetching data:', error);
       }
   }

   fetchData();
   ```

By utilizing these functions and techniques, you can effectively debug and handle errors in your JavaScript applications. For more advanced debugging, consider using browser developer tools, which offer additional capabilities for inspecting and managing code execution.
