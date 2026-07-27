const readGrades = require("./modules/read.grades");
const addGrade = require("./modules/add.grade");
const updateGrade = require("./modules/update.grade");
const deleteGrade = require("./modules/delete.grade");

async function main() {

    console.log("================= * Current Grades * =================");
    console.log(await readGrades());

    console.log("================= * Add Grade * =================");
    await addGrade(4, "Omar", "Chemistry", 91);
    console.log(await readGrades());

    console.log("================= * Update Grade * =================");
    await updateGrade(2, 90);
    console.log(await readGrades());

    console.log("================= * Delete Grade * =================");
    await deleteGrade(1);
    console.log(await readGrades());

}

main();