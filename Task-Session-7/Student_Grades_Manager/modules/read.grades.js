const { readFile } = require("fs").promises;
const path = require("path");

const file_path = path.join(__dirname, "../data/grades.json");

async function readGrades() {
    try {
        const data = await readFile(file_path, "utf8");
        const grades = JSON.parse(data);

        return grades;
    } catch (error) {
        console.log(`Error reading grades: ${error.message}`);
    }
}

module.exports = readGrades;