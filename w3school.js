/*
 let digit =prompt("enter the number...")

switch(digit){
    case "0":
      console.log("zero");
      break;
    case "1":
        console.log("one");
        break;
    case "2":
        console.log("two");
        break;
    case "3":
        console.log("three");
        break;
    default:
    console.log("others");

}
*/
/*
let letters = prompt("inete number")
 let letter = letters.toLowerCase()
 switch(letter){
    case "a":
    case "e":
    case "i":
    case "o":
        console.log("vowels");
        break;
    default:
        console.log(consonents);    
 }
 */
/*
 let text;
 switch (new Date().getDay()) {
   case 0:
   case 5:
     text = "Soon it is Weekend";
     break;
   case 4:
   case 6:
     text = "It is Weekend";
     break;
   default:
     text = "Looking forward to the Weekend";
 }
 document.getElementById("demo").innerHTML = text;
*/

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let i=0, text="", len=cars.length;
for ( ; i <len; i++) {
  text +="this is the car name = "+ cars[i] + "</br> ";
} 
//console.log(text);
document.getElementById("demo").innerHTML = text;

let count="";
for(let i=1; i<=10; i++){
   count += "this is number "+ i+ "</br>"; 
}
document.getElementById("num").innerHTML = count;

let x=5;
let num1 = "";
for(let x=0; x<10; x++){
    num1 += "loop scope = " + x + " </br>";
    document.getElementById('num1').innerHTML = num1;
}
console.log(x);
