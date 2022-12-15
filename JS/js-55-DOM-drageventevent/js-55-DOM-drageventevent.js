const div = document.querySelector("div");
const p = document.querySelector("p");

p.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("Text", event.target.id);
});
div.addEventListener("dragover", (event) => {
  event.preventDefault();
});
div.addEventListener("drop", (event) => {
  let id = event.dataTransfer.getData("Text");
  console.log(id);
  div.appendChild(document.getElementById(id));
  event.preventDefault();
});
