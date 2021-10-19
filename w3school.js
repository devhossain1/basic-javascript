// let len = document.querySelectorAll(".myButton").length;

// for(let i=0; i<len; i++){
//   document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
//     let text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " is clicked";
//   }); 
// }

for(let i=0; i<3; i++){
  document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
    let text = this.innerHTML;
    console.log(text);
    audioPlay(text);
    playAnimation(text);

  });
}

document.addEventListener("keypress", function(event){
  var text = event.key;
  audioPlay(text);
  playAnimation(text);
  
});

function audioPlay(text){
  switch(text){
    case "a":
      var song = new Audio("songs/Juboti-radhe.mp3");
      song.play();
      break;
    case "b":
      var song = new Audio("songs/paramSundori.mp3");
      song.play();
      break;
    case "c":
      var song = new Audio("songs/Juboti-radhe.mp3");
      song.play();
      break;
  };


}

function playAnimation(text){
  var selectedButton = document.querySelector("." + text);
  selectedButton.classList.add("anim");

  setTimeout(function(){
    selectedButton.classList.remove("anim");

  },2000);

}