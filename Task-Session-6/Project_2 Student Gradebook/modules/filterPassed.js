const students = require("../data/students");
const calculateAverage = require("./calculateAverage");

function filterPassed() {
    console.log("Passed Students:");

    for (let i = 0; i < students.length; i++) {
        let average = calculateAverage(students[i].grades);

        if (average >= 60) {
            console.log(students[i].name + " - Average: " + average);
        }
    }
}

module.exports = filterPassed;