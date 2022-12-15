//finding elements
const form = document.querySelector("form");
const name = form.querySelector("div #name");
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");
//Submit event accurse in form. Listener add ->Form
form.addEventListener("submit", formHandler);
function formHandler(e) {
  //auto refresh hoye jacchye tai
  e.preventDefault();
  //backend e data send korle object akare send kori evabe kori na.
  //   console.log(name.value);
  //   console.log(email.value);
  //   console.log(password.value);

  //object hisebe send kori tai object creating.
  const userInfo = {
    name: name.value,
    email: email.value,
    password: password.value,
  };

  console.log(userInfo);
  //fild gulo find kora achye.submit korar por ,valu gulo empty kore dibo.
  name.value = "";
  email.value = "";
  password.value = "";
}
