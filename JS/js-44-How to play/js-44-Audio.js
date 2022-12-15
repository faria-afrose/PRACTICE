//adding listener

for (var i = 0; i <= 2; i++) {
  var a = document
    .querySelectorAll(".my_btn")
    [i].addEventListener("click", function () {
      var text = this.innerHTML;

      audio_function(text); //calling function
    });
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
