// Required constructor function
function Student(name, id) {
   /* Your code */
   this.name = name;
   this.id = id;
   this.exams = [];
}

// Required methods to implement
Student.prototype.addExam = function(score) { /* YOUR CODE */ 
    if (typeof score === "number" && score >= 0 && score <= 100) {
    this.exams.push(score);
  } else {
    console.log("Invalid score. Please enter a number between 0 and 100.");
  }
};
const calculateAverage = (scores) => { /* YOUR CODE */ 
    if (scores.length === 0) return 0;
    const sum = scores.reduce((acc, val) => acc + val, 0);
    return sum / scores.length;
};


// Main function with sample data
function runGradeCalculator() {
 console.log("=== STUDENT GRADE CALCULATOR ===\n");


 // Create array to store students
 const students = [];


 // Sample Student 1: Alice Johnson
 console.log("Creating Student 1...");
 const student1 = new Student("Alice Johnson", "A001");
 student1.addExam(93);
 student1.addExam(89);
 students.push(student1);


 // Sample Student 2: Bob Smith
 console.log("Creating Student 2...");
 const student2 = new Student("Bob Smith", "B002");
 student2.addExam(85);
 student2.addExam(80);
 students.push(student2);


 // Sample Student 3: Carol Davis
 console.log("Creating Student 3...");
 const student3 = new Student("Carol Davis", "C003");
 student3.addExam(72);
 student3.addExam(75);
 students.push(student3);


 console.log("\n=== STUDENT RESULTS ===");


 // Display results for each student
 students.forEach((student, index) => {
   console.log(`\nStudent ${index + 1}:`);
   console.log(`Name: ${student.name}`);
   console.log(`ID: ${student.id}`);
   console.log(`Exam Scores: [${student.exams.join(", ")}]`);
   console.log(`Exam Average: ${calculateAverage(student.exams).toFixed(1)}`);
 });
}


runGradeCalculator();
