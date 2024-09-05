
// // class syntax
// class ClassName {
//     constructor() { ... }
//   }

  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    carInfo() {
       console.log(`${this.name} ${this.year}`)
  }
  }

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);


console.log(myCar1.carInfo());
console.log(myCar2);

