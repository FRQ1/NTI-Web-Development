let studentName;
let attendancePercentage;
let midtermScore;
let finalExamScore;
let assignmentScore;
let tuitionPaid;

let totalScore;
let letterGrade;
let academicStatus;

// User Input
studentName = prompt("Enter Student Name:");
attendancePercentage = Number(prompt("Enter Attendance Percentage:"));
midtermScore = Number(prompt("Enter Midterm Score (out of 20):"));
finalExamScore = Number(prompt("Enter Final Exam Score (out of 60):"));
assignmentScore = Number(prompt("Enter Assignment Score (out of 20):"));
tuitionPaid = prompt("Has the tuition been paid? (Yes/No)");

// Check Tuition Status
if (tuitionPaid === "No") {

    console.log("Results cannot be viewed.");
    console.log("Outstanding tuition fees.");

} else {

    if (midtermScore < 0 || midtermScore > 20 ||
        finalExamScore < 0 || finalExamScore > 60 ||
        assignmentScore < 0 || assignmentScore > 20) {

        console.log("Invalid score entered.");

    } else {

        totalScore = midtermScore + finalExamScore + assignmentScore;

        // Determine Letter Grade
        if (totalScore >= 90) {

            letterGrade = "A";

        } else if (totalScore >= 80) {

            letterGrade = "B";

        } else if (totalScore >= 70) {

            letterGrade = "C";

        } else if (totalScore >= 60) {

            letterGrade = "D";

        } else {

            letterGrade = "F";

        }

        // Determine Academic Status
        if (attendancePercentage < 70) {

            academicStatus = "FAIL (Attendance below required percentage)";

        } else if (totalScore >= 60) {

            academicStatus = "PASS";

        } else {

            academicStatus = "FAIL";

        }

        // Display Results
        console.log("========== STUDENT RESULT ==========");
        console.log("Student Name: " + studentName);
        console.log("Attendance: " + attendancePercentage + "%");
        console.log("Midterm Score: " + midtermScore + "/20");
        console.log("Final Exam Score: " + finalExamScore + "/60");
        console.log("Assignment Score: " + assignmentScore + "/20");
        console.log("Total Score: " + totalScore + "/100");
        console.log("Letter Grade: " + letterGrade);
        console.log("Academic Status: " + academicStatus);

        if (attendancePercentage >= 90 && totalScore >= 90) {

            console.log("Congratulations! You are eligible for a scholarship.");

        }

    }

}