const box = document.querySelector(".words");
const stime = document.querySelector(".time");
const input = document.querySelector("input");
const gameOver = document.querySelector(".gameOver");
const modal = document.querySelector(".modal");
const modalBox = document.querySelector(".modalBox");
const overBtn = document.querySelector(".overBtn");
const settings = document.querySelector(".settings");
const settingsBox = document.querySelector(".settingsBox");
const exitBtn = document.querySelector(".exitBtn");
const exitBtn2 = document.querySelector(".exitBtn2");

const audioBtn = document.querySelector(".audioBtn");

const audios = document.querySelector(".audios");

const key1 = document.querySelector(".key1");
const key2 = document.querySelector(".key2");
const key3 = document.querySelector(".key3");
const key4 = document.querySelector(".key4");


const gameOverBox = document.querySelector(".gameOverBox");

// buttons
const startBtn = document.querySelector(".startBtn");
const authorBtn = document.querySelector(".authorBtn");
const closeBtn = document.querySelector(".closeBtn");
const settingsBtn = document.querySelector(".settingsBtn");

const texts = [
  "juice",
  "key",
  "lion",
  "mouse",
  "notebook",
  "orange",
  "pencil",
  "queen",
  "rabbit",
  "sun",
  "tree",
  "umbrella",
  "violin",
  "window",
  "xylophone",
  "yoga",
  "zebra",
  "ant",
  "bird",
  "car",
  "dog",
  "elephant",
  "fish",
  "guitar",
  "hat",
  "igloo",
  "jacket",
  "kite",
  "lemon",
  "monkey",
  "nest",
  "octopus",
  "penguin",
  "quilt",
  "rainbow",
  "sunflower",
  "tiger",
  "unicorn",
  "vase",
  "watermelon",
  "xylophone",
  "yarn",
  "zeppelin",
  "airplane",
  "ball",
  "cookie",
  "door",
  "egg",
  "fire",
  "grass",
  "hat",
  "ice cream",
  "jellyfish",
  "kangaroo",
  "lamp",
  "moon",
  "nose",
  "ocean",
  "panda",
  "quack",
  "rain",
  "snake",
  "table",
  "umbrella",
  "volcano",
  "water",
  "xylophone",
  "yacht",
  "zebra",
  "alligator",
  "bear",
  "cat",
  "duck",
  "elephant",
  "fox",
  "giraffe",
  "horse",
  "iguana",
  "jaguar",
  "koala",
  "lion",
  "monkey",
];

let tIndex = 0;
let score = 0;
let time = 60;
let intervalId = null;

let isClicked = false;
let isClicked2 = false;
let isClicked3 = false;
let isClicked4 = false;


function keyaudio() {
  const keyAudio = new Audio();

  keyAudio.src = "/audio/key.wav";

  keyAudio.play();
  if (isClicked) {
    audioUpdate(keyAudio);
  }
  if (isClicked2) {
    audioUpdate2(keyAudio);
  }
  if (isClicked3) {
    audioUpdate3(keyAudio);
  }
  if (isClicked4) {
    audioUpdate4(keyAudio);
  }
}

function audioUpdate(keyAudio) {
  keyAudio.src = "/audio/key2.wav";
  keyAudio.play();
}

function audioUpdate2(keyAudio) {
  keyAudio.src = "/audio/bru.wav";
  keyAudio.play();
}
function audioUpdate3(keyAudio) {
  keyAudio.src = "/audio/key3.wav";
  keyAudio.play();
}
function audioUpdate4(keyAudio) {
  keyAudio.src = "/audio/key4.ogg";
  keyAudio.play();
}

function clickAudio() {
  const clickAudio = new Audio("/audio/click.wav");
  clickAudio.volume = 0.5;
  clickAudio.play();
}

function getRandomText() {
  return texts[Math.floor(Math.random() * texts.length)];
}

function next() {
  tIndex++;
  score++;
  if (tIndex >= texts.length) {
    tIndex = 0;
  }
  const storage = localStorage.getItem("memory");

  box.innerHTML = `<span class='texind'>${texts[tIndex]}</span>
  <span class='score'>Your score :   ${score}</span>`;

  box.innerHTML += `<span class='storage'>History score :   ${storage}</span>`;
  console.log(texts[tIndex]);
  input.value = "";
  input.focus();

  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(() => {
    time--;
    stime.innerHTML = `<span class='time'>${time}</span>`;
    if (time == 6) {
      setTimeout(() => {
        gameOver.style.display = "block";
        localStorage.setItem("memory", score);
      }, 2000);
    }
    console.log(time);
  }, 1000);
}

function checkInput() {
  const inputValue = input.value.trim();
  const indexText = texts[tIndex];
  if (inputValue === indexText) {
    next();
  }
}

function start() {
  modal.style.display = "none";
  next();
}

input.addEventListener("input", () => {
  checkInput();
  keyaudio();
});

startBtn.addEventListener("click", () => {
  clickAudio()
  start();
});

function hover() {
  const audioH = new Audio("/audio/hover.wav");
  audioH.play();
}
overBtn.addEventListener("click", () => {
  clickAudio()
  window.location.reload();
});

authorBtn.addEventListener("click", () => {
  clickAudio()
  window.open("https://t.me/baxa_vip", "_blank");
});

closeBtn.addEventListener("click", () => {
  clickAudio()
  window.close();
});

startBtn.addEventListener("mouseover", () => {
  hover();
});

authorBtn.addEventListener("mouseover", () => {
  hover();
});

closeBtn.addEventListener("mouseover", () => {
  hover();
});

settingsBtn.addEventListener("click", () => {
  clickAudio()
  modalBox.style.display = "none";

  settings.style.display = "block";
  settingsBox.style.transition = "1s all easy";

  setTimeout(() => {
    settingsBox.style.left = "0px";
  }, 100);
});

exitBtn.addEventListener("click", () => {
  clickAudio()
  modalBox.style.display = "flex";

  settings.style.display = "none";
});

exitBtn2.addEventListener("click", () => {
  clickAudio()
  modalBox.style.display = "none";

  audios.style.display = "none";

  settings.style.display = "block";
});

audioBtn.addEventListener("click", () => {
  clickAudio()
  modalBox.style.display = "none";

  settings.style.display = "none";

  audios.style.display = "block";
});

key1.addEventListener("click", () => {
  isClicked = true;
  clickAudio()
});

key2.addEventListener("click", () => {
  isClicked2 = true;
  clickAudio()
});
key3.addEventListener("click", () => {
  clickAudio()
  const p =prompt('kalit soz')
  if(p=='pescha'){
  isClicked3 = true;
    
  }else{
    alert("xato")
  }

});

key4.addEventListener("click", () => {
  isClicked4 = true;
  clickAudio()
});