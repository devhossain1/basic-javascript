
// let myImage = document.querySelector("#mypic");

// function myPicture1(){
//   myImage.src = "image/devhossain1 (2).jpg";
// }

// function myPicture2(){
//   myImage.src = "image/devhossain3.jpg";
// }

// let heading1 = document.getElementsByTagName("h1")[0];
// heading1.innerHTML = "Say hello";

//creating element
let heading3 = document.createElement("h1");
let text = document.createTextNode('this is the heading 3');
heading3.appendChild(text);

let newHeading = document.getElementById("myDiv");
newHeading.appendChild(heading3);

let heading2 = document.getElementsByTagName("h1")[1];
newHeading.removeChild(heading2);

let heading0 =document.createElement('h1');
let text0 = document.createTextNode('this is the text 0 paragraph');
heading0.appendChild(text0);
let heading1 = document.getElementsByTagName("h1")[0]; 
newHeading.insertBefore(heading0, heading1);
