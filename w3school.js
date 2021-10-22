// var c = document.getElementById('myCanvas');
// let ctx = c.getContext("2d");

// ctx.lineWidth = 3;
// ctx.strokeStyle = "black";
// ctx.strokeRect(10,10,380,280);

// ctx.fillStyle = "green";
// ctx.fillRect(12,12,376,274);

// let centerX= c.width/2;
// let centerY = c.height/2;

// ctx.beginPath();
// ctx.arc(centerX, centerY, 80, 0, 2*Math.PI, false);
// ctx.fillStyle = "red";
// ctx.fill();
// ctx.stroke();

// "use strict"

// function message(text="hello every one whats going on?"){
//   console.log(`${text}`);
// }
// message();

"use strict"
function number(x,y, ...z){
  console.log(`x=${x}, y=${y}, z=${z}`);

}
number(10,20,30,40,50);

function addNumbers(x,y,z){
  return x+y+z;

}
// let numbers = [1,2,3];
// //console.log(addNumbers(...numbers));
// let numbers1 = [5,6, ...numbers];
// console.log(numbers1);

let number1 = [1,2,3];
let number2 = [4,5,6];
let number3 = [...number1, ...number2];
console.log(number3);

let p1 = {
  name: "hossain",
  age: 28
}
let p2 = {
  nationality:"Bangladeshi",
  city:"Dhaka"
}
let p = {...p1, ...p2};
console.log(p);

function studentsId(name, age){
  return {
    name,
    age
  }
}
console.log(studentsId("hossain",28));

let message = {
  name:"hossain",
  'body name'(){
    return `Hi I am object function`;
  }
}

console.log(message['body name']());

const names = ["parvez","towfiq", "mahadi"];
for(let name of names){
  console.log(name);
}

const students= {
  ID:123,
  Name:"hossain",
  CGPA:3.24
}
for(let x in students){
  console.log(`${x} : ${students[x]}`);
}


// console.log(squaresNum);

// const numbersDemo = [10,20,30,40];
// numbersDemo.forEach(function(x,index,array){
//    array[index] = x+5;
// })
// console.log(numbersDemo);

const studentsNum = [10,20,30,40];
let squaresNum = [];
studentsNum.forEach(function(x){
  squaresNum.push(x*x);
})
console.log(studentsNum);

const studyNum = [10,20,30,40];
let squareNum =  studyNum.map(function(x){
   return x*x;
})
console.log(squareNum);

const nums = [10,20,30,40,234,123,65,78];
let newNums = nums.filter(function(x){
  return x > 30;
})
console.log(newNums);
console.log(nums);

const newFunc =(x,y) => x+y;

console.log(newFunc(20,30));