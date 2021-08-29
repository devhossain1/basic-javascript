

//while loop
//var i=0;
/*
while(true){
    i++;
    console.log(i);
    if(9 == i){
        break;
    }

}
*/
/*
while(i<=10){
    console.log(i);
    i+=2;
}
*/
/*
var i = 0;

while(i++ < 5){
    console.log(i);
}

console.log("\n reset \n");
i=0;
while(++i < 5){
    console.log(i);
}
*/
/*
var i=0;
do{
    i++;
    console.log(i);
    if(10==i){
        break;  
    }
}while(true);
*/
console.log("\n another \n");

//for loop
//for(initialization; condition; steping){}
//infinite loop: for (;;){ }
/*
var i; 
i = 0;

for(;;){
    i++;
    console.log(i);
    if(8==i){
        break;
    }
}
*/
console.log("\n another \n");

var i,j;

for(i=0,j=10; i<=10; i++,j--){
    console.log(i,j);
}

var n=5;
var factorial=1;

for(i=n; i>1; i--){
    //factorial = factorial*i;
    factorial *=i;
}
console.log("factorial is", factorial);

/*
var factorial = 1;
for(var j=1; j<=10; j++){
    factorial =1;
    for(i=j; i>1; i--){
        factorial= factorial*i;
        //factorial *=i;
    }
    console.log("factorial of",j, "is", factorial);
}
*/

factorial=1;
for(var i=1; i<=10; i++){
    factorial *=i;
    console.log("factorial of",i, "is", factorial);
}

//all series
//2 4 6 8 10 12 14 16
var series="";
var n;
for(var i=1; i<10; i++){
    n= i*2;
    series=series + n +  " ";
}
console.log(series);
//1 4 7 10 13 16....
series="1 ";
n=1;
for(var i=1; i<10; i++){
    n=n+3;
    series = series + n + " ";
}
console.log("series 2:" , series);

series="1 ";
n=1;
for(var i=1; i<10; i++){
    n=n+3;
    series = series + n + " ";
}
console.log("series 2:" , series);

//0 3 8 15.....
series = "";

for(var i=1; i<10; i++){
    n=i*i-1;
    series= series + n + " ";
}
console.log("series 3: ",series);

//1 4 3 8 5 12 7.....

series="";
for(var i=1; i<10; i++){
    n=i;
    if(n%2==0){
        n=i*2;
    }
    series=series + n + " ";
}
console.log("series 4:", series);

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
