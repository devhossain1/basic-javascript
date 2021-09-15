// let myName = "hossain";
// let myPhoneNumber = 01675886938;

// console.log(isNaN(myName));
// console.log(isNaN(myPhoneNumber));
// if(isNaN(myName)){
//     console.log("please enter your valid number");
// }
// var x= 5;
// var y = 6;
// //console.log("This is the anather topic " + x==y);
// //console.log(`This is the anather topic : ${x==y}`);
// console.log(2 + "9");
// if (x != y){
//     console.log("hossain");
// }
// console.log(x<y && x>0 && y<=6);
// console.log(y<=x || x<0);

// var a=5;
// var b=10;
//output a=10, b=5

// var c= a;
// a = b;
// b = c;
// a = a + b;
// b = a - b;
// a = a - b;

// console.log("value of a is " + a);
// console.log("value of b is " + b);
/*
let year = 2020;

if(year % 4 ==0){
  if(year % 100 == 0){
    if(year % 400 ==0){
        console.log("The  "+ year +" is  a leap year ");
    }else{
        console.log("The yea "+ year +" is not a leap year ");
    }
  }else{
    console.log("The year "+ year +" is  a leap year ");
  }
}else{
    console.log("The year "+ year +" is not a leap year ");
} 
//0,null, NaN, undefined
if (score= undefined){
    console.log("you loss the game");
}else{
    console.log("you win the game");
}
*/

//let age = 17;
//console.log((age>= 18) ? "you can vote" : "you can not vote");

//else if statement

// var area = "triangle";
// var PI = 3.142, l = 5, b = 4, r = 3;
/*
if(area == "circle"){
    console.log("the area of circle is " + PI*r**2);
}else if(area == "triangle"){
    console.log("the area of triangle is " + (l*b)/2);
}else if(area == rectangle){
    console.log("the area of circle is " + PI*r**2);
}else{
    console.log(" there is no area")
}
*/

//switch statement

/*
var area = "triangle";
var PI = 3.142, l = 5, b = 4, r = 3;

switch(area){
    case 'circle':
        console.log("the area of circle is " + PI*r**2);
        break;
    case 'triangle':
        console.log("the area of triangle is " + (l*b)/2);
        break;
    case 'rectangle':
        console.log("the area of circle is " + l*b);
        break;
    default:
        console.log( "enter your valid value");          
}
*/

//while loop

// let num = 0;

//  while(num <= 10){
//     console.log(num);
//     num++;
// // }
//  let num =20;
//  do{
//      console.log(num);
//      num++;
//  }while(num <=10);
//for loop

//  for(var num=1; num<=10; num++){
//     var tableOf =8;
//     //console.log(tableOf  + " * " + num + " = " + tableOf * num );
//     console.log(`${tableOf} * ${num} = ${tableOf * num}`)
//  } 

 //function
//  function sum(){
//      var a=20, b=30;
//      console.log( a+b);
//  }
//  sum();

// function sum (a,b){
//     return total = a+b;
    
// }
// let exp = sum(20,30);
// console.log(exp);

//anonymous function

// var expr = function(a,b) {
//     return total = a + b;
//}
/*
let sum = expr(20,30);
console.log("the sum of two number is " + sum);

function biodata(){
    let firstName = "hossain";
    console.log( firstName);
    if(true){
        let lastName = "ahmed";
        console.log("the inner name is " + lastName);
        console.log("the Inner " + firstName);
    }
    console.log("the outer name " + lastName);
}
biodata();
*/
//Default parameters
// function defa(a, b=5){
//     return a*b;

// }
// console.log(defa(3));

//fat arrow function====================

// console.log(sum());
// function sum(){
//     let a=20, b=30;
//     let sum = a+b;
//     return `the sum of the two number is ${sum}`;
// }

// const sum = () => `the sum of the two number is ${(a=5) + (b=10)}`;
// console.log(sum());
// var myName = ["hossain","ahmed", "rofiq", "shofiq"];

// for(var i = 0; i<myName.length; i++){
//     console.log(myName[i]);
// }

// for(let element in myName){
//     console.log(element);
// }

// for(let element of myName){
//     console.log(element);
// }
//var myName = ["hossain","ahmed", "rofiq", "shofiq"];
// myName.forEach(function(element, index, array){
//     console.log(element + " index : " + index + " " + array);
// })
//fat arrow function====================================

// myName.forEach((element, index, array) => {
//     console.log(element + " index : " + index + " " + array);
// })

//array search filter=====================================

//var myName = ["hossain","ahmed", "rofiq", "shofiq", "karim"];

//console.log(myName.lastIndexOf("rofiq", 4));
//console.log(myName.includes("rofiq"));

//find or findIndex =================================

// const prices = [200, 300, 350, 400, 500, 600];
//prices < 400
// const findElem = prices.find((currentVal) => {
//     return currentVal <400;
// });
// console.log(findElem);

//console.log(prices.find((currentVal) => currentVal > 1400) );
//console.log(prices.findIndex((currentVal) => currentVal > 1400));

//array filter================================================
// const prices = [200, 300, 350, 400, 500, 600];
// const newElem = prices.filter((elem, index) => {
//     return elem <400;
// });
// console.log(newElem);

//console.log(prices.filter((elem, index) => elem<400 ));

//sort, push, unshift, pop, shift==============================

// const months = [ "jan", "feb", "march" , "april"];
// //console.log(months.sort());
// months.shift();
// console.log(months);

// 1 : add Dec at the end of the array:?========using splice===========
//const months = [ "jan", "feb", "march" , "april"];
//const newMonths = months.splice(months.length, 0 , "Dec");
//console.log(months);

// 2 : what is the return value of the spice method ?
//console.log(newMonths);

// 3 : update march to March?
// const months = [ "jan", "feb", "march" ,"june", "april"];
// const indexOfMonth = months.indexOf("march");
// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth, 1, "March");
//     console.log(months);
// }else{
//     console.log("no such data found");
// }
// 4 : how to delete june?
/*
const months = [ "jan", "feb", "march" ,"june", "april","may"];
const indexOfMonth = months.indexOf("june");
if(indexOfMonth != -1){
    const deleteMonth = months.splice(indexOfMonth,Infinity);
    console.log(months);
    console.log(deleteMonth);
}else{
    console.log("there is no such data");
}
*/

//finding the sqrt of array========================================

// let array1 = [1,4,9,16,25,36];
// //newarray >9
// let newArr = array1.map((currElem, index, array) => {
//    return currElem > 9;
// });
// console.log(array1);
// console.log(newArr);
/*
let array1 = [1,4,9,16,25,36];
let newArr = array1.map((currElem, index, array) =>{
    return ` index on = ${index} and the value is ${currElem} belong to ${array}`

});
console.log(newArr);
*/

//find the square root

//let arr = [25, 36, 49, 64,81];

// let arrSqur = arr.map((currElem) =>{
//     return Math.sqrt(currElem);
// })
//let arrSqur = arr.map((currElem) => Math.sqrt(currElem));
//console.log(arrSqur);

// multiply array element by 2 and element >10 ?================
/*
let arr1 = [3,4,5,6,7,8];
let arr1New = arr1.map((currElem) => currElem *2).filter((currElem) => currElem > 10)
.reduce((accumulator,currElem) => accumulator += currElem);
console.log(arr1New);
 // use of reduce function======================
 
let arr = [6,5,4];
let arrAcu = arr.reduce((accum,curEle, index, array)  =>{
    return accum += curEle;
},7)
console.log(arrAcu);

// How to flatter an array ?
const arr2 =[
    ["zone1","zone2"],
    ["zone3","zone3"],
    ["zone5","zone6"],
    ["zone7", ["zone1","zone2"]]
];
let flatArr = arr2.reduce((acumu, curVal) =>{
    return acumu.concat(curVal);
});
console.log(flatArr)
*/

// All string property

let fruits = 'i am inter est apple orange';
//let solve = fruits.slice(5, -2);
//let res = fruits.substring(5, -3);// - sign used for begings 0 position
let res = fruits.substr(-6);
console.log(res); 

 let str = "HELLO WORLD";
 console.log(str.charCodeAt(9));
 let fName = "Hossain ahmed";
 console.log(fName.toUpperCase());
 let lName = "fakir";
 console.log(fName + lName);
 console.log(fName.concat( " " , lName));
 console.log(`${fName} ${lName}`);

let str1 = "      hello world        ";
console.log(str1.trim());

// string can be converted to array with the split() method========= 
 let txt = "a, s,d, f,g,h,";
 console.log(txt.split(","));
 console.log(txt.split(" "));
 console.log(txt.split("|"));

 //date & time using new Date() method
 let curDate = new Date();
 console.log(curDate);

 console.log(new Date());
 console.log(new Date().toLocaleString());
 console.log(new Date().toString());

 console.log(Date.now());

 var d = new Date(2021, 0);
 console.log(d.toLocaleString());

 let d1 = new Date("october 13, 2021 22:30:20");
 console.log(d1.toLocaleString());

 let d2 = new Date(1631711694239);
 console.log(d2.toLocaleString());

 // Date Methods
 const cDate = new Date();

console.log(cDate.toLocaleString());
console.log(cDate.getFullYear());
console.log(cDate.getMonth());
console.log(curDate.getDate());
console.log(cDate.getDay());

const curTime = new Date();
console.log(curTime.setHours());