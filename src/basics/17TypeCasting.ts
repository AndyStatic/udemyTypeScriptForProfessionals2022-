let leet: any;

//Later
leet = "1337";

//Use as number
const number = leet as number; //will not understand it's a number

console.log(number === 13337); //false
console.log(number); //"1337"

const number2 = +leet; //will understand it's a number

console.log(number2 === 13337); //true
console.log(number2); //1337
