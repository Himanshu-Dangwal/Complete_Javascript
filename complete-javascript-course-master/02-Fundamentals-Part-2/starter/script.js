"use strict";

//Use below code first with strict mode and then without strict modex
// let values = 20;
// if(true) value = 30;
// console.log(values);


// let a = 10;

// let val = a>=5 ? a+=2 : a-=2;

// console.log(a,val);

/* Write your code below. Good luck! 🙂 */

// const calcAverage = (a,b,c) => {
//     return (a+b+c)/3;
// }

// let scoreDolphins = calcAverage(44,23,71);
// let scoreKoalas  = calcAverage(23,34,27);

// function checkWinner(avgDolphins,avgKoalas){
//     if(avgDolphins > 2*avgKoalas){
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}`)
//     }else if(avgKoalas > 2*avgDolphins){
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}`)
//     }else{
//         console.log("No team wins...")
//     }
// }

// checkWinner(scoreDolphins,scoreKoalas);

const jonas = {
    firstName : "Himanshu",
    lastName : "Dangwal",
    age : 24,
    salary : "NA"
};

console.log(jonas.age);
console.log(jonas["firstName"]);

jonas['value'] = 2000;
jonas.number = 1235;

console.log(jonas.number);   
console.log(jonas["value"]);

//Below 3 lines of code explains the diferrence between dot and bracket notation

let option = prompt("Select a property");

console.log(jonas[option]);
console.log(jonas.option);