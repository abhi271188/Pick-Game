'use strict';

let currentScore = 0;
let activePlayer = 0;

document.querySelector('#score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;
document.querySelector('.dice').classList.add('hidden');

//Invoke Addeventlistener on 'Roll Dice' button
document.querySelector('.btn--roll').addEventListener('click', function () {
  //Generate random number
  let randomNumber = Math.trunc(Math.random() * 6) + 1;

  //display dice with respect to the random number
  document.querySelector('.dice').src = `dice-${randomNumber}.png`;
  document.querySelector('.dice').classList.remove('hidden');

  //Function for swithcing the player
  function switchPlayer() {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
  }

  //Condition for switching the player
  if (randomNumber !== 1) {
    currentScore += randomNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

//Invoke Addeventlistener on 'Hold' button
document.querySelector('.btn--hold').addEventListener('click', function () {
  if (currentScore >= 100) {
    console.log('current player wins!');
  }
});
