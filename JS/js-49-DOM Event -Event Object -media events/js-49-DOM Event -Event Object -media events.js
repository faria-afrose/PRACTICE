//audio/video events.
//canplay,play,push,playing,progress,ended,volumechange,waiting.
const vid = document.querySelector("video");
vid.addEventListener("canplay", function () {
  console.log("canplay");
});
vid.addEventListener("play", function () {
  console.log("play");
});
vid.addEventListener("pause", function () {
  console.log("pause");
});
vid.addEventListener("volumechange", function () {
  console.log("volumechange");
});
vid.addEventListener("ended", function () {
  console.log("ended");
});
