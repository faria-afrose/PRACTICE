//Query Selector:
//for id
var a = (document.querySelector("#id-pera").innerHTML =
  "This is changing text For Id");
console.log(a);
//for tag
var b = (document.querySelector("p").innerHTML =
  "This is changing text For Tagname");
console.log(b);
//for class
var c = (document.querySelector(".pera").innerHTML =
  "This is changing text For Class Name");
console.log(c);
//for link
var a = (document.querySelector("a").innerHTML = "(Home)new text");
console.log(a);
//for link -> under list
var a2 = (document.querySelector("li a").innerHTML =
  "(List->Tutorial)new text");
console.log(a);
//for link under div
//Div name use (".div-name") for class name
var a3 = (document.querySelector("div a").innerHTML = "(Content)new text");
console.log(a3);
