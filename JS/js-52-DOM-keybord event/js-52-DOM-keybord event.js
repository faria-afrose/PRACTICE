const find_textarea = document.querySelector("textarea");

//keypress
find_textarea.addEventListener("keypress", function () {
  console.log("2nd keypress");
});

//keyup
find_textarea.addEventListener("keyup", function (e) {
  console.log("3nd keyup");
  console.log("key," + e.key);
  console.log(" ASCII CODE" + e.keyCode);
  console.log("Code," + e.code);
});

//shiftKey
find_textarea.addEventListener("keypress", function (e) {
  if (e.shiftKey) {
    console.log("shift is clicked-" + e.key);
  }
});
//keydown -repeat
find_textarea.addEventListener("keydown", function (e) {
  if (e.repeat) {
    alert("Don't repeat");
  }
});
