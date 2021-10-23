//
// const numbers = [5,15,32,22,12];

// const evenNum = (value,index, array) =>{
//   if(value%2===0)
//   return value;
// }
// let firstEvenNumIndex = numbers.findIndex(evenNum);
// console.log(firstEvenNumIndex);

// let firstEvenNum = numbers.find(evenNum);
// console.log(firstEvenNum);

// const students = [
//   {
//     id:23,
//     gpa:3.50
//   },
//   {
//     id:24,
//     gpa:3.20
//   },
//   {
//     id:27,
//     gpa:5.50
//   },
//   {
//     id:28,
//     gpa:4.50
//   }
// ];
// console.log(students.find(x=>x.gpa>4));

// const message = "Today is friday";
// console.log(message.includes("friday"));


//  import {text as message} from './myModule.js'

// console.log(message);
// setText("good bye from es6");
// console.log(text);

// class Students {
//   constructor(id, name){
//     this.id = id;
//     this.name = name;
//   }

//   set studentName(name){
//     this.name = name;
//   }

//   get studentInfo(){
//     return this.id + " " + this.name;
//   }

// }
// let s1 = new Students(101, "ahossain");
// console.log(s1);
// console.log(s1.id);
// console.log(s1.name);
// s1.studentName = "hossainahmed";
// console.log(s1.name);
// console.log(s1.studentInfo);

// const taskOne = ()=>{
//   console.log("task1");
// };


// const taskTwo = ()=>{
//   setTimeout(()=>{
//     console.log("task2, dataloading");
//   }, 2000);
// };
// const taskThree = ()=>{
//   console.log("task3");
// };
// const taskFour = ()=>{
//   console.log("task4");
// };

// taskOne();
// taskTwo();
// taskThree();
// taskFour();
function square(x){
  console.log(`square of ${x} : ${x*x}`);

}
// const y = square;
// y(5);
// function higherOrderFunction(num,callback){
//   callback(num);
// }
// higherOrderFunction(6,square)

const taskOne = (callback)=>{
  console.log("task1");
  callback();
};


const taskTwo = (callback)=>{
  setTimeout(()=>{
    console.log("task2, dataloading");
    callback();
  }, 2000);
};
const taskThree = (callback)=>{
  console.log("task3");
  callback();
};
const taskFour = ()=>{
    console.log("task4");
  };

taskOne(()=>{
  taskTwo(()=>{
    taskThree(()=>{
      taskFour();

    });
  });
});

console.log("hello");
document.querySelector("button").addEventListener("click", ()=>{
  console.log(" the button is clicked");
});
console.log("bye");