// const person = {
//     fname:" John",
//     lname:" Doe",
//     age: 25
//   };
//   let txt = '';

//   for(let x in person){
//      txt += person[x];
//   }
 //   console.log(txt);
//  let x = "";
//   const myObj = {
//     name: "John",
//     age: 30,
//     cars: [
//       {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//       {name:"BMW", models:["320", "X3", "X5"]},
//       {name:"Fiat", models:["500", "Panda"]}
//     ]
//   }
  
//   for (let i in myObj.cars) {
//     x += "<h2>" + myObj.cars[i].name + "</h2>";
//     for (let j in myObj.cars[i].models) {
//       x += myObj.cars[i].models[j] + "<br>";
//     }
//   }
  //document.getElementById("demo").innerHTML = x;

  const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
  console.log(delete myObj.cars);
  console.log(myObj);

  let a = new String("Bangladesh");
  console.log(a.toUpperCase());

  const person = {
      fName:"John",
      lName: "Doe",
      age: 25 
  }
  person.fullName = function(){
    return (this.fName + " " + this.lName).toUpperCase();
  }

  console.log(person.fullName());


  const person1 = {
    name: "John",
    age: function(){return 30;}
    
  };
  person1.age = person1.age.toString();

  console.log(JSON.stringify(person1));

//   const personArray = Object.values(person1);
//   for(let x of personArray){
//       console.log(x);
//   }


//   let text = "";
//   for(let i in person1){
//      text += person1[i] + " ";
//   }
//   console.log(typeof text);
  //document.getElementById("demo").innerHTML = text;
//   person1.name + " " + person1.age + " "+ person1.city;

