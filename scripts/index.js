import {playerVideoInit} from './videoPlayer.js';
import {playerMusicInit} from './musicPlayer.js';
import {playerRadioInit} from './radioPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const checkd = () => {
  temp.style.display = 'none';
  playerBtn.forEach(item => item.classList.remove('active'));
  playerBlock.forEach(item => item.classList.remove('active'));
};

playerBtn.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    checkd();
    btn.classList.add('active');
    playerBlock[i].classList.add('active');
  });
});

playerRadioInit();
playerMusicInit();
playerVideoInit();