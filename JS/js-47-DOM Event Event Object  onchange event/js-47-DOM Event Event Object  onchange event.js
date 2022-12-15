//finding
// var input = document.querySelector("input");
//listener add korbo
// input.addEventListener("change", fun_changeHandelar); //Onchange ->js a change likhte hy
//event pass korchi ,e, ba ja kno kichui likhte parbo

// function fun_changeHandelar(b) {
//   console.log("changed");
// }
//output dekhar somoy console clear hoye jabe
console.clear();
var input = document.querySelector("input[name=name]"); //specific elemet r jnno

input.addEventListener("change", fun_changeHandlebar);
function fun_changeHandlebar(b) {
  console.log(b.target); //target
  console.log(b.type); //type=change
  console.log(b.target.className); //classname =input_class
  console.log(b.target.id); //id dekhte parbo =input_id
  console.log(b.target.value); //vale show korbe,like =Faria Afrose
}
