var btn = document.querySelector("button");
var msg = document.querySelector("#msg");

btn.addEventListener("click", fun_clock);
function fun_clock() {
  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  min = formaTime(min);
  sec = formaTime(sec);

  //formatting
  let time = hours + ":" + min + ":" + sec;
  //   console.log(time);
  //text content hisebe time set kore dibo
  msg.textContent = time;
  //function call dibo tai annomious function use korbo na
  setInterval(fun_clock, 1000);
}
//formating time 01
function formaTime(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}
