//Javascript prototyping
class Student {
  constructor(name) {
    this.name = name;
    this.course = [];
  }

  addCourse(studentCourse) {
    this.course.push(studentCourse);
  }
}

// const student = new Student("Lars");
// student.addCourse("React");
// student.addCourse("Django");
// console.log(student);

module.exports = Student;
