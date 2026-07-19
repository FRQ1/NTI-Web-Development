//===================*  1  *========================

console.log("Start");
console.log("Middle");
console.log("End");




//===================*  2  *========================

function secondFunction() {
    console.log("Inside Second Function");
}

function firstFunction() {
    console.log("Inside First Function");
    secondFunction();
}

firstFunction();




//===================*  3  *========================

let num1 = 10;
let num2 = 5;

let sum = num1 + num2;

console.log("Sum =", sum);




//===================*  4  *========================

function square(num) {
    return num * num;
}

function printSquare(num) {
    let result = square(num);
    console.log("Square =", result);
}

printSquare(6);
