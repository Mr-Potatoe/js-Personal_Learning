// prototype inheritance using ES6 classes

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} meows.`);
    }
}


class Cat extends Animal {

    constructor(name) {
        super(name); // Call the parent constructor
    }
}


const cat = new Cat('miming');
cat.speak();
