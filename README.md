# Advanced JavaScript Concepts and Algorithms

## Overview

This repository provides an overview of advanced JavaScript concepts and algorithms. It covers topics such as closures, asynchronous programming, prototypes, and various data structures and algorithms.

## JavaScript Concepts

### Closures

Closures are functions that retain access to their lexical scope even when the function is executed outside that scope.

```javascript
function createCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

### Promises and Async/Await

#### Promises

Promises are used for handling asynchronous operations.

```javascript
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Data received'), 1000);
    });
}
fetchData().then(data => console.log(data));
```

#### Async/Await

Async/Await provides a cleaner syntax for working with Promises.

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

### Prototypes and Inheritance

JavaScript uses prototypes for inheritance.

```javascript
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

const dog = new Dog('Rex');
dog.speak(); // Rex makes a noise.
```

### ES6+ Features

#### Arrow Functions

Arrow functions provide a concise syntax for function expressions.

```javascript
const add = (a, b) => a + b;
```

#### Destructuring

Destructuring allows unpacking values from arrays or properties from objects into distinct variables.

```javascript
const person = { name: 'Alice', age: 25 };
const { name, age } = person;
```

#### Spread and Rest Operators

Spread and rest operators allow for easier handling of arrays and function arguments.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
```

### Modules

Modules encapsulate code and provide a way to export and import functions or objects.

#### Exporting

```javascript
// math.js
export function add(a, b) {
    return a + b;
}
```

#### Importing

```javascript
// main.js
import { add } from './math.js';
console.log(add(2, 3)); // 5
```

## Algorithms and Data Structures

### Sorting Algorithms

#### Bubble Sort

Bubble Sort is a simple sorting algorithm.

```javascript
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
```

#### Quick Sort

Quick Sort is a more efficient sorting algorithm.

```javascript
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = arr.filter(x => x < pivot);
    let middle = arr.filter(x => x === pivot);
    let right = arr.filter(x => x > pivot);
    return [...quickSort(left), ...middle, ...quickSort(right)];
}
```

### Data Structures

#### Linked Lists

Linked Lists consist of nodes where each node points to the next node.

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
}
```

#### Trees

Trees are hierarchical data structures.

```javascript
class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }
}
```

### Graph Algorithms

#### Depth-First Search (DFS)

DFS explores as far as possible along each branch before backtracking.

```javascript
function dfs(graph, start) {
    let stack = [start];
    let visited = new Set();

    while (stack.length) {
        let node = stack.pop();
        if (!visited.has(node)) {
            visited.add(node);
            stack.push(...graph[node]);
        }
    }
    return visited;
}
```

#### Breadth-First Search (BFS)

BFS explores all neighbors at the present depth level before moving on to nodes at the next depth level.

```javascript
function bfs(graph, start) {
    let queue = [start];
    let visited = new Set();

    while (queue.length) {
        let node = queue.shift();
        if (!visited.has(node)) {
            visited.add(node);
            queue.push(...graph[node]);
        }
    }
    return visited;
}
```

## Resources

- **Books**:
  - "JavaScript: The Good Parts" by Douglas Crockford
  - "You Don’t Know JS" series by Kyle Simpson

- **Online Courses**:
  - [MDN Web Docs](https://developer.mozilla.org/en-US/)
  - [freeCodeCamp](https://www.freecodecamp.org/)

- **Practice Sites**:
  - [LeetCode](https://leetcode.com/)
  - [HackerRank](https://www.hackerrank.com/)
```
