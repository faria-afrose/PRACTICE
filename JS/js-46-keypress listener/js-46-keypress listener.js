// keybord r a,b,c button a click korle kaj korbe.
// ei function a parameter dite hbe.button a press korle event er modhye key thakbe.kn button a press kora holo.
//a button a click korle er key ta event er modhye thakbe.
//user jei button e click korbe tar text pabo

document.addEventListener("keypress", function (event) {
  var text = event.key; //event er modhye key thakbe1
  document.querySelector("p").innerHTML = "You have Pressed: " + text;
});
