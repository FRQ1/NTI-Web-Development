const readGrades = require("./read.grades");
const saveGrades = require("./save.grades");

async function updateGrade(id, newGrade) {
    try {
        const grades = await readGrades();

        const grade = grades.find(grade => grade.id === id);

        if (!grade) {
            console.log("Student not found.");
            return;
        }

        grade.grade = newGrade;

        await saveGrades(grades);

        console.log("Grade updated successfully.");
    } catch (error) {
        console.log(`Error updating grade: ${error.message}`);
    }
}

module.exports = updateGrade;