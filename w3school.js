// const letters = new Set(['a','b','c']);
//console.log(letters instanceof Set);

// const setValue = letters.entries();
// for(let a of setValue){
//     console.log(a);
// }
// letters.forEach(function(value){
//     console.log(value);
// })

// const fruits = new Map();
// fruits.set("bananas", 23);
// fruits.set("apples", 50);
// fruits.set("orange", 70);
// fruits.set(004, 23);
// console.log(fruits);
//console.log(fruits instanceof Map);
const lichies = 'lichy';

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
    [true, 100],

  ]);
fruits.set(lichies, 400);
 console.log(fruits.entries());
  //fruits.forEach(function(value,key){
    //console.log(key , value);

  //})
 
  //fruits.set(23, 600);
  //console.log(fruits);

//   const myFunction = new Function("a", "b", "return a * b");
//   console.log(myFunction(3,4));
//  function lalo (a,b){
//      return a * b;
//  }
//  let x = lalo(2,4)*2;
//  console.log(x);
 

//function arguments
function findMax(){
  let max = -Infinity;
  for(let i=0; i < arguments.length; i++){
    if(arguments[i]>max){
      max = arguments[i]
    }
  }
   return max;
} 
console.log(findMax(3,4,5,6));

function a(x){
  x.one=7;

  return x.one * x.two;

}
let m={
  one:4,
  two:5
}

console.log(a(m));
console.log(m);

// This is a function constructor:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}
const myObj = new myFunction('john', 'Doe')
// This creates a new object


// This will return "John"
console.log(myObj.firstName);


  function hello(){
    console.log("hellow how are you");
  }

window.hello();