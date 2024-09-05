// functions_vs_methods.js

// Function Declaration
// This is a standalone function that can be called anywhere in the code.
// It is not tied to any object and is useful for general-purpose tasks.
function greet(name) {
    return `Hello, ${name}!`; // Returns a greeting message
}

console.log(greet("Alice")); // Output: "Hello, Alice!"

// Function Expression
// Here, a function is assigned to a variable. This function can be invoked using the variable name.
// It is not hoisted, so it can only be used after it is defined.
const add = function(x, y) {
    return x + y; // Returns the sum of x and y
};

console.log(add(5, 3)); // Output: 8

// Arrow Function (ES6)
// This is a more concise way to write functions introduced in ES6.
// Arrow functions do not have their own 'this' value, which is useful in some contexts.
const multiply = (a, b) => a * b;

console.log(multiply(4, 2)); // Output: 8

// Object with Methods
// Here we define an object 'calculator' that has several methods (functions tied to this object).
const calculator = {
    // 'add' method: Adds two numbers and returns the result
    add: function(x, y) {
        return x + y;
    },
    // 'subtract' method: Subtracts the second number from the first and returns the result
    subtract: function(x, y) {
        return x - y;
    },
    // 'multiply' method: Multiplies two numbers and returns the result (using an arrow function)
    multiply: (x, y) => x * y
};

// Calling the methods of the 'calculator' object
console.log(calculator.add(10, 5)); // Output: 15
console.log(calculator.subtract(10, 5)); // Output: 5
console.log(calculator.multiply(10, 5)); // Output: 50

// Object with a Method using 'this'
// 'person' object has properties 'firstName' and 'lastName' and a method 'fullName'.
// The 'fullName' method uses 'this' to access the object's properties.
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        // 'this.firstName' refers to the 'firstName' property of the 'person' object
        // 'this.lastName' refers to the 'lastName' property of the 'person' object
        return `${this.firstName} ${this.lastName}`;
    }
};

// Calling the 'fullName' method of the 'person' object
console.log(person.fullName()); // Output: "John Doe"

// Summary
// Functions are standalone blocks of code that can be called anywhere in your code.
// Methods are functions that are properties of objects and typically operate on the data within those objects.
// Methods can use 'this' to refer to the object they are associated with, making them powerful for object-oriented programming.
