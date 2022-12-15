var count = 0;

document
  .querySelector("textarea") //keypress listenar add with textarea
  .addEventListener("keypress", function (event) {
    count++;
    var text = event.key; //event er modhye key thakbe1
    document.querySelector("p").innerHTML = "You have Pressed: " + count;
  });

//backspace press korle charecter count-- hobe.

document
  .querySelector("textarea")
  .addEventListener("keydown", function (event) {
    var key = event.key;
    if (key === "Backspace") {
      if (count != 0) {
        count--;
      }
    }
    document.querySelector("p").innerHTML =
      "You have pressed " + count + " characters";
  });
