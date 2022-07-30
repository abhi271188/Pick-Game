'use strict';

let currentScore = 0;

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

  currentScore += randomNumber;
  document.getElementById('current--0').textContent = currentScore;
});
