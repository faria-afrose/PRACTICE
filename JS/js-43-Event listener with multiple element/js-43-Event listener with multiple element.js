/* js-43-Event listener with multiple element */
/*document.querySelectorAll(".btn")[0].addEventListener("click", function () {
  var text = this.innerHTML;
  document.querySelector("h1").innerHTML =
    "DO YOU KNOW ABOUT YOUR LIFE?" + "<br>" + text + " : Yes!";
});
document.querySelectorAll(".btn")[1].addEventListener("click", function () {
  var text = this.innerHTML;
  document.querySelector("h1").innerHTML =
    "DO YOU KNOW ABOUT YOUR LIFE?" + "<br>" + text + " : Nope!";
});
document.querySelectorAll(".btn")[2].addEventListener("click", function () {
  var text = this.innerHTML;
  document.querySelector("h1").innerHTML =
    "DO YOU KNOW ABOUT YOUR LIFE?" + "<br>" + text + " : Maybe!";
}); */

//ekta ekta kore na kore ekbare shb gulo:by using LOOP
var btn_length = document.querySelectorAll(".btn").length;
for (var i = 0; i < btn_length; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    var text = this.innerHTML;

    document.querySelector("h1").innerHTML =
      "DO YOU KNOW ABOUT YOUR LIFE?" + "<br>" + text + " : Yes!";
  });
}
