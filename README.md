
```markdown
# JavaScript Guide

Welcome to the JavaScript Guide! This interactive README covers JavaScript concepts from basic to advanced with real-world examples and interactive code snippets.

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

[![Try it on CodePen](https://img.shields.io/badge/Try%20it%20on-CodePen-blue)](https://codepen.io/pen?template=mdXWyK)
```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Variables Example</title>
</head>
<body>
  <h1>Check the console for the output</h1>
  <script>
    let itemName = 'Laptop';
    const itemPrice = 999.99;

    function updateItemName(newName) {
      itemName = newName;
    }

    console.log(`Item: ${itemName}, Price: $${itemPrice}`);

    updateItemName('Gaming Laptop');
    console.log(`Updated Item: ${itemName}`);
  </script>
</body>
</html>
```

*Explanation:* Variables store and update information about items in an inventory system. Open the [CodePen](https://codepen.io/pen?template=mdXWyK) to see the results.

### Data Types

**Example:** User Profile

[![Try it on CodePen](https://img.shields.io/badge/Try%20it%20on-CodePen-blue)](https://codepen.io/pen?template=mdXWyK)
```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Data Types Example</title>
</head>
<body>
  <h1>Check the console for the user profile</h1>
  <script>
    let userProfile = {
      username: 'john_doe',
      age: 30,
      isActive: true,
      address: null,
      preferences: ['email', 'sms'],
      details: undefined
    };

    console.log(userProfile);
  </script>
</body>
</html>
```

*Explanation:* Different data types are used to manage a user's profile and preferences. Open the [CodePen](https://codepen.io/pen?template=mdXWyK) to see the user profile.

### Operators

**Example:** Pricing Calculator

[![Try it on CodePen](https://img.shields.io/badge/Try%20it%20on-CodePen-blue)](https://codepen.io/pen?template=mdXWyK)
```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Operators Example</title>
</head>
<body>
  <h1>Check the console for the final price</h1>
  <script>
    let basePrice = 50;
    let discount = 10;
    let taxRate = 0.08;

    let finalPrice = (basePrice - discount) * (1 + taxRate);
    console.log(`Final Price: $${finalPrice.toFixed(2)}`);
  </script>
</body>
</html>
```

*Explanation:* Operators are used to compute the final price after applying discount and tax. Open the [CodePen](https://codepen.io/pen?template=mdXWyK) to see the result.

### Control Flow

**Example:** Access Control System

[![Try it on CodePen](https://img.shields.io/badge/Try%20it%20on-CodePen-blue)](https://codepen.io/pen?template=mdXWyK)
```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Control Flow Example</title>
</head>
<body>
  <h1>Check the console for access control messages</h1>
  <script>
    let userRole = 'admin';

    if (userRole === 'admin') {
      console.log('Access granted.');
    } else {
      console.log('Access denied.');
    }

    let roles = ['guest', 'user', 'admin'];
    for (let i = 0; i < roles.length; i++) {
      console.log(`Role: ${roles[i]}`);
    }
  </script>
</body>
</html>
```

*Explanation:* Control flow statements manage user access based on roles. Open the [CodePen](https://codepen.io/pen?template=mdXWyK) to see the access control messages.

## 2. Functions

### Function Declaration

**Example:** Task Scheduler

[![Try it on CodePen](https://img.shields.io/badge/Try%20it%20on-CodePen-blue)](https://codepen.io/pen?template=mdXWyK)
```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Function Declaration Example</title>
</head>
<body>
  <h1>Check the console for scheduled tasks</h1>
  <script>
    function scheduleTask(taskName, duration) {
      console.log(`Task "${taskName}" scheduled for ${duration} minutes.`);
    }

    scheduleTask('Meeting', 30);
  </script>
</body>
</html>
```

*Explanation:* Functions are used to define and execute tasks with specific parameters. Open the [CodePen](https://codepen.io/pen?template=mdXWyK) to see the scheduled tasks.

### Function Expression

**Example:** Email Formatter

[![Try it on CodePen](https://img.shields.io/badge/Try%20it%20on-CodePen-blue)](https://codepen.io/pen?template=mdXWyK)
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
    console.log(`Formatted Email: ${email}`);
  </script>
</body>
</html>
```

*Explanation:* Function expressions are used to create and use email formatting functions. Open the [CodePen](https://codepen.io/pen?template=mdXWyK) to see the formatted email.

### Arrow Functions

**Example:** Sales Tax Calculator

[![Try it on CodePen](https://img.shields.io/badge/Try%20it%20on-CodePen-blue)](https://codepen.io/pen?template=mdXWyK)
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
    console.log(`Tax Amount: $${tax.toFixed(2)}`);
  </script>
</body>
</html>
```

*Explanation:* Arrow functions provide a concise way to define tax calculation. Open the [CodePen](https://codepen.io/pen?template=mdXWyK) to see the tax amount.

### Closures

**Example:** Counter Application

[![Try it on CodePen](https://img.shields.io/badge/Try%20it%20on-CodePen-blue)](https://codepen.io/pen?template=mdXWyK)
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
      let count = 0;
      return function() {
        count += 1;
        return count;
      };
    }

    const counter = createCounter();
    console.log(counter());
    console.log(counter());
  </script>
</body>
</html>
```

*Explanation:* Closures help in creating private state for counters. Open the [CodePen](https://codepen.io/pen?template=mdXWyK) to see the counter values.

## 3. Objects and Arrays

### Objects

**Example:** E-commerce Product

[![Try it on CodePen](https://img.shields.io/badge/Try%20it%20on-CodePen-blue)](https://codepen.io/pen?template=mdXWyK)
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
        console.log(`Product: ${this.name}, Price: $${

this.price}`);
      }
    };

    product.displayInfo();
  </script>
</body>
</html>
```

*Explanation:* Objects are used to model e-commerce products with methods to display information. Open the [CodePen](https://codepen.io/pen?template=mdXWyK) to see the product details.

### Arrays

**Example:** Student Grades

[![Try it on CodePen](https://img.shields.io/badge/Try%20it%20on-CodePen-blue)](https://codepen.io/pen?template=mdXWyK)
```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Arrays Example</title>
</head>
<body>
  <h1>Check the console for student grades</h1>
  <script>
    let grades = [85, 92, 78, 90, 88];

    function average(arr) {
      let sum = arr.reduce((a, b) => a + b, 0);
      return sum / arr.length;
    }

    console.log(`Average Grade: ${average(grades).toFixed(2)}`);
  </script>
</body>
</html>
```

*Explanation:* Arrays manage collections of data like student grades and compute averages. Open the [CodePen](https://codepen.io/pen?template=mdXWyK) to see the average grade.

## 4. Asynchronous JavaScript

### Callbacks

**Example:** Data Fetching

[![Try it on CodePen](https://img.shields.io/badge/Try%20it%20on-CodePen-blue)](https://codepen.io/pen?template=mdXWyK)
```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Callbacks Example</title>
</head>
<body>
  <h1>Check the console for fetched data</h1>
  <script>
    function fetchData(callback) {
      setTimeout(() => {
        let data = { message: 'Data fetched successfully!' };
        callback(data);
      }, 1000);
    }

    fetchData((result) => {
      console.log(result.message);
    });
  </script>
</body>
</html>
```

*Explanation:* Callbacks are used to handle asynchronous data fetching. Open the [CodePen](https://codepen.io/pen?template=mdXWyK) to see the fetched data message.

### Promises

**Example:** Promise Chaining

[![Try it on CodePen](https://img.shields.io/badge/Try%20it%20on-CodePen-blue)](https://codepen.io/pen?template=mdXWyK)
```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Promises Example</title>
</head>
<body>
  <h1>Check the console for promise results</h1>
  <script>
    function fetchData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let data = { message: 'Data fetched with Promise!' };
          resolve(data);
        }, 1000);
      });
    }

    fetchData()
      .then(result => {
        console.log(result.message);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  </script>
</body>
</html>
```

*Explanation:* Promises handle asynchronous operations and chaining. Open the [CodePen](https://codepen.io/pen?template=mdXWyK) to see the promise results.

### Async/Await

**Example:** Async/Await for Data Fetching

[![Try it on CodePen](https://img.shields.io/badge/Try%20it%20on-CodePen-blue)](https://codepen.io/pen?template=mdXWyK)
```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Async/Await Example</title>
</head>
<body>
  <h1>Check the console for async results</h1>
  <script>
    async function fetchData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ message: 'Data fetched with Async/Await!' });
        }, 1000);
      });
    }

    (async () => {
      try {
        let result = await fetchData();
        console.log(result.message);
      } catch (error) {
        console.error('Error:', error);
      }
    })();
  </script>
</body>
</html>
```

*Explanation:* Async/Await simplifies working with promises. Open the [CodePen](https://codepen.io/pen?template=mdXWyK) to see the async results.

## 5. Error Handling

### Try/Catch

**Example:** Error Handling in Calculations

[![Try it on CodePen](https://img.shields.io/badge/Try%20it%20on-CodePen-blue)](https://codepen.io/pen?template=mdXWyK)
```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Try/Catch Example</title>
</head>
<body>
  <h1>Check the console for error handling</h1>
  <script>
    function divide(a, b) {
      try {
        if (b === 0) throw new Error('Division by zero');
        return a / b;
      } catch (error) {
        console.error(error.message);
      }
    }

    console.log(divide(10, 2));
    console.log(divide(10, 0));
  </script>
</body>
</html>
```

*Explanation:* `try/catch` is used to handle errors gracefully in calculations. Open the [CodePen](https://codepen.io/pen?template=mdXWyK) to see the error handling results.

## 6. JavaScript in the Browser

### DOM Manipulation

**Example:** Updating Page Content

[![Try it on CodePen](https://img.shields.io/badge/Try%20it%20on-CodePen-blue)](https://codepen.io/pen?template=mdXWyK)
```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript DOM Manipulation Example</title>
</head>
<body>
  <h1 id="title">Hello, World!</h1>
  <button onclick="updateTitle()">Change Title</button>

  <script>
    function updateTitle() {
      document.getElementById('title').textContent = 'Hello, JavaScript!';
    }
  </script>
</body>
</html>
```

*Explanation:* DOM manipulation is used to update page content dynamically. Open the [CodePen](https://codepen.io/pen?template=mdXWyK) to interact with the title update.

## 7. Advanced Concepts

### Prototypes and Inheritance

**Example:** Inheritance Example

[![Try it on CodePen](https://img.shields.io/badge/Try%20it%20on-CodePen-blue)](https://codepen.io/pen?template=mdXWyK)
```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Prototypes Example</title>
</head>
<body>
  <h1>Check the console for inheritance results</h1>
  <script>
    function Animal(name) {
      this.name = name;
    }

    Animal.prototype.speak = function() {
      console.log(`${this.name} makes a noise.`);
    };

    function Dog(name) {
      Animal.call(this, name);
    }

    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = Dog;

    Dog.prototype.speak = function() {
      console.log(`${this.name} barks.`);
    };

    let dog = new Dog('Rex');
    dog.speak();
  </script>
</body>
</html>
```

*Explanation:* Prototypes and inheritance allow for extended functionality in JavaScript. Open the [CodePen](https://codepen.io/pen?template=mdXWyK) to see inheritance in action.

### Modules

**Example:** JavaScript Modules

[![Try it on CodePen](https://img.shields.io/badge/Try%20it%20on-CodePen-blue)](https://codepen.io/pen?template=mdXWyK)
```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Modules Example</title>
</head>
<body>
  <h1>Check the console for module results</h1>
  <script type="module">
    import { greet } from './greet.js';

    console.log(greet('World'));
  </script>
</body>
</html>
```

**greet.js**
```javascript
export function greet(name) {
  return `Hello, ${name}!`;
}
```

*Explanation:* JavaScript modules help in organizing code and reusing functions. Open the [CodePen](https://codepen.io/pen?template=mdXWyK) to see modules in action.

---

Feel free to explore the interactive examples and expand your JavaScript knowledge!

For more in-depth learning, check out the following resources:

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

Happy coding!
```
## Contact

For any questions or comments, please reach out to [Aj](mailto:jaymeajarns@gmail.com).
```