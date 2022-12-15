//select specific input

var programs = document.querySelectorAll("input[name=program]");
console.log(programs);
//for adding multiple listener , NodeList ka conver kore array te niye asbo-> Array.from(programs)
//map main array er poriborton na kore new array return kore.

Array.from(programs).map((program) => {
  //change hocchye event
  program.addEventListener("change", programHandlebar);
});

function programHandlebar(event) {
  //jodi checked hy tahole
  if (event.target.checked) {
    //jetay click korbo tar vale nibo
    console.log(event.target.value);
  }
}
