// Add audio for main
const audio = document.querySelector('.audio');
const button = document.querySelector('button');
let isPlay = false;

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

button.addEventListener('click', playAndPause);

// Add audio for solovey
const audioOne = document.querySelector('.audioOne');
const linkOne = document.querySelector('.solovey');

function buttonToggle() {
  if (isPlay) {
    audioOne.currentTime = 0;
    button.classList.add('pause');
    audioOne.play();
    isPlay = true;
  } else {
    button.classList.remove('pause');
    audioOne.pause();
    isPlay = false;
  }
}

function playLinkOne() {
    button.classList.add('pause');
    audioOne.currentTime = 0;
    audioOne.play();
    isPlay = true;
    button.addEventListener('click', buttonToggle);
}

linkOne.addEventListener('click', playLinkOne);

