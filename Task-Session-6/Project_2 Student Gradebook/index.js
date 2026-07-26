const addStudent = require("./modules/addStudent");
const listStudents = require("./modules/listStudents");
const filterPassed = require("./modules/filterPassed");

addStudent("Farouq", [90, 80, 85]);
addStudent("Ali", [55, 60, 50]);
addStudent("Omar", [100, 95, 90]);
addStudent("Mona", [40, 35, 45]);

console.log("================= * Students * =================");
listStudents();
console.log("===============================================");

console.log("================= * Passed Students * =================");
filterPassed();
console.log("=======================================================");