const names = "heeloo";
for (let i in names) {
    console.log(i); // Output: 1, 2, 3, 4, 5
}

// outer: for (let n = 0; n < 10; n++) {
//     for (let o = 0; o < 10; o++) {
//         if (o === 5) {
//             break outer; // Exits the outer loop when 'o' equals 5
//         }
//         console.log(o); // Output: 0, 1, 2, 3, 4
//     }
// }



// let b = 0;
// while (b < 10) {
//     console.log(b);
//     b++;
// }


// const names = ['aj', 'james', 'lee'];

// for (let name of names) {
//     console.log(name);
// }

// class Person {
//     constructor(name, age, address) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }

//     getPersonInfo(){
//         return `${this.name} is ${this.age} years old live in ${this.address}`
//     }

// }

// const person = new Person('aj', 19, 'AZDS');

// console.log(person.getPersonInfo());