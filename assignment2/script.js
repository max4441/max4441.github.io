// This is my database of storing multiple music into a single string function.
// This gives the user the name and artist of each song.

let songs = [
  {
    name: "Veranda",
    path: "songs/veranda.mp3",
    artist: "YASAI feat. YAO",
    cover: "art/Lostart.jpg",
  },
  {
    name: "Lost",
    path: "songs/lost.mp3",
    artist: "YASAI",
    cover: "art/jdmart.jpg",
  },
  {
    name: "TYCA",
    path: "songs/tyca.mp3",
    artist: "YASAI",
    cover: "art/tycaart.jpg",
  },
  {
    name: "Weekend",
    path: "songs/Weekend.mp3",
    artist: "YASAI",
    cover: "art/weekendart.png",
  },
  {
    name: "JDM Love",
    path: "songs/JDM Love.mp3",
    artist: "YASAI",
    cover: "art/jdmart.jpg",
  },
];

let currentMusic = 0;

const music = document.querySelector("#audio");

const seekBar = document.querySelector(".seek-bar");
const songName = document.querySelector(".music-name");
const artistName = document.querySelector(".artist-name");
const disk = document.querySelector(".disk");
const currentTime = document.querySelector(".current-time");
const musicDuration = document.querySelector(".song-duration");
const playBtn = document.querySelector(".play-btn");
const forwardBtn = document.querySelector(".forward-btn");
const backwardBtn = document.querySelector(".backward-btn");

// this is the function that helps to sync the pause and play button with the audio itself.
// This is determined by looking at the class name of the play button because of the naming of the
// play button. The const playBtn is based on the class name play-btn, eventhough the actual name is
// play-button pause. This enables javascript to see if the class name has the word pause (by default),
// it will play the music.
playBtn.addEventListener("click", () => {
  if (playBtn.className.includes("pause")) {
    music.play();
  } else {
    music.pause();
  }
  playBtn.classList.toggle("pause");
  disk.classList.toggle("play");
});

// This is the setup of the music library from the data i added earlier.
// This allows javascript to get the information for each song and the album art as well.

const setMusic = (i) => {
  seekBar.value = 0;
  let song = songs[i];
  currentMusic = i;
  music.src = song.path;

  songName.innerHTML = song.name;
  artistName.innerHTML = song.artist;
  disk.style.backgroundImage = `url("${song.cover}")`;

  currentTime.innerHTML = "00:00";
  setTimeout(() => {
    seekBar.max = music.duration;
    musicDuration.innerHTML = formatTime(music.duration);
  }, 300);
};

setMusic(0);

// // formatting time into min and secs. Originally, the given format was in just seconds, however with
// this function, it can help to make it into a minutes and seconds format by dividing the time into 60

const formatTime = (time) => {
  let min = Math.floor(time / 60);
  if (min < 10) {
    min = `0${min}`;
  }
  let sec = Math.floor(time % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min} : ${sec}`;
};

// seek bar
setInterval(() => {
  seekBar.value = music.currentTime;
  currentTime.innerHTML = formatTime(music.currentTime);
  if (Math.floor(music.currentTime) == Math.floor(seekBar.max)) {
    forwardBtn.click();
  }
}, 500);

seekBar.addEventListener("change", () => {
  music.currentTime = seekBar.value;
});

// this is to fix the play music function when skipping to next/prev song
const playMusic = () => {
  music.play();
  playBtn.classList.remove("pause");
  disk.classList.add("play");
};

// forward and backward btn function

forwardBtn.addEventListener("click", () => {
  if (currentMusic >= songs.length - 1) {
    currentMusic = 0;
  } else {
    currentMusic++;
  }
  setMusic(currentMusic);
  playMusic();
});

backwardBtn.addEventListener("click", () => {
  if (currentMusic <= 0) {
    currentMusic = songs.length - 1;
  } else {
    currentMusic--;
  }
  setMusic(currentMusic);
  playMusic();
});