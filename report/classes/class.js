// classes_in_js.js

// Defining a Class in JavaScript
// Classes are blueprints for creating objects. They encapsulate data (properties) and behavior (methods).
class Person {
    // Constructor method is a special method used to initialize objects.
    // It is called automatically when a new instance of the class is created.
    constructor(firstName, lastName, age) {
        // Properties of the class
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Method to get the full name of the person
    // This method is a function defined inside the class.
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Method to display the person's details
    displayDetails() {
        console.log(`Name: ${this.getFullName()}, Age: ${this.age}`);
    }

    // Static method
    // Static methods are called on the class itself, not on instances of the class.
    // They are used for utility functions related to the class.
    static greet() {
        console.log("Hello from the Person class!");
    }
}

// Creating an Instance of a Class
// The 'new' keyword is used to create an instance (or object) of the class.
const person1 = new Person("John", "Doe", 30);

// Accessing properties and methods of the class instance
console.log(person1.firstName); // Output: "John"
console.log(person1.getFullName()); // Output: "John Doe"
person1.displayDetails(); // Output: "Name: John Doe, Age: 30"

// Calling a static method
Person.greet(); // Output: "Hello from the Person class!"

// Inheritance in JavaScript Classes
// A class can inherit properties and methods from another class using the 'extends' keyword.
class Student extends Person {
    constructor(firstName, lastName, age, grade) {
        // Call the parent class constructor using 'super' to initialize inherited properties.
        super(firstName, lastName, age);
        this.grade = grade; // New property specific to the Student class
    }

    // Overriding a method from the parent class
    // You can define a method with the same name to override the parent class method.
    displayDetails() {
        // Call the parent class method using 'super'.
        super.displayDetails();
        console.log(`Grade: ${this.grade}`);
    }
}

// Creating an instance of the Student class
const student1 = new Student("Alice", "Smith", 20, "A");

// Accessing inherited and overridden methods
student1.displayDetails(); 
// Output:
// "Name: Alice Smith, Age: 20"
// "Grade: A"

// Summary
// Classes in JavaScript provide a structured way to create objects, encapsulating properties and methods.
// The 'constructor' method initializes objects, and methods define behavior.
// Classes support inheritance, allowing you to create specialized subclasses with additional properties and behaviors.
