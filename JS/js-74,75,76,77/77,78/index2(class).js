//class
class student {
  constructor(id, age) {
    this.id = id;
    this.age = age;
  }
  set studentName(msg) {
    this.msg = msg;
  }
  get studentInfo() {
    return this.id + "," + this.age;
  }
}
//obj create and put value to  class name
let s1 = new student(1811511098, 23);
console.log(s1);
console.log(s1.id);
s1.studentName = " set function msg";
console.log(s1.msg);
console.log(s1.studentInfo);
