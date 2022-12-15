//Downwards-
//1.       .querySelector();
//WAY1:Full document e list seach koreche
var studentList = document.querySelector(".student_list");
var student_A = document.querySelector(".student-A");
console.log(student_A);
//WAY2:order list theke ,list kuje niyechye
var studentList = document.querySelector(".student_list");
var student_C = studentList.querySelector(".student-A");
console.log(student_C);
//2.     children:
var studentList = document.querySelector(".student_list");
var student_B = studentList.children[0];
console.log(student_B);
//Upwards
//1.  . parentElement();
var studentA = document.querySelector("li");
var student_list = studentA.parentElement;
console.log(student_list);
//Sideways
//1.
//WAY1:   .nextElementSibling;
var stuA = document.querySelector("li");
var stuB = stuA.nextElementSibling;
var stuC = stuB.nextElementSibling;

console.log(stuC);
//WAY2:   .previousElementSibling;
var stuX = document.querySelectorAll("li")[2];
var stuY = stuX.previousElementSibling;

console.log(stuY);
//2.parentElement +children +index
var stuM = document.querySelector("li");
var list = stuM.parentElement;
var stuChild = list.children[0];
console.log(stuChild);
