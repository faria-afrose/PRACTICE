//click
//for button click
document.querySelector("button").addEventListener("click", my_func);
document.querySelector("#btn").addEventListener("click", function () {
  alert("NOW You click it!! we used Anonymous function.");
});

function my_func() {
  alert("NOW You click it!!");
}
//mouse over
var varA = document.querySelector("h5");
varA.addEventListener("mouseover", function () {
  varA.classList.add("my-style");
});
//mouse out
var varB = document.querySelector("h5");
varB.addEventListener("mouseout", function () {
  varB.classList.remove("my-style");
});
