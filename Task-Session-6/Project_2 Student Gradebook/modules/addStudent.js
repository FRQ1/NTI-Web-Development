const students = require("../data/students");

function addStudent(name, grades) {
    students.push({
        name: name,
        grades: grades
    });

    console.log(name + " added.");
}

module.exports = addStudent;