
let myVar = document.getElementById('para2Id');
function addStyle(){
  myVar.classList.add('para-style');
}

function removeStyle(){
  myVar.classList.remove('para-style');
}

document.querySelector("#button3").addEventListener("click", function(){
  alert (" Hello everybody !!");
});



let bangla = document.querySelector('h1');

bangla.addEventListener("mouseover", function(){
  bangla.classList.add('my-style');
});
bangla.addEventListener("mouseout", function(){
  bangla.classList.remove('my-style');
})