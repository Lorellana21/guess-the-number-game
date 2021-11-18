'use strict';

"use strict";

const numberInput = document.querySelector(".js-numberInput");
const testButton = document.querySelector(".js-testButton");
const message = document.querySelector(".js-message");
const attempts = document.querySelector(".js-attemptsNumber");
const resetButton = document.querySelector ('.js-reset');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function showMessage() {
  const numberIntroduced = parseInt(numberInput.value);

  if (numberIntroduced < 1 || numberIntroduced > 100) {
    message.innerHTML = "The number must be between 1 and 100";
  } else if (numberIntroduced > randomNumber) {
    message.innerHTML = "The number is too high";
  } else if (numberIntroduced < randomNumber) {
    message.innerHTML = "The number is too low";
  } else if (numberIntroduced === randomNumber) {
    message.innerHTML = "You have won!";
  }
}

let count = 0;
function showAttempts() {
  count++;
  attempts.innerHTML = `Number of attempts: ${count}`;
}

function handleClickButton(event) {
  event.preventDefault();
  showMessage();
  showAttempts();
}

function handleResetButton(){
    message.innerHTML = "Type a number and click Test";
    attempts.innerHTML = "Number of attempts: 0";
}

testButton.addEventListener("click", handleClickButton);
resetButton.addEventListener("click", handleResetButton)
const randomNumber = getRandomNumber(100);
console.log(randomNumber);
