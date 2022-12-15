//element find
console.clear();
const div = document.querySelector("div ");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const div4 = document.querySelector("#div4");
const div5 = document.querySelectorAll(" .btn");

div.addEventListener("click", function (e) {
  //innerHTML - htmler kono element achye kina
  //textContent- text achye kina
  // console.log("click is ocurred");
  console.log("target" + e.target);
  console.log("id," + e.target.id);
  console.log("html er vitore elemet," + e.target.innerHTML);
  console.log("text achye kina," + e.target.textContent);
});
div.addEventListener("dblclick", function () {
  //   div.style.backgroundColor = "white";

  console.log("white?dblclick is ocurred");
});
div2.addEventListener("mouseup", function () {
  console.log("mouseup is ocurred");
});
div2.addEventListener("mousedown", function () {
  //pressed down over div
  div2.style.backgroundColor = "yellow";

  console.log("yellow? mousedown is ocurred");
});
div3.addEventListener("mouseenter", function () {
  console.log(" mouseenter is ocurred");
});
div3.addEventListener("mouseleave", function () {
  console.log("mouseleave is ocurred");
});
div4.addEventListener("mouseover", function () {
  div4.style.backgroundColor = "blue";
  setTimeout(() => {
    console.log("blue?mouseover is ocurred");
  }, 2000);
});
div4.addEventListener("mousemove", function (e) {
  div4.style.backgroundColor = "green";
  //windoes r upor compare kore
  console.log(
    "geen?mousemove(windoes) ,clientX=" + e.clientX + "clientY=" + e.clientY
  );
  console.log("mousemove(div) ,offsetX=" + e.offsetX + "offsetY=" + e.offsetY);
});

//for button
console.log(div5);
//nodelist ka array te anbo cz map nodelist r sathye kj korte pare na
Array.from(div5).map((button) => {
  button.addEventListener("click", function (e) {
    console.log(e.target.innerHTML);
  });
});
