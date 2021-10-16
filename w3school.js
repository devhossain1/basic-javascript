

// const person = {
//   fullName: function(city, country){
//     return this.firstName + " " + this.lastName + " " + city + " "+ country;
//   }
// };

// const person1= {
//   firstName: "hossain",
//   lastName: "ahmed"
// };
// const person2= {
//   firstName:"sumit",
//   lastName: "shaha"
// };
// console.log(person.fullName.apply(person1, ['dhaka', 'bangladesh']));

// function temporary(){
//   let counter = 0;

//   return function(){
//     counter += 1;
//   }
// }
// const add = temporary();
// console.dir(add);
// add();
// //console.dir(add);
// add();

// //class
// class Car{
//   constructor(name, year){
//     this.name = name;
//     this.year = year;
//   }
//   // age(){
//   //   let date =new Date();
//   //   return date.getFullYear() - this.year;
//   // }
//   run(speed){
//      console.log(this.name + "is running" + speed);
//   }
// }
// const bmw = new Car('BMW', 2007);

// //console.log(bmw.name +'is '+ bmw.age() +'years old');
// const audi = new Car('audi', 2000);
// bmw.run('130 km per hour');
// //console.log(bmw.name);

// class Car{
//   constructor(brand){
//     this.carName= brand;
//   }
//   present(){
//     return 'I have a' + this.carName;
//   }
// }

// class Model  extends Car {
//    constructor(brand,mod){
//      super(brand);
//      this.model = mod;
//    }
//    show(){
//      return this.present() + ' , it is a ' + this.model;
//    }
// }
// let myCar = new Model('ford', 'mustang');
// console.log(myCar.show());
class Car{
  constructor(brand){
    this.carName = brand;
  }
  get cnam(){
    return this.carName;
  }
  set cnam(x){
    this.carName = x;
  }
}
let myCar = new Car('ford');
myCar.cnam ="volvo";
console.log(myCar.cnam);
