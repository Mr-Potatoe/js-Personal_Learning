class Animals {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animals {
    constructor(name) {
        super(name);
    }
    speak() {
        console.log(`${this.name} barks.`);
        // return `${this.name} barks.`;
    }
    
    static bark() {
        console.log('Woof!');
    }
}

class Cat extends Animals {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(`${this.name} meows.`);
    } 
    static meow() {
        console.log('Meow!');
    }  
}

const dog = new Dog('Fido');
const cat = new Cat('Fluffy');
dog.speak();
cat.speak();

// calling static method
Cat.meow();
Dog.bark();