const button = document.querySelector("button");
button.addEventListener("click", function () {
  var value = document.querySelector("#inputID").value;

  //if anyone send wrong number the exception will show using throw
  //with throw we can make our own error(custom error)
  //catch will always receive throw as error
  try {
    if (value < 5) {
      throw "input is too low";
    } else if (value > 15) {
      throw "input is too high";
    }
  } catch (error) {
    console.log(error);
  }
});
