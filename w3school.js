// const person = {fName:"john", lName:"Doe", age:"26"};
// let text="";
// for(let x in person){
//     text += person[x] + "</br>"
// }
//document.getElementById('demo').innerHTML = text;

// let a = ["bmw", "volvo", "honda","nisan" ];
// let car= "";
// for(let x of a){
//     car += x + " ";
// }
// console.log(car);

// let cars = ["bmw", "volvo", "honda","nisan" ];
// let text ="";
// let i = 0;

// while(cars[i]){
//     text += "the number is  " + cars[i]+ " </br> ";
//     i++;
//  }
// document.getElementById('num').innerHTML = text;

let text="";
for(let i=0; i<6; i++){
    if(i==3){break}
  text += "num = "+ i+ " ";
}
console.log(text);


const letters = new Set();

// Create Variables
// const a = "a";
// const b = "b";
// const c = "c";

// Add the Variables to the Set
letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters);

const letter = new Set(["a","b","c"]);
let tex ="";
for(const x of letter){
   tex += x + " ";
}
console.log(tex);
//map

const fruits =new Map([
    ["apple", 500],
    ["bananas", 300],
    ["orange", 200]
])
//console.log(fruits.set("lichi",700));
//console.log(fruits.delete("apple"));
//console.log(fruits.size);
let text1 ="";
for(const x of fruits.entries()){
    text1 += x + " ";
}
// fruits.forEach(function( value, key){
//     text1 += key + " =" + value + " ";
// })

console.log(text1);