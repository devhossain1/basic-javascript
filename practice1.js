

//array 
var fruits = ["apple","banana","orange", "grape"];
console.log(fruits[4]);

fruits[4]="mango";
console.log(fruits[4]);

console.log(fruits.length);
var lastOffset = fruits.length-1;
console.log(fruits[lastOffset]);

var myList=["apple","orange","banana"];
myList[myList.length]="grape";
myList.push("pineapple");
myList.unshift("mangoes");
console.log(myList.length);
var lastElement=myList.pop();

var firstElement=myList.shift();
console.log(myList.length);
console.log(myList);
console.log(lastElement);
console.log(firstElement);

var males= ["rahim","karim","shamima", "salek"];
var females=["rahima","karima"];
//var lastPerson=males.pop();
//females.push(lastPerson);
var personRemove=males[2];
females.push(personRemove)

delete(males[2]);
//males.splice(2,1);

console.log(males,females);
console.log(males.length, females.length);
var list=[
    "sun",//0 = -7
    "mon",//1 = -6
    "tue",//2 = -5
    "wed",//3 = -4
    "thu",//4 = -3
    "fri",//5 = -2
    "sat",//6 = -1
   ];
   //var chunk=list.slice(4,6);
   //console.log(list, chunk);

   //var length= list.length-3;
   //var chunk=list.slice(length);
   var chunk= list.splice(-4,2);

   console.log(list, chunk);

   var list1 = ["apple","mon","tue","wed"];

   var list2=list1.slice();
   //var list2 = [...list1];
   //var list2 = Array.from(list1);
   list2[1] = "mangoes";
   console.log(list1,list2);

   var type1 = ["jan","feb"];
   var type2 =  ["mar","apr"];
   var type3 = ["may", "jun"];

   //var type = type1.concat(type2,type3);
   var type = [].concat(type1,type2,type3);
   console.log(type);

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