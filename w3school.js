
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