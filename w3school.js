
// var firstName, lastName, fullName;
// firstName="hossain";
// lastName= "ahmed";
// fullName =  firstName + lastName;
// let nameF= prompt('enter your fullname:');

// document.write(nameF.toUpperCase());
// document.write(nameF.length);

// var num1 = prompt(" enter first number:");
// var num2 = prompt(" enter 2nd number:");

// num1 = parseInt(num1);
// num2 = parseInt(num2);

// var sum, sub;
// sum = num1+num2;
// document.write("addintion = " + sum + "</br>");

// sub = num1-num2;
// document.write("subtraction = " + sub);

// var num1 = prompt(" enter first number:");
// var num2 = prompt(" enter 2nd number:");

// num1 = parseInt(num1);
// num2 = parseInt(num2);

// var sum, sub, mul, divi, modulas;

// sum = num1+num2;
// document.write(num1+ "+" + num2+ "=" + sum + "</br>");
// sub = num1-num2;
// document.write("subtraction = " + sub + "</br>");
// mul = num1*num2;
// document.write("multiplication = " + mul + "</br>");
// divi = num1/num2;
// document.write("division = " + divi);

//let base = parseFloat(prompt('enter your base : '));
//let height = parseFloat(prompt('enter your base : '));

// let area = base * height;
// document.write("area = "+ area);

// var cels = parseFloat(prompt('enter celcius amount'));

// var fah = cels*(9/5)+32;
// document.write('fahrenheit = '+ fah);
/*
var marks = prompt('enter your mark:');
if(marks > 100 || marks < 0)
document.write("your marks is invalid")
else if(marks >= 80)
document.write("you got A+");
else if(marks >= 70 && marks < 80)
document.write("you got A");
else if(marks >= 60 && marks < 70)
document.write("you got A-");
else if(marks >= 50 && marks < 60)
document.write("you got B");
else if(marks >= 40 && marks < 50)
document.write("you got C");
else if(marks >= 33 && marks < 40)
document.write("you got D");
else
  document.write("you are fail");
*/
  // var num1 = prompt(" enter first number:");
  // var num2 = prompt(" enter 2nd number:");  
  // var num3 = prompt(" enter first number:");

  // if(num1>num2 && num1>num3)
  // document.write("num1 is larger");
  // else if(num2>num1 && num2>num3)
  // document.write("num2 is larger");
  // else
  // document.write("num3 is larger");
  


let letter = prompt('enput a letter:');
  letter = letter.toLowerCase();
switch(letter){
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("vowel");
    break;

  default:
    console.log("consonant"); 
}
let m=parseInt(prompt("enter num1"));
let n= parseInt(prompt("enter num1"));
var sum = 0;
for(let i = m; i <= n; i++ ){
sum += i;
}
document.write(sum);

