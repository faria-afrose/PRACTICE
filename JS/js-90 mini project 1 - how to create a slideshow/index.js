const find = document.querySelectorAll(".slideshowElement");
let count = 1;
setInterval(() => {
  count++;
  const curt = document.querySelector(".current");
  curt.classList.remove("current");
  if (count > find.length) {
    find[0].classList.add("current");
    count = 1;
  } else {
    curt.nextElementSibling.classList.add("current");
  }
}, 2000);
