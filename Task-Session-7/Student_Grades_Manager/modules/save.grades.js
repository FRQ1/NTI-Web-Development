const { writeFile } = require("fs").promises;
const path = require("path");

const file_path = path.join(__dirname, "../data/grades.json");

async function saveGrades(grades) {
    try {
        await writeFile(file_path, JSON.stringify(grades, null, 2));
    } catch (error) {
        console.log(`Error saving grades: ${error.message}`);
    }
}

module.exports = saveGrades;