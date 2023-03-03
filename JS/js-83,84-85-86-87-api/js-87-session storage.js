//---------------session storage-------------
sessionStorage.setItem("userName", "aki");
sessionStorage.setItem("password", "3254alo");

//get item
const user = sessionStorage.getItem("userName");
console.log(user);
//remove item
sessionStorage.removeItem("password");
//*clear
// sessionStorage.clear();
//object get
const Obj = {
  id: 101,
  age: 27,
  name: "ki",
};
sessionStorage.setItem("key", JSON.stringify(Obj));
//user retreat
const c = JSON.parse(sessionStorage.getItem("key"));
console.log(c);
