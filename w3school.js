
// //  let date = new Date();
// //  console.log(date.getFullYear());

//  class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
  
//     }
//     age() {
//       let date = new Date();
//       return date.getFullYear() - this.year;
//     }
//   }
  
//   let myCar = new Car("Ford", 2014);
//   let myBus = new Car("BMW", 2010);
//   document.getElementById("demo").innerHTML =
//   "My car is " + myBus.age() + " years old.";

//   let text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// const obj = JSON.parse(text);
// console.log(obj);

// console.log(JSON.stringify(obj));

class Person {
    constructor(name,age){
        this.name = name;
        debugger;
        this.age = age;
    }
    play(status){
        debugger;
        console.log(`${this.name}  aged ${this.age} is played ${status}`)
    }
}
debugger;
const person1= new Person("shakib");
const person2= new Person("tamim", 37);

person1.play("well");
person2.play("bad");