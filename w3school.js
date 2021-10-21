// alert("HI everyone");
// alert(hello);
// alert("bye everyone");

// try{
//   //code test
//   alert("HI everyone");
//   alert(hello);
//   alert("bye everyone");
// }catch(err){
//   //handle error
//   console.log("hello every one");
//   console.log(err);
//   console.log(err.name);
//   console.log(err.message);

// }finally{
//   alert("bye everyone haha")
// }

document.querySelector("#checkButton").addEventListener("click", function(){
  let num = document.querySelector("#numTextfield").value;
  console.log(num);
try{
  if(num < 5){
    throw "input number is too low";
  }else if(num > 10){
    throw "input number is too high";
  }

}catch(err){
  console.log(err);
}

});
