const bgImage = document.querySelector('.main-container'),
      header = document.querySelector('.header-container'),
      logo = document.querySelector('.logo'),
      playBtn = document.querySelector('.button'),
      songs = document.querySelectorAll('.audio'),
      navList = document.querySelector('.nav-list'),
      navLinks = document.querySelectorAll('.nav-link');

let isPlay = false;

// bgImage.style.backgroundImage = `url("assets/img/bird_00.jpg")`;

function playMusic(audioTracks, i = 5) {
    audioTracks[i].play();
    isPlay = true;
    changePlayBtn();
}

function stopMusic() {
    songs.forEach(song => {
        song.pause();
        song.currentTime = 0;
    });

    isPlay = false;
    changePlayBtn();
}

function changePlayBtn() {
    if (!isPlay) {
        playBtn.classList.remove('pause');
    } else {
        playBtn.classList.add('pause');
    }

    console.log(`isPlay ${isPlay}`);
}

function changeClass() {
    logo.classList.remove('logo_active');

    navLinks.forEach(item => {
        item.classList.remove('nav-link_active');
    });

    header.addEventListener('click', (event) => {
        if (event.target && event.target == logo) {
            logo.classList.add('logo_active');
        } else if (event.target && event.target.classList.contains('nav-link')) {
            event.target.classList.add('nav-link_active');
        }
    });
}

playBtn.addEventListener('click', (event) => {
    if (!isPlay) {
        playMusic(songs);
    } else {
        stopMusic();
    }
});

navList.addEventListener('click', (event) => {
    changeClass();

    if (event.target && event.target.classList.contains('nav-link')) {
        navLinks.forEach((link, i) => {
            if (event.target == link) {
                bgImage.style.backgroundImage = `url("assets/img/bird_0${i + 1}.jpg")`;
                stopMusic();
                playMusic(songs, i);
            }
        });
    }
});

logo.addEventListener('click', () => {
    changeClass();
    bgImage.style.backgroundImage = `url("assets/img/bird_00.jpg")`;
    stopMusic();
    playMusic(songs);
});