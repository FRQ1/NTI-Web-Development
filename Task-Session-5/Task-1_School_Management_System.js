class Person {
    #email;
    #id;

    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }

    set email(value) {
        if (value.includes("@")) {
            this.#email = value;
        } else {
            console.log("Invalid email.");
        }
    }

    get email() {
        return this.#email;
    }

    set id(value) {
        if (value > 0) {
            this.#id = value;
        } else {
            console.log("Invalid ID.");
        }
    }
    
    get id() {
        return this.#id;
    }


    describeRole() {
        console.log("School member.");
    }
}

class Principal extends Person {
    constructor(name, email, id) {
        super(name, email, id);
        this.members = [];
    }

    addMember(member) {
        this.members.push(member);
        console.log(member.name + " added.");
    }

    removeMember(id) {
        for (let i = 0; i < this.members.length; i++) {
            if (this.members[i].id === id) {
                console.log(this.members[i].name + " removed.");
                this.members.splice(i, 1);
                return;
            }
        }

        console.log("Member not found.");
    }

    listMembers() {
        console.log("School Members:");

        for (let i = 0; i < this.members.length; i++) {
            console.log(this.members[i].name);
        }
    }

    describeRole() {
        console.log(this.name + " is the Principal.");
    }
}

class Teacher extends Person {
    constructor(name, email, id, subject) {
        super(name, email, id);
        this.subject = subject;
        this.grades = [];
    }

    gradeStudent(studentName, grade) {
        this.grades.push({
            studentName: studentName,
            grade: grade
        });
    }

    listGrades() {
        console.log("Student Grades:");

        for (let i = 0; i < this.grades.length; i++) {
            console.log(this.grades[i].studentName + ": " + this.grades[i].grade);
        }
    }

    describeRole() {
        console.log(this.name + " teaches " + this.subject + ".");
    }
}

class Student extends Person {
    constructor(name, email, id) {
        super(name, email, id);
        this.subjects = [];
    }

    enroll(subject) {
        this.subjects.push(subject);
    }

    viewSubjects() {
        console.log(this.name + "'s Subjects:");

        for (let i = 0; i < this.subjects.length; i++) {
            console.log(this.subjects[i]);
        }
    }

    describeRole() {
        console.log(this.name + " is a Student.");
    }
}

//=================== Create Objects ===================

let principal = new Principal("Mr. Ahmed", "Ahmed@...", 1);

let teacher = new Teacher("Ms. Sara", "sara@...", 2, "Math");

let student = new Student("Ali", "Ali@s...", 3);

//=================== Principal ===================

principal.addMember(teacher);
principal.addMember(student);
principal.listMembers();

//=================== Teacher ===================

teacher.gradeStudent("Ali", 95);
teacher.gradeStudent("Omar", 88);
teacher.listGrades();

//=================== Student ===================

student.enroll("Math");
student.enroll("Physics");
student.viewSubjects();



let schoolMembers = [
    principal,
    teacher,
    student
];

for (let i = 0; i < schoolMembers.length; i++) {
    schoolMembers[i].describeRole();
}