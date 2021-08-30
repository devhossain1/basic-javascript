

//0 1 1 2 3 5 8 13 ==fibonacci
series = "0 1 ";
n=0;
var x=0;
var y =1;
for(var i=1; i<10; i++){
    n=x+y;
    x=y;
    y=n;
    series= series+ n + " "; 
}
console.log("series 5:",series);


for(var i=1; i<=10; i++){
    var series= i + "= ";
    for(var j=1; j<=10; j++){
        series += i*j + " ";
    }
    console.log(series);
}

var n=144;
var range =Math.ceil(Math.sqrt(n));
var divisors = "";

for(var i=1; i<=range; i++){
    if(n%i==0){
        if(i==n/i){
            divisors += i + " ";
        }else
        divisors +=i +" " + n/i + " ";
    }
}
console.log("divisor is : ", divisors);

var monthName = "April";
var days = 31;
var startingDay = 3; 

console.log("\n\n calender of ", monthName,"\n");
console.log("sun   mon   tue   wed   thu   fri   sat");

for(var i=0; i<5; i++){
    var dayRow = "";
    for(var j=1; j<=7; j++){
        var currentDay=7*i + j - startingDay;
        if(currentDay>days){
            break;
        }else if(currentDay<1){
            currentDay= " ";
        }
        if(currentDay>9){
            dayRow += currentDay+"    ";  
        }else
        dayRow += currentDay+"     ";
    }
    console.log(dayRow);
}

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