// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "",
//     set lang (lang){
//        this.language = lang;
//     }
//   };
//   person.lang = "bn";
//   console.log(person);

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "en",
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
//   };
//   console.log(person);

//   const person = {
//     firstName: "John",
//     lastName: "Doe",
//     get fullName (){
//         return this.firstName + " " + this.lastName;
//     }
//   };

//   console.log(person.fullName);

//   const person = {
//     firstName: "John",
//     lastName: "Doe",
//   }; 
//   Object.defineProperty(person, "fullName", {
//       get : function(){
//         return this.firstName + " " + this.lastName;
//       }
//   });
//   console.log(person.fullName);

  //constructor function

  function Person(first, last, age){
      this.firstName = first;
      this.lastName = last;
      this.age = age;
    //   this.fullName = function() {
    //     return this.firstName + " " + this.lastName
    //   }
  }
  const hossain = new Person('hossain', 'ahmed', 28);
  const rahim = new Person('rahim', 'mia', 75);
  const sumit = new Person('sumit', 'shaha', 34);


  Person.prototype.country = "bangladesh";
  console.dir(Person);
  console.log(hossain.country)

  const john = new String('john');
  String.prototype.myFun = function(){
      return 'I am doing fun';
  }

  console.dir(john);
  console.log(john.toUpperCase());

String.prototype.myName = function(){
    return "my name is hossain ahmed";
}
let x = "bangladesh";
console.log(x.myName());

const nums = [1,3,5];

//console.dir(nums[Symbol.iterator]());
const numIterator = nums[Symbol.iterator]();

console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());

// for(let n of numbers){
//     console.log(n);
// }
const myNumbers = {};

myNumbers[Symbol.iterator] = function (){
    let n = 0;
    let done = false;
    return{
        next() {
           n += 10;
           if(n==100){done=true}
           return {
               value: n,
               done : done
           }
        }
    }
}
for(let num of myNumbers){
    console.log(num);
}
