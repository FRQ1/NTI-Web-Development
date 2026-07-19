//===================*  1  *========================

console.log("Start");

setTimeout(function () {
    console.log("Timeout");
}, 1000);

console.log("End");

//Output:
// Start
// End
// Timeout 



//===================*  2  *========================

console.log("First");

setTimeout(function () {
    console.log("Second");
}, 0);

console.log("Third");

// console.log is synchronous, so it runs first.
// setTimeout is asynchronous, so its callback runs after the call stack is empty.

// Output:
// First
// Third
// Second




//===================*  3  *========================

console.log("Line 1");

setTimeout(function () {
    console.log("Line 3");
}, 1000);

console.log("Line 2");




//===================*  4  *========================

console.log("Start");

setTimeout(function () {
    console.log("Async Task");
}, 0);

console.log("End");