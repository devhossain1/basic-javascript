
/*
var s = "hello world how are you";
var a= s.split(" ");
console.log(a);
 var ns = a.join("-")
 console.log(ns);
 console.log("he is a good boy".split(" ").join("-"));
 
var n = "hossain ahmed";
var rev = n.split("").reverse().join("");
console.log(rev);

var a = "quick brown fox jump over the lazy dogs";
var b = a.split(" ");
console.log(b);
var c = b.length;

var o = a.split("o")
console.log(o.length-1);

console.log(c);
console.log(a.split("").length);
*/
// function

function sayHi(name) {
    if(name){
        console.log("Hello " + name);
    }else{
        console.log("How are you");
    }
    
}
sayHi("Hossain");
sayHi("Ahmed");
sayHi("");
sayHi();

function isEven(number){
    if(number % 2==0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(12));
console.log(isEven(13));
console.log(isEven(32));

function sayHello(name = "Anonymus", age= "unknown") {
    console.log("my name is " + name + " i am " + age + " years old");
}
sayHello("Hossain", "28");
sayHello("ahmed","22");
sayHello();

function reverseString(data){
    var reversedString= data.split('').reverse().join('');
    return reversedString;
}
var sentense="hello world";
var sentense2="hello world";
var reversedSentense= reverseString(sentense);
var reversedSentense2= reverseString(sentense2);
console.log(reversedSentense, reversedSentense2);

var students = [];
addStudents(students,"rahim","karim","shamim");
console.log(students.length);
addStudents(students,"Barek");
console.log(students.length);
addStudents(students,"khalek","Ata");
console.log(students.length);

//... spread operator
function addStudents(storage, ...people){
    for(i=0; i<people.length; i++){
        storage.push(people[i]);
    }
}
/*
function dummy(m,n, ...params){
    console.log(params.length);
    console.log(params);
    //console.log(params[1]);
}
dummy(1,3, 6, 7);
dummy(1,5, 4, 8,9,3);
dummy(1,3, 6, 7);
*/

var i = 35;
function doSomething(){
        let i = 23;
    if(true){
      let i = 10;

      console.log("inside if block",i);
    }
    console.log("inside the function", i);
}
doSomething();
console.log("outside the function", i);