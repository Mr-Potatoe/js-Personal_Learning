// Example 1: Global Variable (Implicit Declaration)
x = 5; // 'x' is created as a global variable if not in strict mode.
console.log(x); // Output: 5

// Example 2: Using 'var'
// 'var' is function-scoped or globally scoped, depending on where it is declared.
var y = 10;
console.log(y); // Output: 10

function exampleVar() {
    var a = 1; // 'a' is function-scoped, accessible only within this function.
    if (true) {
        var a = 2; // This 'a' refers to the same variable as above, so it's re-assigned.
        console.log(a); // Output: 2
    }
    console.log(a); // Output: 2, as 'var' doesn't respect block scope.
}
exampleVar();

// Re-declaration of 'var' is allowed
var y = 20; // No error, re-declaration is allowed within the same scope.
console.log(y); // Output: 20

// Example 3: Using 'let'
// 'let' is block-scoped, meaning it is only accessible within the block it is defined in.
let z = 15;
console.log(z); // Output: 15

function exampleLet() {
    let b = 5; // 'b' is scoped to this function
    if (true) {
        let b = 10; // This 'b' is scoped to this block, independent of the outer 'b'
        console.log(b); // Output: 10
    }
    console.log(b); // Output: 5, as 'let' respects block scope.
}
exampleLet();

// Re-declaration of 'let' in the same scope is not allowed
// let z = 30; // This would throw a SyntaxError: Identifier 'z' has already been declared
z = 30; // Re-assigning is allowed, though.
console.log(z); // Output: 30

// Example 4: Using 'const'
// 'const' is also block-scoped but must be initialized during declaration.
const a = 20;
console.log(a); // Output: 20

function exampleConst() {
    const c = 25; // 'c' is scoped to this block and cannot be re-assigned
    console.log(c); // Output: 25

    // c = 30; // This would throw a TypeError: Assignment to constant variable.

    if (true) {
        const c = 35; // This 'c' is a separate constant within this block.
        console.log(c); // Output: 35
    }
    console.log(c); // Output: 25, as the outer 'c' remains unchanged.
}
exampleConst();

// Const with objects
const obj = { name: 'Alice', age: 25 };
console.log(obj); // Output: { name: 'Alice', age: 25 }

// You can change properties of the object even though 'obj' is a const
obj.age = 30;
console.log(obj); // Output: { name: 'Alice', age: 30 }

// But you cannot reassign the 'obj' variable itself
// obj = { name: 'Bob', age: 35 }; // This would throw a TypeError: Assignment to constant variable.

/*
  Summary:
  - Use 'const' when the variable's value should not change after assignment. It’s particularly useful for constants and objects/arrays whose properties/elements can be updated.
  - Use 'let' when you need a variable that may change within its block scope. It's preferred over 'var' for block-level scoping.
  - Avoid using 'var' due to its function-scoping and hoisting behavior, which can lead to unexpected results.
*/
