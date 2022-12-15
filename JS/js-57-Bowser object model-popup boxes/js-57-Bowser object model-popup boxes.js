//popup box -alert,confirm,prompt

//confirm
function delete_thing() {
  let value = confirm("Do you want to continue?");
  if (value) {
    console.log("Yes i do");
  } else {
    console.log("No, i don't");
  }
}
delete_thing();
//prompt
//creating heder
var h1 = document.createElement("h1");
var text;
function prompt_fun() {
  var name = prompt("Enter your name:");
  if (name == null || name == "") {
    text = "no name";
  } else {
    text = "Welcome " + name;
  }
  //text create
  var text_create = document.createTextNode(text);

  //header e text add
  h1.appendChild(text_create);
  //heder add with body
  document.body.appendChild(h1);
}
prompt_fun();
