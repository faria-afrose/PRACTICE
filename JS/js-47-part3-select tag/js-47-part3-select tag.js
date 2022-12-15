//select
var department = document.querySelector("#department");
//mapping korar dorkar nei ,puro slelec ka select kora

//adding listener
department.addEventListener("change", func_departmentHandlebar);

function func_departmentHandlebar(event) {
  console.log(event.target.value);
}
