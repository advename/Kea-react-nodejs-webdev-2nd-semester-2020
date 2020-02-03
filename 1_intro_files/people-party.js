let faker = require("faker");
let Student = require("./Student.js");
let students = [];

for (let i = 0; i < 9; i++) {
  const person = new Student(faker.name.firstName());
  students.push(person);
}

console.log(students);
