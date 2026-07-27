const readGrades = require("./read.grades");
const saveGrades = require("./save.grades");

async function deleteGrade(id) {
    try {
        const grades = await readGrades();

        const index = grades.findIndex((grade) => grade.id === id);

        if (index === -1) {
            console.log("Invalid ID: grade not found.");
            return;
        }

        grades.splice(index, 1);

        await saveGrades(grades);

        console.log("Grade deleted successfully.");
    } catch (error) {
        console.log(`Error deleting grade: ${error.message}`);
    }
}

module.exports = deleteGrade;