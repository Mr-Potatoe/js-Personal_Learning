// prototype inheritance using ES6 classes

// Define the Person class
class Person {
    constructor(name) {
        this.name = name;
    }

    // Method to make the person speak
    speak() {
        console.log(`${this.name} is speaking.`);
    }

    // Method to make the person jump
    jump() {
        console.log(`${this.name} is jumping.`);
    }
}

// Define the Man class that inherits from Person
class Man extends Person {
    constructor(name) {
        super(name); // Call the parent class's constructor
    }
}

// Create an instance of Person
const person = new Person('Doe');
person.speak(); // Output: Doe is speaking.
person.jump();  // Output: Doe is jumping.

// Get and log the prototype of the person instance
const protos = Object.getPrototypeOf(person);
console.log(protos); // Output: Person { speak: [Function], jump: [Function], constructor: [Function: Person] }

// Create an instance of Man
const man = new Man('John');
man.speak(); // Output: John is speaking.
man.jump();  // Output: John is jumping.


/* ========================================================================================================================= */

// Prototype Inheritance Using Constructor Functions


// Define the Animal constructor function
function Animal(name) {
    this.name = name;
}

// Define methods on Animal's prototype
Animal.prototype.speak = function() {
    console.log(`${this.name} meows.`);
};

Animal.prototype.jump = function() {
    console.log(`${this.name} jumps.`);
};

// Define the Cat constructor function
function Cat(name) {
    Animal.call(this, name); // Call the parent constructor
}

// Set up inheritance from Animal
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat; // Ensure the constructor property points to Cat

// Create an instance of Cat
const cat = new Cat('Miming');
cat.speak(); // Output: Miming meows.
cat.jump();  // Output: Miming jumps.

// Get and log the prototype of the cat instance
const proto = Object.getPrototypeOf(cat);
console.log(proto); // Output: Animal { speak: [Function], jump: [Function], constructor: [Function: Animal] }
