

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
factorial=1;

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