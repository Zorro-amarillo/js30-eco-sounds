console.log('Итого: 40 баллов.\nБаллы считала с помощью формы: https://eco-sounds-cross-check.netlify.app/\nНе выполнено:\n- Активный в данный момент интерактивный элемент выделяется стилем\n- Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения\nВыполнено частично:\n- есть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание звука\n- внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент звук\n- Остальные пункты выполнены');
// Add audio for main
const page = document.querySelector('.main-container');
const logo = document.querySelector('.logo');
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

// Add audio for logo

logo.addEventListener('click', playLogo);

function playLogo() {
  page.style.backgroundImage = 'url("assets/img/forest.jpg")';
  button.classList.add('pause');
  audio.currentTime = 0;
  audioOne.pause();
  audioTwo.pause();
  audioThree.pause();
  audioFour.pause();
  audioFive.pause();
  audio.play();
}

// Add audio for solovey

const audioOne = document.querySelector('.audioOne');
const linkOne = document.querySelector('.solovey');

linkOne.addEventListener('click', playLinkOne);

function playLinkOne() {
  page.style.backgroundImage = 'url("assets/img/solovey.jpg")';
  button.classList.add('pause');
  audioOne.currentTime = 0;
  audio.pause();
  audioTwo.pause();
  audioThree.pause();
  audioFour.pause();
  audioFive.pause();
  audioOne.play();
}

// Add audio for drozd

const audioTwo = document.querySelector('.audioTwo');
const linkTwo = document.querySelector('.drozd');

linkTwo.addEventListener('click', playlinkTwo);

function playlinkTwo() {
  page.style.backgroundImage = 'url("assets/img/drozd.jpg")';
  button.classList.add('pause');
  audioTwo.currentTime = 0;
  audio.pause();
  audioOne.pause();
  audioThree.pause();
  audioFour.pause();
  audioFive.pause();
  audioTwo.play();
  isPlay = true;
}

// Add audio for zarynka

const audioThree = document.querySelector('.audioThree');
const linkThree = document.querySelector('.zarynka');

linkThree.addEventListener('click', playlinkThree);

function playlinkThree() {
  page.style.backgroundImage = 'url("assets/img/zarynka.jpg")';
  button.classList.add('pause');
  audioThree.currentTime = 0;
  audio.pause();
  audioTwo.pause();
  audioOne.pause();
  audioFour.pause();
  audioFive.pause();
  audioThree.play();
  isPlay = true;
}

// Add audio for javoronok

const audioFour = document.querySelector('.audioFour');
const linkFour = document.querySelector('.javoronok');

linkFour.addEventListener('click', playlinkFour);

function playlinkFour() {
  page.style.backgroundImage = 'url("assets/img/javoronok.jpg")';
  button.classList.add('pause');
  audioFour.currentTime = 0;
  audio.pause();
  audioTwo.pause();
  audioThree.pause();
  audioOne.pause();
  audioFive.pause();
  audioFour.play();
  isPlay = true;
}

// Add audio for slavka

const audioFive = document.querySelector('.audioFive');
const linkFive = document.querySelector('.slavka');

linkFive.addEventListener('click', playlinkFive);

function playlinkFive() {
  page.style.backgroundImage = 'url("assets/img/slavka.jpg")';
  button.classList.add('pause');
  audioFive.currentTime = 0;
  audio.pause();
  audioTwo.pause();
  audioThree.pause();
  audioFour.pause();
  audioOne.pause();
  audioFive.play();
  isPlay = true;
}