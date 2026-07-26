const students = require("../data/students");
const calculateAverage = require("./calculateAverage");

function listStudents() {

    for (let i = 0; i < students.length; i++) {
        console.log(
            students[i].name +
            " - Average: " +
            calculateAverage(students[i].grades)
        );
    }
}

module.exports = listStudents;