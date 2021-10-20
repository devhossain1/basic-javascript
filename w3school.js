// var locationDiv= document.querySelector(".location-div");
// console.log(locationDiv);

// var p1 = locationDiv.children[0];
// p1.textContent = location.href; 

// var p2 = locationDiv.children[1];
// p2.textContent = location.protocol;

// var p3 = locationDiv.children[2];
// p3.textContent = location.hostname;

// var p4 = locationDiv.children[3];
// p4.textContent = location.port;

// let visitButton = document.getElementById("visit-button");
// visitButton.addEventListener("click", function(){
//   location.assign("https://devhossain.com");
// })

// function deleteSomething(){
//   let value = confirm("Do you want to delete?");
//   if(value){
//     console.log("deleted");
//   }else{
//     console.log("not deleted");
//   }
// }
// deleteSomething();

// function welcomeMessage(){
//   let h1 = document.createElement("h1");
//   let text;
  
//   let name = prompt("enter your name");
//   if(name == null || name == ''){
//     text = "no name found";
//   }else{
//     text = " welcome " + name;
//   }

//   var textNode= document.createTextNode(text);
//   h1.appendChild(textNode);
//   document.body.appendChild(h1);


// }
// welcomeMessage();

// setTimeout(()=>{
//   console.log("hello")
// },2000);

// setTimeout(display, 2000);
// function display(){
//   console.log("display timeout");
// }

let saveButton = document.querySelector(".save-btn");
let message = document.querySelector(".message");

// saveButton.addEventListener("click", saveUser);

// function saveUser(){
//   message.textContent = "user registration successfull !";

//   setTimeout(()=>{
//     message.textContent = "";
//   }, 2000);

// }
saveButton.addEventListener("click", saveCount);

function saveCount(){
  let count = 0;
  message.textContent = count;

  setInterval(()=>{
    count++;
    message.textContent = count;
  },1000);
}