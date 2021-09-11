// console.log('hello world');
// let x = "volvo" + 16 + 4;
// console.log(x);
// let y = 2;
// let z = 3;
// let q = y**=z;
// console.log(q);
//let x=10;
//x %=5;
//console.log(typeof x);
//let x = 5;
/*
let y =6;
let z = 7;

let number = {x:5, y:6, z:7};
console.log(typeof number);
//about function

function sleep(name, time){
    console.log(name + " is sleeping from" + time);
}
console.log( "He is a freelancer");
sleep("jashim"," 10 am");
sleep("rahim"," 3 pm");
sleep("karim"," 9 pm");

function myfunction(a,b){
    // console.log("hello");
    return(a*b);
}
//myfunction(3,4);
 myfunction();

 const car = {
     name: "fiat",
     model: 500,
     weight: "400kg",
     color: "white",
     start: function(){
         console.log("THe car has started");
         this.drive();
     },

     drive: function() {
         console.log("the car has driven");
     },

 };

 console.log(car.weight);
 console.log(car['model']);
 car.start();
 //car.drive();
 let x= new Number(5);
 console.log(x);


//let text = "We are the so-called \\Vikings\\ from \n the north.";
console.log(text);

let str ="apple, banana, orange";
console.log(str.substr(7));
*/

let text = " my name is hossain";
let text1 = text.replace("hossain","ahmed");
console.log(text1);

let text2 = "Hello world";
console.log( typeof text2.charAt(9));

//let x= "5";
//console.log(x.padEnd(4,0));

let str = "please locate where 'locate' ocures";
console.log(str.indexOf("please"));

let country = "Bangladesh"
let a = 11;
let b = 9;

let sentense = `I love ${country} very much and it's population is ${a + b} core `;
console.log(sentense);

let myNumber = 32;
console.log(myNumber.toString(2));

let p =9.88;
//console.log((123).toString());
console.log(p.toExponential(3));
console.log(p.toFixed(2));
console.log(p.toPrecision(4));
console.log(Number("10"));
console.log(Number(new Date("2021-9-8")));
console.log(parseInt("10.23"));
console.log(parseFloat("10.23"));
console.log(Number.MAX_VALUE);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

//console.log(fruits.push("pineapple"));

console.log(fruits.splice(2,1));
console.log(fruits);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2,arr3, "apple" );
console.log(myChildren);

const points = [40, 100, 1, 5, 8, 25, 10];
// points.sort(function(a,b){
//     return a-b;
// })
// console.log(points);
// console.log(points[points.length-1]);

function myArrayMax(arr){
    return Math.max.apply(null, arr);
}
console.log(myArrayMax(points));

console.log(Math.max.apply(null, [2,9,4,6]));

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  cars.sort(function(a,b){
      let x = a.type.toLowerCase();
      let y = b.type.toLowerCase();
      if(x < y){
          return -1;
      }
      if(x> y){ return 1;}
      return 0;
  });
  console.log(cars);
/*
  const number = [45, 4, 9, 16, 25];
  function myFunction(value, index, array){
    return value >10;
  }
 const newNumber = number.filter(myFunction);
 console.log(newNumber);
 */
const numbers = [45, 4, 9, 16, 4, 25];
function myFunction (value, index, array){
  //return total + (value*value);
  return 9< value; 
}
const newNumbers = numbers.find(myFunction);
console.log(newNumbers);
//console.log(numbers.lastIndexOf(4) + 1);
//console.log(numbers.includes(16));
console.log(Array.from("ASDDGGR"));
const d = new Date();
console.log(d.setDate(15));

let msec = Date.parse("March 21, 2012");
const T = new Date(msec);

console.log(Math.acos(0 * Math.PI / 180));

console.log(Math.floor(Math.random() * 100) +1);

function getRandomInteger(min, max){
    return Math.floor(Math.random() *(max-min)) + min;
}
console.log(getRandomInteger(0, 10));
//console.log(T);