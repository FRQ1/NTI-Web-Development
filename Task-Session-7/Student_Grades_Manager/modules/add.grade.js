const readGrades = require("./read.grades");
const saveGrades = require("./save.grades");

async function addGrade(id, name, subject, grade) {
    try {
        const grades = await readGrades();

        grades.push({
            id,
            name,
            subject,
            grade
        });

        await saveGrades(grades);

        console.log("Grade added successfully.");
    } catch (error) {
        console.log(`Error adding grade: ${error.message}`);
    }
}

module.exports = addGrade;