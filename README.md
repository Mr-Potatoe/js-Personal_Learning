# JavaScript Guide

This guide covers JavaScript concepts from basic to advanced with real-world examples and detailed explanations.

## Table of Contents

1. [Basics of JavaScript](##basics-of-javascript)
2. [Functions](#functions)
3. [Objects and Arrays](#objects-and-arrays)
4. [Asynchronous JavaScript](#asynchronous-javascript)
5. [Error Handling](#error-handling)
6. [JavaScript in the Browser](#javascript-in-the-browser)
7. [Advanced Concepts](#advanced-concepts)

---

## 1. Basics of JavaScript

### Variables

**Example:** Inventory Management System
```javascript
// Define variables to manage inventory
let itemName = 'Laptop';
const itemPrice = 999.99; // Constant price

// Function to update item name
function updateItemName(newName) {
  itemName = newName;
}

console.log(`Item: ${itemName}, Price: $${itemPrice}`); // Item: Laptop, Price: $999.99

updateItemName('Gaming Laptop');
console.log(`Updated Item: ${itemName}`); // Updated Item: Gaming Laptop
```
*Explanation:* Variables store and update information about items in an inventory system.

### Data Types

**Example:** User Profile
```javascript
// Define user profile
let userProfile = {
  username: 'john_doe', // String
  age: 30,              // Number
  isActive: true,       // Boolean
  address: null,        // Null
  preferences: ['email', 'sms'], // Array
  details: undefined    // Undefined
};

console.log(userProfile);
```
*Explanation:* Different data types are used to manage a user's profile and preferences.

### Operators

**Example:** Pricing Calculator
```javascript
let basePrice = 50; // Base price of an item
let discount = 10;  // Discount amount
let taxRate = 0.08; // Tax rate

// Calculate final price
let finalPrice = (basePrice - discount) * (1 + taxRate);
console.log(`Final Price: $${finalPrice.toFixed(2)}`); // Final Price: $43.20
```
*Explanation:* Operators are used to compute the final price after applying discount and tax.

### Control Flow

**Example:** Access Control System
```javascript
let userRole = 'admin'; // User role

if (userRole === 'admin') {
  console.log('Access granted.');
} else {
  console.log('Access denied.');
}

// Loop through roles
let roles = ['guest', 'user', 'admin'];
for (let i = 0; i < roles.length; i++) {
  console.log(`Role: ${roles[i]}`);
}
```
*Explanation:* Control flow statements manage user access based on roles.

## 2. Functions

### Function Declaration

**Example:** Task Scheduler
```javascript
// Function to schedule a task
function scheduleTask(taskName, duration) {
  console.log(`Task "${taskName}" scheduled for ${duration} minutes.`);
}

scheduleTask('Meeting', 30); // Task "Meeting" scheduled for 30 minutes.
```
*Explanation:* Functions are used to define and execute tasks with specific parameters.

### Function Expression

**Example:** Email Formatter
```javascript
const formatEmail = function(name, domain) {
  return `${name}@${domain}`;
};

let email = formatEmail('alice', 'example.com');
console.log(`Formatted Email: ${email}`); // Formatted Email: alice@example.com
```
*Explanation:* Function expressions are used to create and use email formatting functions.

### Arrow Functions

**Example:** Sales Tax Calculator
```javascript
const calculateTax = (amount, rate) => amount * rate;

let totalAmount = 100;
let taxRate = 0.07;
let tax = calculateTax(totalAmount, taxRate);
console.log(`Tax Amount: $${tax.toFixed(2)}`); // Tax Amount: $7.00
```
*Explanation:* Arrow functions provide a concise way to define tax calculation.

### Closures

**Example:** Counter Application
```javascript
function createCounter() {
  let count = 0; // Private variable
  return function() {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```
*Explanation:* Closures help in creating private state for counters.

## 3. Objects and Arrays

### Objects

**Example:** E-commerce Product
```javascript
let product = {
  id: 101,
  name: 'Smartphone',
  price: 699.99,
  displayInfo: function() {
    console.log(`Product: ${this.name}, Price: $${this.price}`);
  }
};

product.displayInfo(); // Product: Smartphone, Price: $699.99
```
*Explanation:* Objects represent real-world entities with properties and methods.

### Arrays

**Example:** Task List
```javascript
let tasks = ['Buy groceries', 'Clean the house', 'Pay bills'];

// Add a new task
tasks.push('Walk the dog');

// Iterate over tasks
tasks.forEach(task => console.log(`Task: ${task}`));
```
*Explanation:* Arrays manage lists of tasks and provide methods to manipulate and display them.

## 4. Asynchronous JavaScript

### Callbacks

**Example:** File Reading Simulation
```javascript
function readFile(callback) {
  setTimeout(() => {
    callback('File content');
  }, 1000);
}

readFile(content => {
  console.log(content); // File content
});
```
*Explanation:* Callbacks handle asynchronous operations like reading files.

### Promises

**Example:** API Data Fetch
```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data received');
    }, 1000);
  });
}

fetchData().then(data => console.log(data)); // Data received
```
*Explanation:* Promises manage asynchronous operations and handle results or errors.

### Async/Await

**Example:** User Data Fetch
```javascript
async function fetchUserData() {
  let response = await fetch('https://api.example.com/user');
  let data = await response.json();
  return data;
}

fetchUserData().then(data => console.log(data)).catch(error => console.error(error));
```
*Explanation:* Async/await simplifies asynchronous code, making it easier to read and write.

## 5. Error Handling

### try...catch

**Example:** Division Operation
```javascript
function divide(a, b) {
  try {
    if (b === 0) throw new Error('Cannot divide by zero');
    return a / b;
  } catch (error) {
    console.error(error.message);
  }
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // Cannot divide by zero
```
*Explanation:* Error handling manages unexpected issues like division by zero.

## 6. JavaScript in the Browser

### DOM Manipulation

**Example:** To-do List Application
```html
<!DOCTYPE html>
<html>
<head>
  <title>To-do List</title>
</head>
<body>
  <ul id="todo-list">
    <li>Buy groceries</li>
    <li>Clean the house</li>
  </ul>
  <button onclick="addItem()">Add Task</button>

  <script>
    function addItem() {
      const ul = document.getElementById('todo-list');
      const li = document.createElement('li');
      li.textContent = 'New Task';
      ul.appendChild(li);
    }
  </script>
</body>
</html>
```
*Explanation:* DOM manipulation allows dynamic updates to a webpage’s content.

### Event Handling

**Example:** Form Submission
```html
<!DOCTYPE html>
<html>
<head>
  <title>Form Example</title>
</head>
<body>
  <form id="myForm">
    <input type="text" id="username" placeholder="Enter username" />
    <button type="submit">Submit</button>
  </form>
  <p id="message"></p>

  <script>
    document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      document.getElementById('message').textContent = `Hello, ${username}!`;
    });
  </script>
</body>
</html>
```
*Explanation:* Event handling manages user interactions such as form submissions.

## 7. Advanced Concepts

### Understanding the Event Loop

**Example:** Task Scheduling
```javascript
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('End');

// Output:
// Start
// End
// Timeout
```
*Explanation:* The event loop processes asynchronous callbacks after the current execution stack is clear.

### Generators and Iterators

**Example:** Paginated Data Fetching
```javascript
function* paginatedData() {
  yield 'Page 1';
  yield 'Page 2';
  yield 'Page 3';
}

const dataIterator = paginatedData();
for (let page of dataIterator) {
  console.log(page); // Page 1, Page 2, Page 3
}
```
*Explanation:* Generators provide a way to produce and iterate over sequences of data.

### Reflect API

**Example:** Property Management
```javascript
const person =

 {
  name: 'John',
  age: 30
};

// Get property
console.log(Reflect.get(person, 'name')); // John

// Set property
Reflect.set(person, 'age', 31);
console.log(person.age); // 31

// Delete property
Reflect.deleteProperty(person, 'age');
console.log(person.age); // undefined
```
*Explanation:* The Reflect API provides methods to intercept and manage object operations.

### Proxy API

**Example:** Validation of User Input
```javascript
const handler = {
  set(target, property, value) {
    if (property === 'age' && (value < 0 || value > 120)) {
      throw new Error('Invalid age');
    }
    target[property] = value;
    return true;
  }
};

const user = new Proxy({}, handler);

try {
  user.age = 25;
  console.log(user.age); // 25
  user.age = 150; // Throws error
} catch (e) {
  console.error(e.message); // Invalid age
}
```
*Explanation:* The Proxy API enables custom handling of property assignments and other operations.

### Async Iterators

**Example:** Data Streaming
```javascript
async function* fetchData() {
  yield 'Chunk 1';
  yield 'Chunk 2';
  yield 'Chunk 3';
}

(async () => {
  for await (const chunk of fetchData()) {
    console.log(chunk); // Chunk 1, Chunk 2, Chunk 3
  }
})();
```
*Explanation:* Async iterators manage asynchronous data streams and provide a way to handle each chunk of data as it becomes available.

### Decorators (Requires Babel or TypeScript)

**Example:** Logging Method Calls
```javascript
function log(target, key, descriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function(...args) {
    console.log(`Calling ${key} with arguments:`, args);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

class Calculator {
  @log
  add(a, b) {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3)); // Calling add with arguments: [ 2, 3 ]
                             // 5
```
*Explanation:* Decorators enhance class methods by adding logging or other functionality.

### Memory Management

**Example:** Memory Leak Prevention
```javascript
let cache = [];

function cacheData(data) {
  cache.push(data);
  if (cache.length > 10) {
    cache.shift(); // Remove the oldest data
  }
}

cacheData('Data 1');
cacheData('Data 2');
// Add more data and ensure that the cache doesn't grow indefinitely
```
*Explanation:* Proper memory management prevents leaks by controlling the size and lifespan of data storage.

### Advanced Function Concepts

#### Currying

**Example:** Configurable Math Operations
```javascript
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5)); // 10
```
*Explanation:* Currying transforms functions to handle partial application of arguments.

### Symbol and Well-Known Symbols

**Example:** Unique Object Keys
```javascript
const uniqueId = Symbol('id');
const user = {
  [uniqueId]: 123
};

console.log(user[uniqueId]); // 123
```
*Explanation:* Symbols are used for unique property keys to avoid naming collisions.

### Function Composition

**Example:** Combining Utility Functions
```javascript
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const compose = (f, g) => (x, y) => f(g(x, y), y);

const result = compose(multiply, add)(2, 3);
console.log(result); // 10
```
*Explanation:* Function composition combines multiple functions to create complex operations.

### Web Workers

**Example:** Background Task Processing

**index.html**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Web Worker Example</title>
</head>
<body>
  <script>
    const worker = new Worker('worker.js');
    
    worker.postMessage('Start processing');
    
    worker.onmessage = function(event) {
      console.log('Message from worker:', event.data);
    };
  </script>
</body>
</html>
```

**worker.js**
```javascript
onmessage = function(event) {
  let result = 'Processing complete';
  postMessage(result);
};
```
*Explanation:* Web Workers allow for background processing without blocking the main thread.
