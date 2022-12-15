//Runtime e style change
var find_my_var = document.querySelector("#para_id");
function add() {
  //   find_my_var.style.color = "red";
  //   find_my_var.style.color = "red";
  //   find_my_var.style.color = "red";
  //   find_my_var.style.color = "red";
  //   document.querySelector("#para_id").style.color = "red";
  find_my_var.classList.add("para-style");
}
function remove() {
  //class add korbo tai . deyar proyojn nei
  find_my_var.classList.remove("para-style");
}
