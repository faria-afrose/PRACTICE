//user jei button e click korbe tar text pabo
for (var i = 0; i < 3; i++) {
  document
    .querySelectorAll(".my_btn")
    [i].addEventListener("click", function () {
      var text = this.innerHTML; //ja button a click korbo tar text
      fun_(text); //sunction calling
    });
}
//but amder lgbe .a ,.b ,.c
function fun_(text) {
  //document select and add . to start
  var select_text = document.querySelector("." + text);
  //css class add
  select_text.classList.add("anim");

  setTimeout(function () {
    //class 1 min por remove
    select_text.classList.remove("anim");
  }, 1000);
}
