
   var list=[
    "sun",//0 = -7
    "mon",//1 = -6
    "tue",//2 = -5
    "wed",//3 = -4
    "thu",//4 = -3
    "fri",//5 = -2
    "sat",//6 = -1
    "apple"
   ];

   var length = list.length;
//for(var i=0; i<length; i++){
 //   console.log("element at", i, "offset of",list[i]);
//}
for(i in list){
    console.log("element at", i, "offset of",list[i]);
}

//var list=["mangoes", "orange", "apple", "banana","grape"];
var list=[3,34,11,2,23,1,4,43,52,5];

var length = list.length-1;
for(var i=0; i<length; i++){
    for(var j=0; j<length; j++){
        if(list[j] > list[j+1]){
            [list[j],list[j+1]]= [list[j+1],list[j]];
        }
    }
}
//list.sort();
console.log(list);
/*
var s = "hello world how are you";
var a= s.split(" ");
console.log(a);
 var ns = a.join("-")
 console.log(ns);
 console.log("he is a good boy".split(" ").join("-"));
 */
var n = "hossain ahmed";
var rev = n.split("").reverse().join("");
console.log(rev);

var a = "quick brown fox jump over the lazy dogs";
var b = a.split(" ");
console.log(b);
var c = b.length;

var o = a.split("0")
console.log(o.length);

console.log(c);
console.log(a.split("").length);
