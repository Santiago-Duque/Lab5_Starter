// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

/* Initialize Function/Element Queries */
function init() {
  // TODO
  const dropdown = document.getElementById("horn-select"); //modify the dropdown list containing horns
  const volSlider = document.getElementById("volume"); //modify the volume slider based on volume level
  const playBtn = document.querySelector("button"); //play the sound of a horn when button is clicked
  const audioElem = document.querySelector("audio"); 
  const volimg = document.querySelector("#volume-controls img");
  const hornSound = dropdown.value;

  dropdown.addEventListener("change", function() {
    const horn = dropdown.value; //the horn chosen by the user is saved
    hornDisplayed(horn);
  });

  playBtn.addEventListener("click", function() {
    playSound();
  });

  volSlider.addEventListener("input", function() {
    updateVol(volSlider.value);
  });
}

/*Update the Image Being Displayed Based On the Type of Horn */
function hornDisplayed(horn) {
  const audioElem = document.querySelector("audio");
  const image = document.querySelector("img");

  if (horn == "air-horn") {
    image.src = "assets/images/air-horn.svg";
    audioElem.src = "assets/audio/air-horn.mp3";
  }

  if (horn == "car-horn") {
    image.src = "assets/images/car-horn.svg";
    audioElem.src = "assets/audio/car-horn.mp3";
  }

  if (horn == "party-horn") {
    image.src = "assets/images/party-horn.svg";
    audioElem.src = "assets/audio/party-horn.mp3";
  }
}

function playSound() {
  const dropdown = document.getElementById("horn-select"); 
  const hornSound = dropdown.value;
  const audioElem = document.querySelector("audio"); 

  if (hornSound == "air-horn") {
    audioElem.src = "assets/audio/air-horn.mp3";
  }

  if (hornSound == "car-horn") {
    audioElem.src = "assets/audio/car-horn.mp3";
  }

  if (hornSound == "party-horn") {
    audioElem.src = "assets/audio/party-horn.mp3";
    jsConfetti.addConfetti();
  }
  audioElem.play();
}

/* Update Volume Image Based On Volume Level */
function updateVol(vol) {
  const audioElem = document.querySelector("audio"); 
  const volimg = document.querySelector("#volume-controls img");

  if (vol == 0) {
    volimg.src = "assets/icons/volume-level-0.svg";
  }

  if (vol >= 1 && vol < 33) {
    volimg.src = "assets/icons/volume-level-1.svg";
  }

  if (vol >= 33 && vol < 67) {
    volimg.src = "assets/icons/volume-level-2.svg";
  }

  if (vol >= 67) {
    volimg.src = "assets/icons/volume-level-3.svg";
  }

  audioElem.volume = vol/100; //divide by 100 since value must be between 0 and 1 
}