// Function to calculate CGPA
function calculateCGPA() {
  const numCourses = parseInt(prompt("Enter the number of courses:"));

  if (isNaN(numCourses) || numCourses <= 0) {
    alert("Invalid input. Please enter a valid number of courses.");
    return;
  }

  let totalCreditHours = 0;
  let totalGradePoints = 0;

  for (let i = 1; i <= numCourses; i++) {
    const courseName = prompt(`Enter the name of course ${i}:`);
    const creditHours = parseFloat(prompt(`Enter the credit hours for course ${i}:`));
    const grade = prompt(`Enter the grade for course ${i} (A, A-, B+, etc.):`);

    const gradePoint = calculateGradePoint(grade);
    if (gradePoint === -1) {
      alert(`Invalid grade entered for course ${i}. Please enter a valid grade.`);
      return;
    }

    const courseTotalGradePoints = creditHours * gradePoint;
    totalCreditHours += creditHours;
    totalGradePoints += courseTotalGradePoints;
  }

  const cgpa = (totalGradePoints / totalCreditHours).toFixed(2);

  alert(`Your CGPA is: ${cgpa}`);
}

// Function to calculate grade points
function calculateGradePoint(grade) {
  switch (grade.toUpperCase()) {
    case "A":
      return 4.00;
    case "A-":
      return 3.67;
    case "B+":
      return 3.33;
    case "B":
      return 3.00;
    case "B-":
      return 2.67;
    case "C+":
      return 2.33;
    case "C":
      return 2.00;
    case "C-":
      return 1.67;
    case "D":
      return 1.00;
    case "F":
      return 0.00;
    default:
      return -1; // Invalid grade
  }
}

// Start the program
calculateCGPA();
