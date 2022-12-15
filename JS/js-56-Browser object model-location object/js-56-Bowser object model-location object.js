console.clear();
//console print
// console.log(window);
// console.log(window.document);
// console.log(location);
console.log(location.href);
console.log(location.protocol);
console.log(location.hostname);
console.log(location.port);
console.log(location.pathname);
//browser -print
let location_div = document.querySelector(".location-div");
//first element select location div theke
var p1 = location_div.children[0];
p1.textContent = location.href;

var p2 = location_div.children[1];
p2.textContent = location.protocol;
var p3 = location_div.children[2];
p3.textContent = location.hostname;
var p4 = location_div.children[3];
p4.textContent = location.port;
var p5 = location_div.children[4];
p5.textContent = location.pathname;
// button
var find_button = document.querySelector(".btn");

find_button.addEventListener("click", function () {
  location.assign("https://www.facebook.com/");
});
