const playBtn = document.getElementById('playBtn');
const title = document.getElementById('track-name')
const musicContainer = document.getElementById('music-container');
const audio = document.getElementById('audio');
const songs = ['mile09'];
let songIndex = 0;

const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');

loadSong(songs[songIndex]);

  function playSong() {
  
    var image = document.getElementById('play-track-img');
  console.log(image.src);
  let src = image.src.split('/');
  let src1 = src.pop();
  if(src1 == "play_img.png") {
      console.log('123');
      image.src = "./img/pause_img.png";
      audio.play();
      
  } else {
      console.log('321');
      image.src = "./img/play_img.png";
      audio.pause();
  }
  
  }
  
function loadSong(song) {
  title.innerText = song;
  audio.src = `./music/${song}.mp3`;
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}
  audio.addEventListener('timeupdate', updateProgress);
  playBtn.addEventListener('click', playSong);
  progressContainer.addEventListener('click', setProgress);
  