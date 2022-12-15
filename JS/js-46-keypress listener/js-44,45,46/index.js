for (var i = 0; i < 3; i++) {
  document
    .querySelectorAll(".my_btn")
    [i].addEventListener("click", function () {
      var text = this.innerHTML; //ja button a click korbo tar text
      fun_(text); //function calling
      audio_function(text);
      document.querySelector("p").innerHTML = "You have Pressed: " + text;
    });
}

document.addEventListener("keypress", function (event) {
  var text = event.key;
  fun_(text);
  audio_function(text);
  document.querySelector("p").innerHTML = "You have Pressed: " + text;
});

//but  lgbe .a ,.b ,.c
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

//function for audio
function audio_function(text_pathabo) {
  switch (text_pathabo) {
    case "a":
      var audio_VAR = new Audio("sound/a.mp3");
      audio_VAR.play();
      break;
    case "b":
      var audio_VAR = new Audio("sound/b.mp3");
      audio_VAR.play();
      break;
    case "c":
      var audio_VAR = new Audio("sound/c.mp3");
      audio_VAR.play();
      break;
  }
}
