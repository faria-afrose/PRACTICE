//load

window.addEventListener("load", function () {
  console.log("load");
});
//unload
window.addEventListener("unload", function () {
  console.log("unload");
});
//scroll
window.addEventListener("scroll", function () {
  console.log("scroll");
});
//resize
window.addEventListener("resize", function () {
  const height = window.outerHeight;
  const width = window.outerWidth;
  //js use dollar sign as a letter ,here '$' in a variable
  //``
  console.log(`height:${height} ,width:${width} `);
});
//toggle (details element r sathye kj kore)
//details element htmla jkn open ba close kore thaki tkn toggle element kaj kore.
//summery click korle taggle kaj kore.er sathe listenar add korbo.
const details = document.querySelector("details");
details.addEventListener("toggle", function (e) {
  console.log("toggle");
  var target = e.target.open;

  if (target === true) {
    console.log("open");
  } else {
    console.log("Close");
  }
});
