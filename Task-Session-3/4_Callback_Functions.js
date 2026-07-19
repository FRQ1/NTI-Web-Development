//===================*  1  *========================

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function done() {
    console.log("Greeting Complete");
}

greet("Farouq", done);



//===================*  2  *========================

function calculator(num1, num2, operation) {
    operation(num1, num2);
}

function add(num1, num2) {
    console.log(num1 + num2);
}

function subtract(num1, num2) {
    console.log(num1 - num2);
}

function multiply(num1, num2) {
    console.log(num1 * num2);
}

calculator(10, 5, add);
calculator(10, 5, subtract);
calculator(10, 5, multiply);




//===================*  3  *========================

function loadData(callback) {
    console.log("Loading...");

    setTimeout(function () {
        console.log("Data Loaded");
        callback();
    }, 2000);
}

function finished() {
    console.log("Loading Finished");
}

loadData(finished);




//===================*  4  *========================

function login(username, password, callback) {
    console.log(`Logging in with username: ${username}`);
    callback(username, password, showWelcome);
}

function checkPassword(username, password, callback) {
    if (username === "Farouq" && password === "12345") {
        console.log("Login Successful");
        callback(username);
    } else {
        console.log("Invalid username or password.");
    }
}

function showWelcome(username) {
    console.log(`Welcome ${username}!`);
}

login("Farouq", "12345", checkPassword);