'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Ide GAS 🤣🤣';
document.querySelector('.headingOneText').textContent = 'Koliko si brzo vozio?';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//let score = Number(document.querySelector('.score').textContent);
let score = 20;
let highScore = 0;
console.log(`Tajni broj je ${secretNumber}`);

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  console.log(`Tajni broj je ${secretNumber}`);
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displaymessage('No number! 🛑🛑');
    // document.querySelector('.message').textContent = 'No number! 🛑';
  } else if (guess === secretNumber) {
    displaymessage('Correct number! 🎉🎉🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displaymessage(
        guess > secretNumber ? 'Number too HIGH ☝' : 'Number too LOW 👇'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('You LOSE! 😢😢');
      document.querySelector('.score').textContent = 0;
    }
  }
});

function displaymessage(message) {
  document.querySelector('.message').textContent = message;
}
