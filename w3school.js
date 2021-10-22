
const students = [
  {
    id:123,
    name:'hossain',
    gpa:3.24
  },

  {
    id:124,
    name:'rahim',
    gpa:2.84
  },

  {
    id:223,
    name:'raihan',
    gpa:2.90
  },
  {
    id:153,
    name:'tofiq',
    gpa:3.50
  }
];

function studentsName1(){
  return students.filter(function(x){
    return x.gpa > 3;
  }).map(function(y){
    return y.name;
  })

}
//console.log(studentsName1());

const studentsName2 = ()=> students.filter((x) => x.gpa > 3).map((y) => y.name);

console.log(studentsName2());

//array destructing
let numbers = [5,7,8,21,11];
let [num1,num2,num3, ...z]= numbers;
console.log(num1);
console.log(num2);
console.log(z);

let a=23, b=12;
[a,b]=[b,a]
console.log(a);

//object destructing
const studentsInfo ={
  id:34,
  fullName:"hossain ahmed",
  gpa:3.44,
  language: {
    native:"bangla",
    beginer:"english"
  }
}

let {id,fullName,gpa, language} = studentsInfo;
console.log(fullName);
console.log(id);
console.log(language.native);

//destracturing function parameters

const studentFunc =({id,fullName})=>{

console.log(`${id} , ${fullName}`);
}

let student = {
  id:322,
  fullName:"hossain"
}
studentFunc(student);