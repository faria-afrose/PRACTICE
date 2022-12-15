const find = document.querySelector("input");
const p = document.querySelector("p");

find.addEventListener("cut", function () {
  p.innerText = "You have cut";
});
find.addEventListener("copy", function () {
  p.innerText = "You have copied";
});
find.addEventListener("paste", function () {
  p.innerText = "You have pasted";
});
