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

 
