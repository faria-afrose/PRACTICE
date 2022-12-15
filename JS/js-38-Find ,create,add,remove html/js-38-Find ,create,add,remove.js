// 1.Creating html elemets:
//creating <h1> </h1>,
var newh3 = document.createElement("h1");
//creating text,
var textFOR_newh3 = document.createTextNode("3.This is new Text for new h1");
//adding text to h1 , <h1>This is new Text for new h1</h1>,
newh3.appendChild(textFOR_newh3);
//finding place for adding element,
var findDiv = document.getElementById("my_div");

//done adding,
findDiv.appendChild(newh3); //using .appendChild elements  will add in the ends.
//2.Removing element:
//finding where is the element ,
var mydiv = document.getElementById("my_div");

//finding  element we want to remove ,
var removeh2 = document.getElementsByTagName("h1")[1];
//removing,
mydiv.removeChild(removeh2);

//3.Adding element in the front:
var finding_index_0 = document.getElementsByTagName("h1")[0];
var div = document.getElementById("my_div");
var newh4 = document.createElement("h1");
var textFOR_newh4 = document.createTextNode("4.Adding element in the front.");
newh4.appendChild(textFOR_newh4);

div.insertBefore(newh4, finding_index_0);
