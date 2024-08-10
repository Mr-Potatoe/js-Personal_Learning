```markdown
# JavaScript Guide

This guide covers JavaJavaScript concepts from basic to advanced with real-world examples and interactive code snippets.

## Table of Contents

1. [Basics of JavaScript](#basics-of-javascript)
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

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Variables Example</title>
</head>
<body>
  <h1>Check the console for the output</h1>
  <script>
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
  </script>
</body>
</html>
```

*Explanation:* Variables store and update information about items in an inventory system. Open this HTML file in a browser and check the console to see the results.

### Data Types

**Example:** User Profile

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Data Types Example</title>
</head>
<body>
  <h1>Check the console for the user profile</h1>
  <script>
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
  </script>
</body>
</html>
```

*Explanation:* Different data types are used to manage a user's profile and preferences. Open this HTML file in a browser and check the console to see the user profile.

### Operators

**Example:** Pricing Calculator

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Operators Example</title>
</head>
<body>
  <h1>Check the console for the final price</h1>
  <script>
    let basePrice = 50; // Base price of an item
    let discount = 10;  // Discount amount
    let taxRate = 0.08; // Tax rate

    // Calculate final price
    let finalPrice = (basePrice - discount) * (1 + taxRate);
    console.log(`Final Price: $${finalPrice.toFixed(2)}`); // Final Price: $43.20
  </script>
</body>
</html>
```

*Explanation:* Operators are used to compute the final price after applying discount and tax. Open this HTML file in a browser and check the console to see the result.

### Control Flow

**Example:** Access Control System

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Control Flow Example</title>
</head>
<body>
  <h1>Check the console for access control messages</h1>
  <script>
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
  </script>
</body>
</html>
```

*Explanation:* Control flow statements manage user access based on roles. Open this HTML file in a browser and check the console for access control messages.

## 2. Functions

### Function Declaration

**Example:** Task Scheduler

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Function Declaration Example</title>
</head>
<body>
  <h1>Check the console for scheduled tasks</h1>
  <script>
    // Function to schedule a task
    function scheduleTask(taskName, duration) {
      console.log(`Task "${taskName}" scheduled for ${duration} minutes.`);
    }

    scheduleTask('Meeting', 30); // Task "Meeting" scheduled for 30 minutes.
  </script>
</body>
</html>
```

*Explanation:* Functions are used to define and execute tasks with specific parameters. Open this HTML file in a browser and check the console for the scheduled tasks.

### Function Expression

**Example:** Email Formatter

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Function Expression Example</title>
</head>
<body>
  <h1>Check the console for formatted email</h1>
  <script>
    const formatEmail = function(name, domain) {
      return `${name}@${domain}`;
    };

    let email = formatEmail('alice', 'example.com');
    console.log(`Formatted Email: ${email}`); // Formatted Email: alice@example.com
  </script>
</body>
</html>
```

*Explanation:* Function expressions are used to create and use email formatting functions. Open this HTML file in a browser and check the console for the formatted email.

### Arrow Functions

**Example:** Sales Tax Calculator

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Arrow Functions Example</title>
</head>
<body>
  <h1>Check the console for tax amount</h1>
  <script>
    const calculateTax = (amount, rate) => amount * rate;

    let totalAmount = 100;
    let taxRate = 0.07;
    let tax = calculateTax(totalAmount, taxRate);
    console.log(`Tax Amount: $${tax.toFixed(2)}`); // Tax Amount: $7.00
  </script>
</body>
</html>
```

*Explanation:* Arrow functions provide a concise way to define tax calculation. Open this HTML file in a browser and check the console for the tax amount.

### Closures

**Example:** Counter Application

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Closures Example</title>
</head>
<body>
  <h1>Check the console for counter values</h1>
  <script>
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
  </script>
</body>
</html>
```

*Explanation:* Closures help in creating private state for counters. Open this HTML file in a browser and check the console for the counter values.

## 3. Objects and Arrays

### Objects

**Example:** E-commerce Product

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Objects Example</title>
</head>
<body>
  <h1>Check the console for product information</h1>
  <script>
    let product = {
      id: 101,
      name: 'Smartphone',
      price: 699.99,
      displayInfo: function() {
        console.log(`Product: ${this.name}, Price: $${this.price}`);
      }
    };

    product.displayInfo(); // Product: Smartphone, Price: $699.99
  </script>
</body>
</html>
```

*Explanation:* Objects represent real-world entities with properties and methods. Open this HTML file in a browser and check the console for the product information.

### Arrays

**Example:** Task List

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Arrays Example</title>
</head>
<body>
  <h1>Check the console for tasks</h1>
  <script>
    let tasks = ['Buy groceries', 'Clean the house', 'Pay bills'];

    // Add a new task
    tasks.push('Walk the dog');

    // Iterate over tasks
    tasks.forEach(task => console.log(`Task: ${task}`));
  </script>
</body>
</html>
```

*Explanation:* Arrays manage lists of tasks and provide methods to manipulate and display them. Open this HTML file in a browser and check the console for the tasks.

## 4. Asynchronous JavaScript

### Callbacks

**Example:** File Reading Simulation

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Callbacks Example</title>
</head>
<body>
  <h1>Check the console for file content</h1>
  <script>
    function readFile(callback) {
      setTimeout(() => {
        callback('File content');
      }, 1000);
    }

    readFile(content => {
      console.log(content); // File content
    });
  </script>
</body>
</html>
```

*Explanation:*

 Callbacks handle asynchronous operations like reading files. Open this HTML file in a browser and check the console for the file content.

### Promises

**Example:** API Data Fetch

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Promises Example</title>
</head>
<body>
  <h1>Check the console for fetched data</h1>
  <script>
    function fetchData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Data received');
        }, 1000);
      });
    }

    fetchData().then(data => console.log(data)); // Data received
  </script>
</body>
</html>
```

*Explanation:* Promises manage asynchronous operations and handle results or errors. Open this HTML file in a browser and check the console for the fetched data.

### Async/Await

**Example:** User Data Fetch

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Async/Await Example</title>
</head>
<body>
  <h1>Check the console for user data</h1>
  <script>
    async function fetchUserData() {
      let response = await fetch('https://api.example.com/user');
      let data = await response.json();
      return data;
    }

    fetchUserData().then(data => console.log(data)).catch(error => console.error(error));
  </script>
</body>
</html>
```

*Explanation:* Async/await simplifies asynchronous code, making it easier to read and write. Open this HTML file in a browser and check the console for the user data.

## 5. Error Handling

### try...catch

**Example:** Division Operation

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Error Handling Example</title>
</head>
<body>
  <h1>Check the console for error handling</h1>
  <script>
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
  </script>
</body>
</html>
```

*Explanation:* Error handling manages unexpected issues like division by zero. Open this HTML file in a browser and check the console for error handling results.

## 6. JavaScript in the Browser

### DOM Manipulation

**Example:** To-do List Application

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript DOM Manipulation Example</title>
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

*Explanation:* DOM manipulation allows dynamic updates to a webpage’s content. Open this HTML file in a browser, click the button, and see the new task added to the list.

### Event Handling

**Example:** Form Submission

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Event Handling Example</title>
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

*Explanation:* Event handling manages user interactions such as form submissions. Open this HTML file in a browser, fill in the form, and click submit to see the greeting message.

## 7. Advanced Concepts

### Understanding the Event Loop

**Example:** Task Scheduling

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Event Loop Example</title>
</head>
<body>
  <h1>Check the console for event loop example</h1>
  <script>
    console.log('Start');

    setTimeout(() => {
      console.log('Timeout');
    }, 0);

    console.log('End');

    // Output:
    // Start
    // End
    // Timeout
  </script>
</body>
</html>
```

*Explanation:* The event loop processes asynchronous callbacks after the current execution stack is clear. Open this HTML file in a browser and check the console for the event loop output.

### Generators and Iterators

**Example:** Paginated Data Fetching

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Generators Example</title>
</head>
<body>
  <h1>Check the console for paginated data</h1>
  <script>
    function* paginatedData() {
      yield 'Page 1';
      yield 'Page 2';
      yield 'Page 3';
    }

    const dataIterator = paginatedData();
    for (let page of dataIterator) {
      console.log(page); // Page 1, Page 2, Page 3
    }
  </script>
</body>
</html>
```

*Explanation:* Generators provide a way to produce and iterate over sequences of data. Open this HTML file in a browser and check the console for paginated data.

### Reflect API

**Example:** Property Management

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Reflect API Example</title>
</head>
<body>
  <h1>Check the console for Reflect API usage</h1>
  <script>
    const person = {
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
  </script>
</body>
</html>
```

*Explanation:* The Reflect API provides methods to intercept and manage object operations. Open this HTML file in a browser and check the console for Reflect API usage.

### Proxy API

**Example:** Validation of User Input

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Proxy API Example</title>
</head>
<body>
  <h1>Check the console for Proxy API usage</h1>
  <script>
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
  </script>
</body>
</html>
```

*Explanation:* The Proxy API enables custom handling of property assignments and other operations. Open this HTML file in a browser and check the console for Proxy API usage.

### Async Iterators

**Example:** Data Streaming

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Async Iterators Example</title>
</head>
<body>
  <h1>Check the console for async data streaming</h1>
  <script>
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
  </script>
</body>
</html>
```

*Explanation:* Async iterators manage asynchronous data streams and provide a way to handle each chunk of data as it becomes available. Open this HTML file in a browser and check the console for async data streaming.

### Decorators (Requires Babel or TypeScript)

**Example:** Logging Method Calls

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Decorators Example</title>
</head>
<body>
  <h1>Check the console for decorated method</h1>
  <script>
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
  </script>
</body>
</html>
```



*Explanation:* Decorators enhance class methods by adding logging or other functionality. Note that you'll need a tool like Babel to use decorators. Open this HTML file in a browser and check the console for the decorated method.

### Memory Management

**Example:** Memory Leak Prevention

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Memory Management Example</title>
</head>
<body>
  <h1>Check the console for memory management</h1>
  <script>
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
  </script>
</body>
</html>
```

*Explanation:* Proper memory management prevents leaks by controlling the size and lifespan of data storage. Open this HTML file in a browser and check the console for memory management.

### Advanced Function Concepts

#### Currying

**Example:** Configurable Math Operations

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Currying Example</title>
</head>
<body>
  <h1>Check the console for curried functions</h1>
  <script>
    function multiply(a) {
      return function(b) {
        return a * b;
      };
    }

    const double = multiply(2);
    console.log(double(5)); // 10
  </script>
</body>
</html>
```

*Explanation:* Currying transforms functions to handle partial application of arguments. Open this HTML file in a browser and check the console for curried functions.

### Symbol and Well-Known Symbols

**Example:** Unique Object Keys

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Symbols Example</title>
</head>
<body>
  <h1>Check the console for symbols</h1>
  <script>
    const uniqueId = Symbol('id');
    const user = {
      [uniqueId]: 123
    };

    console.log(user[uniqueId]); // 123
  </script>
</body>
</html>
```

*Explanation:* Symbols are used for unique property keys to avoid naming collisions. Open this HTML file in a browser and check the console for symbol usage.

### Function Composition

**Example:** Combining Utility Functions

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Function Composition Example</title>
</head>
<body>
  <h1>Check the console for composed functions</h1>
  <script>
    const add = (a, b) => a + b;
    const multiply = (a, b) => a * b;

    const compose = (f, g) => (x, y) => f(g(x, y), y);

    const result = compose(multiply, add)(2, 3);
    console.log(result); // 10
  </script>
</body>
</html>
```

*Explanation:* Function composition combines multiple functions to create complex operations. Open this HTML file in a browser and check the console for function composition results.

### Web Workers

**Example:** Background Task Processing

**index.html**

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Web Worker Example</title>
</head>
<body>
  <h1>Check the console for web worker results</h1>
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

*Explanation:* Web Workers allow for background processing without blocking the main thread. Open `index.html` in a browser and check the console for web worker results.


For any questions or comments, please reach out to [Aj](mailto:jaymeajarns@gmail.com).