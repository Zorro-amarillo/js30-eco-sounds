// Add audio for main
const page = document.querySelector('.main-container');
const audio = document.querySelector('.audio');
const button = document.querySelector('button');
let isPlay = false;

button.addEventListener('click', playAndPause);

function playAndPause() {
  if (!isPlay) {
    audio.currentTime = 0;
    button.classList.add('pause');
    audio.play();
    isPlay = true;
  } else {
    button.classList.remove('pause');
    audio.pause();
    isPlay = false;
  }
}

// Add audio for solovey

const audioOne = document.querySelector('.audioOne');
const linkOne = document.querySelector('.solovey');

function buttonToggle() {
  if (isPlay) {
    audioOne.currentTime = 0;
    button.classList.add('pause');
    audio.muted = true;
    audioOne.play();
    isPlay = true;
  } else {
    button.classList.remove('pause');
    audioOne.pause();
    isPlay = false;
  }
}

linkOne.addEventListener('click', playLinkOne);

function playLinkOne() {
  page.style.backgroundImage = 'url("assets/img/solovey.jpg")';
  button.classList.add('pause');
  audioOne.currentTime = 0;
  audioOne.play();
  isPlay = true;
  button.addEventListener('click', buttonToggle);
}

// Add audio for drozd

const audioTwo = document.querySelector('.audioTwo');
const linkTwo = document.querySelector('.drozd');

function buttonToggle() {
  if (isPlay) {
    audioTwo.currentTime = 0;
    button.classList.add('pause');
    audioTwo.play();
    isPlay = true;
  } else {
    button.classList.remove('pause');
    audioTwo.pause();
    isPlay = false;
  }
}

linkTwo.addEventListener('click', playlinkTwo);

function playlinkTwo() {
  page.style.backgroundImage = 'url("assets/img/drozd.jpg")';
  button.classList.add('pause');
  audioTwo.currentTime = 0;
  audioTwo.play();
  isPlay = true;
  button.addEventListener('click', buttonToggle);
}

// Add audio for zarynka

const audioThree = document.querySelector('.audioThree');
const linkThree = document.querySelector('.zarynka');

function buttonToggle() {
  if (isPlay) {
    audioThree.currentTime = 0;
    button.classList.add('pause');
    audioThree.play();
    isPlay = true;
  } else {
    button.classList.remove('pause');
    audioThree.pause();
    isPlay = false;
  }
}

linkThree.addEventListener('click', playlinkThree);

function playlinkThree() {
  page.style.backgroundImage = 'url("assets/img/zarynka.jpg")';
  button.classList.add('pause');
  audioThree.currentTime = 0;
  audioThree.play();
  isPlay = true;
  button.addEventListener('click', buttonToggle);
}

// Add audio for javoronok

const audioFour = document.querySelector('.audioFour');
const linkFour = document.querySelector('.javoronok');

function buttonToggle() {
  if (isPlay) {
    audioFour.currentTime = 0;
    button.classList.add('pause');
    audioFour.play();
    isPlay = true;
  } else {
    button.classList.remove('pause');
    audioFour.pause();
    isPlay = false;
  }
}

linkFour.addEventListener('click', playlinkFour);

function playlinkFour() {
  page.style.backgroundImage = 'url("assets/img/javoronok.jpg")';
  button.classList.add('pause');
  audioFour.currentTime = 0;
  audioFour.play();
  isPlay = true;
  button.addEventListener('click', buttonToggle);
}

// Add audio for slavka

const audioFive = document.querySelector('.audioFive');
const linkFive = document.querySelector('.slavka');

function buttonToggle() {
  if (isPlay) {
    audioFive.currentTime = 0;
    button.classList.add('pause');
    audioFive.play();
    isPlay = true;
  } else {
    button.classList.remove('pause');
    audioFive.pause();
    isPlay = false;
  }
}

linkFive.addEventListener('click', playlinkFive);

function playlinkFive() {
  page.style.backgroundImage = 'url("assets/img/slavka.jpg")';
  button.classList.add('pause');
  audioFive.currentTime = 0;
  audioFive.play();
  isPlay = true;
  button.addEventListener('click', buttonToggle);
}
