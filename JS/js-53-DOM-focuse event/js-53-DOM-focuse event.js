const find_input = document.querySelector("input");
find_input.addEventListener("blur", function (e) {
  //   console.log("blur is occurred ");
  //   find_input.style.backgroundColor = "green";
  //     console.log("green? blur is occurred ");
  find_input.value = e.target.value
    .split(" ")
    .map((item) => item.substring(0, 1).toUpperCase() + item.substring(1))
    .join(" ");
  console.log(e.target.value);
});

// find_input.addEventListener("focus", function (e) {
//   find_input.style.backgroundColor = "yellow";
//   console.log("yellow? focus is occurred ");
// });
// find_input.addEventListener("focusin", function () {
//   console.log("blue? focusin is occurred ");
// });
// find_input.addEventListener("focusout", function () {
//   console.log("focusout is occurred ");
// });
