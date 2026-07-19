//===================*  1  *========================

console.log("Hello");

setTimeout(function () {
    console.log("World");
}, 2000);




//===================*  2  *========================

function printNumbers() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
}

printNumbers();




//===================*  3  *========================

console.log("Loading...");

setTimeout(function () {
    console.log("Done");
}, 3000);




//===================*  4  *========================

function sendMessage(message) {
    setTimeout(function () {
        console.log(message);
    }, 2000);
}

sendMessage("Welcome!");