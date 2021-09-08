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

let x= "5";
console.log(x.padEnd(4,0));

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

let fruits = ["apple", "banana", "orange", "lichi"];
//Array.isArray(fruits);
console.log(fruits instanceof Array);
console.log(fruits.length);
/*
for(i=0; i<fruits.length; i++){
    //console.log(i);
    console.log( i + " " + fruits[i]);
    //console.log(fruits[fruits.length-1]);
}
 */
function myfunction (value){
console.log(value);
}

fruits.forEach (myfunction);

const person = [];
person["firstName"] = "john";
person["lastName"] = "doe";
person["age"] = 28;

console.log(person);
console.log(typeof person);
console.log(person.length);

person.push("lemon");

console.log(person);

const fruits = ["Banana", "Orange", "Apple", "Mango"];