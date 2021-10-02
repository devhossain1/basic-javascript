
const mathRnd =(min, max) => Math.floor(Math.random() * (max-min +1))+min;

console.log(mathRnd(1,6));

const students = ["Sumit", "Akash", "Dulal", "Onik"];
console.log(students.sort());
console.log(students);

const points =[9,3,1,12,34,5,8];
let number = points.sort((a,b)=> a-b);
console.log(number);

function leapYear(year){
    if(year%400===0 || (year % 4 === 0 && year % 100 !==0)){
        console.log(`${year} is a leap year`);
    }else{
        console.log(`${year} is not a leap year`);
    }

}
leapYear(2016);

//how to find the number of vowel in a sentense

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O","U"];
function countVowels(sentence){
    let count = 0;
    const letters = Array.from(sentence);

    letters.forEach(function(value) {
        if(vowels.includes(value)){
            count++;
        }
    });
    return count;

}
console.log(countVowels("I love bangladesh"));

const numbers = [1, 4, 5, 5, 6, 7, 8, 7, 9, 4, 9];
const duplicates = numbers.filter(function(value, index, array){
    return array.indexOf(value) !== index;
});
let sequence = duplicates.sort((a,b) => a-b);
console.log(sequence);

console.log(Boolean(10>8));
