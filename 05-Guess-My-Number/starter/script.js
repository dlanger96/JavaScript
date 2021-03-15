'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Ide GAS 🤣🤣';
document.querySelector('.headingOneText').textContent = 'Koliko si brzo vozio?';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
//let score = Number(document.querySelector('.score').textContent);
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number! 🛑';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number! 🎉🎉🎉';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number too HIGH ☝';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You LOSE! 😢😢';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number too LOW 👇';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You LOSE! 😢😢';
      document.querySelector('.score').textContent = 0;
    }
  }
});
