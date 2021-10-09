
const sentence = " We know Lorem Ipsum is simply dummy text of the lorem ipsum \
system and management. it is the text of lorem ipsum organization";

const matches = sentence.match(/lorem/ig);
const occarance = matches ? matches.length : 0;

let position = sentence.search(/lorems/i);
position = position >=0 ? position :"not found !!";

console.log(occarance);
console.log(position);

//linearSearch(['a','b', 'c', 'd', 'e'], 'c');
function linearSearch(arr, val){
    const len = arr.length;
    for(let i = 0; i < len; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return 'not found !';
}
console.log(linearSearch(['a','b', 'c', 'd', 'e'], 'c'));
//anather problem solving

function longestString(names){
    let longestWord = '';

    for(nameval of names){
        if(nameval.length > longestWord.length){
            longestWord = nameval;
        }
  }
  return [longestWord, names.indexOf(longestWord)]
}
  

console.log(longestString(['sumit saha', 'lern with sumit', 'hossain', 'ahmed']));

//problelm solve number which is divisible by 3,5 and both 3&5

function fizzBuzz(number){
   
    for(let i=1; i <= number; i++){
        if(i % 15==0){
            console.log(`${i} is fizzBuzz`);
        }else if(i % 3 == 0){
            console.log(`${i} is fizz`);
        }else if(i % 5 == 0){
            console.log(`${i} is Buzz`);
        }else{
            console.log(i);
        }
    }
}
fizzBuzz(46);

//how can i find out falsey value from an array ?
//falsy value = false, NaN, '', undefined, 0

const mixedArr = [
    'lws',
    undefined,
    'hossain', 
    false, 
    "", 
    "learn with sumit",
    40,
    "k",
    true,
    "thanks all",
    NaN
];

const trueArray = mixedArr.filter(Boolean)
console.log(trueArray);

const obj = {
    a: 'lws',
    b: undefined,
    c: 'hossain', 
    d: false, 
    e: "", 
    f: "learn with sumit",
    g: 40,
    h: "k",
    i: true,
    j: "thanks all",
    k: NaN
};
const truthyObject = function(obj){
    for(let i in obj){
        if(!obj[i]){
            delete obj[i];
        }
       
    }
    return obj;
}
console.log(truthyObject(obj));