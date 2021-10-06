const arry = ["bmw", "volvo", "run"];
console.log(typeof [1,3,4,5]);

console.log(typeof function myfun(){ });
//console.log([1,3,4,5,4].constructor);

function isArray(myArray){
   console.log(myArray.constructor = Array);
}
isArray([1,3,4,6]);

// const myDate = new Date();
// document.getElementById("demo").innerHTML = isDate(myDate);

function isDate(myDate) {
  console.log(myDate.constructor === Date);
}
isDate(new Date())

console.log(String(23));
let day = new Date();
console.log(day.toString());
let a = 10.2633;
console.log(a.toPrecision(3));
let d= new Date();
console.log(d.getTime());
//console.log(Number(d));
console.log(true.toString());
console.log(101 | 010);
console.log((0b010).toString(10));
console.log(~6);

let text = "Give 100%! 34 is the nium 24"; 
let result = text.match(/\d/g);
console.log(result);

//let tex = "123456789";

//let result = tex.match(/[1-4]/g);
//console.log(result);

// try{
//     adddlert("welcome to error");
// }
// catch(err){
//     document.getElementById("demo").innerHTML = err.message;
// }
/*
function myFunction(){
    const message = document.getElementById('demo').innerHTML ;
    message.innerHTML = "";
    let x = document.getElementById('input').Value;
    try{
        if(x =="") throw "empty";
        if(isNaN(X)) throw "not a number";
        x= Number(x);
        if(x<5) throw "too low";
        if(x<10) throw "too high";
    }
    catch(err){
        message.innerHTML = "this is a " + err;
    }

}
*/
/*
"use strict"
console.log(this);

function func (){
    console.log(this);
}


const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    },
    getFullName: function(){
        return this.fullName();
    }
  };

  console.log(person.getFullName());
*/
//   const person1 ={
//       fullName: function (){
//           return this.firstName+ " " + this.lastName;
//       }
//   }
//   const person2= {
//       firstName:"john",
//       lastName: "Doe"
//   }
//   console.log(person1.fullName.call(person2));

 
//var hello;

// hello = () => {
//   document.getElementById("demoFunc").innerHTML += this;
// }

// //The window object calls the function:
// window.addEventListener("load", hello);

// //A button object calls the function:
// document.getElementById("btn").addEventListener("click", hello);

// let hello = function(){
//     document.getElementById('demoFunc').innerHTML += this;
// }
// //The window object calls the function:
// window.addEventListener('load', hello);

// //A button object calls the function:
// document.getElementById('btn').addEventListener('click', hello);

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     play(status){
//         console.log(`${this.name} is playing. ${status}`);
//     }
// }
// const person1 = new Person("shakib", 35);
// const person2= new Person("tamim", 36);

// person1.play("well");
// person2.play("bad");

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
  
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
  let myCar = new Car("Ford", 2014);
  let myBus = new Car("BMW", 2013);
  document.getElementById("demo").innerHTML =
  "My car is " + myCar.age() + " years old.";

 