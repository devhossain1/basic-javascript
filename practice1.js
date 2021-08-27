
/*
var n=8;
if(8==n){
    console.log("n is equal to 8");
}else{
    console.log("n is not equal to 8");
}
console.log(n);
*/

var personOne = "jamal";
var personTwo = "kamal";
var areTheyBrother = true;

/*
if("jamal"==personOne){
    if("kamal"==personTwo){
        if(areTheyBrother){
          console.log("jamal & kamal are brother");  
        }else{
            console.log("jamal & kamal are not brother");
        }
    }
}
*/
if("jamal"==personOne && "kamal" == personTwo && areTheyBrother){
    console.log("jamal & kamal are brother");
}else{
    console.log("they are not brother");
}
//2357
//var n = 7;
//nesting method
/* 
if(n < 10){
    if(2==n || 3==n || 5==n || 7==n){
       console.log("this number", n, "is smaller than 10 and it's a prime number");
    }else{
        console.log("this number", n, "is smaller than 10 and it's not a prime number");
    }
}else{
    console.log("this number", n, "is greater than 10 ");
}
*/
// without nesting method
//var n = 22;
/*
if( n<10 && (2==n || 3==n || 5==n || 7==n)){
    console.log("this number", n, "is smaller than 10 and it's a prime number");
 }else if(n < 10){
     console.log("this number", n, "is smaller than 10 and it's not a prime number");
 }else{
     console.log("this number ", n, "is greater than 10");
 }
 */
/*
var n = -3;
if(n>0){
    var result = "this number " + n + " it is positive"
}else{
    var result = "this number " + n + " it is negetive"
}
console.log(result);
*/
/*
var n=0;
var result;
var reminder = n % 2;
if(0==n){
    result ="this is the neutral number";
}else if(0 == reminder){
    result = "this number is even";
}else{
    result = " this number is odd";
}
console.log(result);
*/
var movieRating = "r";
var age = 53;
/*
if("pg"== movieRating && age >=13){
    console.log("you can watch this movie");
}else if("r"==movieRating && age >= 18){
    console.log("you can watch this movie");
}else if("g"==movieRating){
    console.log("you can watch this movie");
}else{
   console.log("you can not watch this video")
}
*/

if(("pg"== movieRating && age >=13) || ("r"==movieRating && age >= 18) || ("g"==movieRating)){
    console.log("you can watch the movie");
}else{
    console.log("you can not watch the movie"); 
}
// baby, tadler,teanage, adult
var yourAge = -1;
var result;
if(yourAge<0 || yourAge>200){
    result = "vampire";
}else if(yourAge<=1){
  result = "baby";
}else if(yourAge<=3){
    result = "taddler";
}else if(yourAge<=12){
    result = "kid";
}else if(yourAge<18){
    result = "teenager";
}else if(yourAge>18){
    result = "adult";
}
console.log("you are a", result);

