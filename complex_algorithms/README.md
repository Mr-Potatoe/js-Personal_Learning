# Complex Algorithms and Data Structures in JavaScript

## Overview

This repository contains implementations of complex algorithms and data structures in JavaScript. It aims to provide practical examples and explanations of various data structures and algorithms, including arrays, linked lists, stacks, queues, hash tables, sorting algorithms, searching algorithms, and graph algorithms.

## Table of Contents

1. [Data Structures](#data-structures)
   - [Arrays](#arrays)
   - [Linked Lists](#linked-lists)
   - [Stacks](#stacks)
   - [Queues](#queues)
   - [Hash Tables](#hash-tables)
2. [Algorithms](#algorithms)
   - [Sorting Algorithms](#sorting-algorithms)
   - [Searching Algorithms](#searching-algorithms)
   - [Graph Algorithms](#graph-algorithms)
3. [Real-World Usage](#real-world-usage)
4. [Best Practices](#best-practices)
5. [Contributing](#contributing)
6. [License](#license)

## Data Structures

### Arrays

Arrays are used to store lists of items. They are useful for managing collections of data and implementing various algorithms.

**Example:**
```javascript
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]
```

### Linked Lists

Linked lists allow efficient insertions and deletions. They are not natively built into JavaScript but can be implemented manually.

**Example:**
```javascript
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        if (!this.head) {
            this.head = new Node(value);
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(value);
    }
}
```

### Stacks

Stacks are useful for parsing expressions and managing function calls. They can be implemented using arrays or linked lists.

**Example:**
```javascript
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
```

### Queues

Queues are used in scenarios such as task scheduling and buffering. They can be implemented using arrays or linked lists.

**Example:**
```javascript
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
```

### Hash Tables

Hash tables (or objects) provide fast data retrieval based on keys. JavaScript objects and the `Map` object can be used for hash tables.

**Example:**
```javascript
let hashTable = new Map();
hashTable.set('name', 'Alice');
hashTable.set('age', 30);

console.log(hashTable.get('name')); // Alice
```

## Algorithms

### Sorting Algorithms

Sorting algorithms are used to arrange data in a specific order. Common algorithms include Bubble Sort, Merge Sort, and Quick Sort.

**Example (Merge Sort):**
```javascript
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
```

### Searching Algorithms

Searching algorithms help find elements in data structures. Examples include Linear Search and Binary Search.

**Example (Binary Search):**
```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1; // Not found
}
```

### Graph Algorithms

Graph algorithms are used for tasks like finding shortest paths or traversing graphs. Examples include Dijkstra’s Algorithm and Depth-First Search (DFS).

**Example (DFS):**
```javascript
function dfs(graph, start) {
    let stack = [start];
    let visited = new Set();

    while (stack.length > 0) {
        let node = stack.pop();
        if (!visited.has(node)) {
            visited.add(node);
            stack.push(...graph[node]);
        }
    }

    return Array.from(visited);
}
```

## Real-World Usage

- **Web Development:** Efficiently managing data and implementing algorithms in front-end frameworks.
- **Networking:** Routing and network optimization algorithms.
- **Database Systems:** Indexing and searching using advanced data structures.
- **Artificial Intelligence:** Pathfinding algorithms and machine learning models.

## Best Practices

1. **Choose the Right Data Structure:** Select based on use case requirements.
2. **Understand Algorithm Complexity:** Optimize for time and space complexity.
3. **Leverage Built-in Methods:** Utilize JavaScript’s built-in methods where applicable.
4. **Keep Code Maintainable:** Write clean, readable code with proper documentation.
5. **Test and Benchmark:** Regularly test and benchmark algorithms for performance.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any improvements or additional algorithms and data structures.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.