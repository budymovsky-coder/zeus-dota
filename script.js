const playBtn = document.getElementById('play-btn');
const song = document.getElementById('song');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const timeDisplay = document.getElementById('time');

playBtn.addEventListener('click', () => {
    if(song.paused) {
        song.play();
        playBtn.textContent = '⏸️';
    } else {
        song.pause();
        playBtn.textContent = '▶️';
    }
});

// Обновление прогресс-бара и времени
song.addEventListener('timeupdate', () => {
    const percent = (song.currentTime / song.duration) * 100;
    progress.style.width = percent + '%';

    const minutes = Math.floor(song.currentTime / 60);
    const seconds = Math.floor(song.currentTime % 60);
    const totalMinutes = Math.floor(song.duration / 60);
    const totalSeconds = Math.floor(song.duration % 60);
    if(!isNaN(minutes)) {
        timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2,'0')} / ${totalMinutes}:${totalSeconds.toString().padStart(2,'0')}`;
    }
});

// Перемотка по клику на прогресс
progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = song.duration;

    song.currentTime = (clickX / width) * duration;
});