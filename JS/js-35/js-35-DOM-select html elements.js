// DOM -> Document Object Model
// Using DOM We can Find / get, change, add, or delete HTML elements.

// How to find HTML Elements
// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()
// document.querySelector()

// finding element by ID+adding values
var h1 = document.getElementById("header2");

//adding values
document.getElementById("header2").innerHTML =
  "Using innerHTML for this changeling Message";

// finding element by tagName
var h1 = (document.getElementsByTagName("h1")[0].innerHTML =
  "This is Header 1,index[0] ,selected HTML using TAGNAME");
console.log(h1);

// finding element by tagName
var p = (document.getElementsByClassName("para")[2].innerHTML =
  "This is selected HTML using CLASSname ,index[2]");
console.log(p);
