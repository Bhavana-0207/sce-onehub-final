export const gradePoints: Record<string, number> = {
  O: 10,
  "A+": 9,
  A: 8,
  "B+": 7,
  B: 6,
  C: 5,
  U: 0,
};

export const semesters = {
  1: [
    { subject: "Mathematics I", credits: 4 },
    { subject: "Physics", credits: 3 },
    { subject: "Chemistry", credits: 3 },
    { subject: "Problem Solving using Python", credits: 3 },
    { subject: "Engineering Graphics", credits: 4 },
    { subject: "English", credits: 2 },
  ],

  2: [
    { subject: "Mathematics II", credits: 4 },
    { subject: "Programming in C", credits: 3 },
    { subject: "Digital Principles", credits: 3 },
    { subject: "Basic Electrical Engineering", credits: 3 },
    { subject: "Environmental Science", credits: 2 },
  ],

  3: [
    { subject: "Data Structures", credits: 4 },
    { subject: "Computer Organization", credits: 3 },
    { subject: "Discrete Mathematics", credits: 4 },
    { subject: "OOP using Java", credits: 3 },
    { subject: "Operating Systems", credits: 3 },
  ],

  4: [
    { subject: "Database Management Systems", credits: 4 },
    { subject: "Design and Analysis of Algorithms", credits: 4 },
    { subject: "Computer Networks", credits: 3 },
    { subject: "Software Engineering", credits: 3 },
    { subject: "Microprocessors", credits: 3 },
  ],

  5: [
    { subject: "Theory of Computation", credits: 4 },
    { subject: "Compiler Design", credits: 3 },
    { subject: "Artificial Intelligence", credits: 3 },
    { subject: "Web Technologies", credits: 3 },
    { subject: "Professional Elective I", credits: 3 },
  ],

  6: [
    { subject: "Machine Learning", credits: 3 },
    { subject: "Cloud Computing", credits: 3 },
    { subject: "Professional Elective II", credits: 3 },
    { subject: "Open Elective", credits: 3 },
    { subject: "Mini Project", credits: 2 },
  ],

  7: [
    { subject: "Professional Elective III", credits: 3 },
    { subject: "Professional Elective IV", credits: 3 },
    { subject: "Internship", credits: 4 },
    { subject: "Project Phase I", credits: 4 },
  ],

  8: [
    { subject: "Project Phase II", credits: 10 },
  ],
};