// Loops in JavaScript

// While Loop
// The while loop runs as long as the condition (i < 5) is true.
let i = 0;
while (i < 5) { 
    console.log(i); // Output: 0, 1, 2, 3, 4
    i++; // Increments 'i' by 1 after each iteration
}
// When 'i' becomes 5, the loop stops.

// For Loop
// The for loop runs from the initial value (let j = 0) to the condition (j < 5) and increments 'j' after each iteration.
for (let j = 0; j < 5; j++) {
    console.log(j); // Output: 0, 1, 2, 3, 4
}
// The loop stops when 'j' reaches 5.

// For...In Loop
// The for...in loop iterates over the keys (property names) of an object.
const person = {
    name: 'John',
    age: 30
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`); // Output: "name: John", "age: 30"
}
// It loops through each key in the 'person' object and logs both the key and its value.

// For...Of Loop
// The for...of loop iterates over the values of an iterable object like an array.
const arr = [1, 2, 3, 4, 5];
for (let num of arr) {
    console.log(num); // Output: 1, 2, 3, 4, 5
}
// It loops through each value in the 'arr' array and logs it.

// Do...While Loop
// The do...while loop is similar to the while loop, but it guarantees at least one execution of the loop.
let k = 0;
do {
    console.log(k); // Output: 0, 1, 2, 3, 4
    k++; // Increments 'k' by 1 after each iteration
} while (k < 5);
// The loop checks the condition (k < 5) after executing the code block.

// Break and Continue Statements

// The 'break' statement exits the loop immediately.
for (let l = 0; l < 10; l++) {  
    if (l === 5) {
        break; // Exits the loop when 'l' equals 5
    }
    console.log(l); // Output: 0, 1, 2, 3, 4
}

// The 'continue' statement skips the current iteration and moves to the next one.
for (let m = 0; m < 10; m++) {
    if (m === 5) {
        continue; // Skips the iteration when 'm' equals 5
    }
    console.log(m); // Output: 0, 1, 2, 3, 4, 6, 7, 8, 9
}

// Labeled Statement
// A label can be used with break or continue to control a nested loop.
outer: for (let n = 0; n < 10; n++) {
    for (let o = 0; o < 10; o++) {
        if (o === 5) {
            break outer; // Exits the outer loop when 'o' equals 5
        }
        console.log(o); // Output: 0, 1, 2, 3, 4
    }
}
// The loop stops when the inner loop's condition (o === 5) is met and breaks the outer loop.

// Switch Statement
// The switch statement evaluates an expression and executes the corresponding case.
let p = 1;
switch (p) {
    case 0:
        console.log('zero');
        break; // Exits the switch statement
    case 1:
        console.log('one'); // Output: "one"
        break; // Exits the switch statement
    case 2:
        console.log('two');
        break;
    default:
        console.log('other');
}
// The switch evaluates 'p' and matches it with case 1, so "one" is logged.

// Ternary Operator
// The ternary operator is a shorthand for an if-else statement.
let q = 1;
q > 0 ? console.log('positive') : console.log('negative'); // Output: "positive"
// If 'q' is greater than 0, it logs "positive"; otherwise, it logs "negative".

// Function Declaration
// A function is a block of code designed to perform a particular task.
function add(x, y) {
    return x + y; // Returns the sum of 'x' and 'y'
}
console.log(add(3, 4)); // Output: 7
// The function 'add' takes two arguments, 'x' and 'y', and returns their sum.
