// JS timing events methods

// SetTimeOut()- after timing it will stop.

setTimeout(() => {
  console.log("setTimeOut will take 2 sec and print this.");
}, 2000);
setTimeout(display, 1000);
function display() {
  console.log("with display function ,setTimeOut will take 1 sec ");
}
//after 2 sec of clicking button messes will despiser
const save = document.querySelector(".saveButton");
const message = document.querySelector(".message");

save.addEventListener("click", saveUser);

function saveUser() {
  message.textContent = "user registration successful";
  setTimeout(() => {
    message.textContent = "";
  }, 2000);
}
// setInterval()- repeat the process .
save.addEventListener("click", count_fun);

function count_fun() {
  let count = 0;
  message.textContent = count;
  setInterval(() => {
    count++;
    message.textContent = count;
  }, 2000);
}
