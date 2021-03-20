'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
// const scoreP0 = document.getElementById("score--0");
const scoreP0 = document.querySelector('#score--0');
const scoreP1 = document.querySelector('#score--1');
const currentP0 = document.querySelector('#current--0');
const currentP1 = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing, randomNumber;

// Pocetno stanje
scoreP0.textContent = '0';
scoreP1.textContent = '0';
diceEl.classList.add('hidden');

const init = function () {
  currentScore = 0;
  randomNumber = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;

  scoreP0.textContent = '0';
  scoreP1.textContent = '0';
  diceEl.classList.add('hidden');

  currentP0.textContent = 0;
  currentP1.textContent = 0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player1.classList.remove('player--active');
  player0.classList.add('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// Bacanje kocke

btnRoll.addEventListener('click', function () {
  if (playing) {
    const diceRandomNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceRandomNumber);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceRandomNumber}.png`;

    if (diceRandomNumber !== 1) {
      currentScore += diceRandomNumber;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to active Player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[
      activePlayer
    ].toString();

    // Check if score is >= 1000

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
    // Finish game if True, else switch
  }
});

btnNew.addEventListener('click', init);
