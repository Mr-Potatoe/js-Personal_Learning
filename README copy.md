
# JavaScript Guide

This guide covers JavaScript concepts from basic to advanced. Use this document as a reference to learn and practice JavaScript effectively.

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
```javascript
let name = 'Alice'; // Block-scoped variable
const age = 30;     // Constant value

var globalVar = 'I am global'; // Function-scoped variable
```

### Data Types
```javascript
let string = 'Hello';      // String
let number = 123;         // Number
let boolean = true;       // Boolean
let object = { key: 'value' }; // Object
let array = [1, 2, 3];    // Array
let nullValue = null;     // Null
let undefinedValue;       // Undefined
```

### Operators
```javascript
let sum = 5 + 3;          // Arithmetic
let isEqual = (5 == 3);  // Comparison
let andCondition = (5 > 3 && 3 > 1); // Logical
```

### Control Flow
```javascript
if (age > 18) {
  console.log('Adult');
} else {
  console.log('Not an adult');
}

for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

## 2. Functions

### Function Declaration
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

### Function Expression
```javascript
const greet = function(name) {
  return `Hello, ${name}!`;
};
```

### Arrow Functions
```javascript
const greet = (name) => `Hello, ${name}!`;
```

### Closures
```javascript
function makeCounter() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
```

## 3. Objects and Arrays

### Objects
```javascript
let person = {
  name: 'Alice',
  age: 25
};

console.log(person.name); // Alice
```

### Arrays
```javascript
let numbers = [1, 2, 3, 4];
console.log(numbers[0]); // 1

numbers.forEach(num => console.log(num));
```

## 4. Asynchronous JavaScript

### Callbacks
```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback('Data received');
  }, 1000);
}

fetchData(data => console.log(data));
```

### Promises
```javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data received');
    }, 1000);
  });
}

fetchData().then(data => console.log(data));
```

### Async/Await
```javascript
async function fetchData() {
  return 'Data received';
}

async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData();
```

## 5. Error Handling

### try...catch
```javascript
try {
  let result = 10 / 0;
  if (!isFinite(result)) throw new Error('Division by zero');
} catch (error) {
  console.error(error.message);
}
```

## 6. JavaScript in the Browser

### DOM Manipulation
```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Example</title>
</head>
<body>
  <p id="demo">Hello</p>
  <button onclick="changeText()">Change Text</button>

  <script>
    function changeText() {
      document.getElementById('demo').innerText = 'Text changed!';
    }
  </script>
</body>
</html>
```

### Event Handling
```html
<!DOCTYPE html>
<html>
<head>
  <title>Event Example</title>
</head>
<body>
  <button id="myButton">Click Me</button>

  <script>
    document.getElementById('myButton').addEventListener('click', () => {
      alert('Button clicked!');
    });
  </script>
</body>
</html>
```

## 7. Advanced Concepts

### Understanding the Event Loop
```javascript
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('End');
```

### Generators and Iterators
```javascript
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const gen = idGenerator();
console.log(gen.next().value); // 1
```

### Reflect API
```javascript
const obj = { name: 'Alice' };

console.log(Reflect.get(obj, 'name')); // Alice
Reflect.set(obj, 'name', 'Bob');
console.log(obj.name); // Bob
```

### Proxy API
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

const person = new Proxy({}, handler);
person.age = 30;
console.log(person.age); // 30
```

### Async Iterators
```javascript
async function* fetchNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

(async () => {
  for await (const num of fetchNumbers()) {
    console.log(num);
  }
})();
```

### Decorators (Requires Babel or TypeScript)
```javascript
function log(target, key, descriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function(...args) {
    console.log(`Calling ${key} with`, args);
    return originalMethod.apply(this, args);
  };
  return descriptor;
}

class Example {
  @log
  greet(name) {
    return `Hello, ${name}`;
  }
}

const example = new Example();
console.log(example.greet('World'));
```

### Memory Management
```javascript
let largeArray = [];

function createLeak() {
  largeArray.push(new Array(1000000).fill('memory leak'));
}

createLeak();
console.log('Leak created');
```

### Advanced Function Concepts

#### Currying
```javascript
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5)); // 10
```

### Symbol and Well-Known Symbols
```javascript
const uniqueId = Symbol('id');
const obj = {
  [uniqueId]: 123
};

console.log(obj[uniqueId]); // 123
```

### Function Composition
```javascript
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const compose = (f, g) => (x, y) => f(g(x, y), y);

const result = compose(multiply, add)(2, 3);
console.log(result); // 10
```

### Web Workers

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

    worker.postMessage('Hello from main script');

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
  console.log('Message from main script:', event.data);
  postMessage('Hello from worker');
};
```

---
