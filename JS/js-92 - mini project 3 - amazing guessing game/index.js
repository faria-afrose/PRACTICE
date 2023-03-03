const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNmb = form.querySelector("#guessing-number");
const buttons = form.querySelector(".btn");
const resultText = cardBody.querySelector(".result-text");
const renamingAttempt = cardBody.querySelector(".renaming-attempt");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //console.log("submitted");
  resultNmb(guessingNmb.value);
});
function resultNmb(value) {
  console.log(`value ${guessingNmb.value}`);
  const f = getRandomNmb(6);

  if (guessingNmb === value) {
    resultText.innerHTML = `You have won.Random number is match`;
  } else {
    resultText.innerHTML = `You have lost! Random number was: ${f}`;
  }
}
function getRandomNmb(limit) {
  return Math.floor(Math.random() * limit) + 1;
}
