

// for(let i=0; i <= 4; i++){
//   var num1 = parseInt(prompt("first number:"));
//   var num2 = parseInt(prompt("2nd number:"));
//   let sum = num1+num2;
//   console.log("total is" +sum);
// }

// let x = 1;
// let sum = 0;

// while(x <= 50){
//   if(x%3==0 && x % 5==0){
//     sum += x;
//     console.log(x);
//   }
  
//   x +=1;
  
// }
// console.log(sum);

// for(let i= 1; i<=5; i++){
//   console.log(i);
// }

// let i = 0;
// while(i<=5){
//   console.log(i);
//   i=i+1;
// }

// var x=1;
// do{
// console.log(x);
// x++;
// }while(x<=7);

// for(let i = 0; i<=50; i++){
  

//   if(i%2!=0){
//     continue;
//   }
//   console.log(i);
  
// };

// var number = Number(prompt('enter a number:'));
// let result = number>0 ? "positive" : number<0 ? 'negative' : 'zero';
// console.log(result);

// const summation=(a,b)=>{
//   let sum = a+b;
//   return 'sum is = '+sum;
//   //console.log("sum = "+ sum);
// }
// console.log(summation(10,20));
// (function a(message){
//   console.log(message);
// })('hello');

// const name1 = ['rahim', 'karim'];
// const name2 = ['jaber', 'raihan'];
// const names = name1.concat(name2);

// console.log(names);

// let num =new Array();
// for(let i=0; i<5; i++){
//   num[i] = parseInt(prompt('enter the number: '));
// }
// let sum = 0;
// for(let i=0; i<5; i++){
//   console.log(num[i]);
//   sum +=num[i];
// }
// console.log(sum);

let man =['rahim', 'carim', 'akhlek','jaber'];
// man.splice(1,2, 'keya', 'kheya');
// console.log(man);
// let newArray = man.slice(1,3);
man.shift();
//let newArray = man.sort()
//man.reverse();

console.log(man);
let numbers = [29,4,6,9,12,24];
numbers.sort(function(a,b){
  return a-b;
});
console.log(numbers);

function highestScore(scores){
  let max = scores[0];

  for(x=0; x<len; x++){
    if(max < scores[x]){
      max = scores[x];
    }

  }
return max;
}
let scores = [23,45,67,78,89,95];
let len = scores.length;
let maxScore = highestScore(scores);
console.log(maxScore);
console.clear();

function highestRunScorer(playersInfo){
  let highestScorer = playersInfo[0][0];
  let highestScore = playersInfo[0][1];

  for(let x = 1; x < playersInfo.length; x++ ){
    if(highestScore < playersInfo[x][1]){
      highestScore = playersInfo[x][1];
      highestScorer= playersInfo[x][0];
    }
  }
  return highestScorer;
}
let playersInfo = [
  ["rahim",78],
  ["shakib",20],
  ["asraf", 45],
  ["tamim", 90]
];
let name = highestRunScorer(playersInfo);
console.log(name);

function Student(name, age, lang){
  this.name= name;
  this.age = age;
  this.lang = lang;
  this.display = function(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.lang);
  }
}
let student1 = new Student('rahim', 28, ['bangla', 'english']);
let student2 = new Student('karim', 38, ['hindi', 'english']);

student1.display();
student2.display();

// let num11 = parseInt(prompt("enter number"));
// let num12 = parseInt(prompt("enter number"));

// console.log(Math.max(num11,num12));
let numOfWin = 0;
let numOfLoss = 0;

for(let i=1; i<=5; i++){
  let guessNumber = parseInt(prompt("enter the guess number 1 - 5:"));
let randomNumber = Math.floor(Math.random()*5) +1;
if(guessNumber==randomNumber){
  console.log("you have won");
  numOfWin++;
}else{
  console.log('You have lost random number was' +" " + randomNumber);
  numOfLoss++;
}

}
document.write(" number of win = " + numOfWin + " </br>");
document.write(" number of loss = " + numOfLoss);

