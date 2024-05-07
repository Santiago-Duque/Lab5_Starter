// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceToSpeak = document.getElementById("voice-select");
  const textToSpeak = document.getElementById("text-to-speak");
  const smile = document.querySelector("img");
  const talkBtn = document.querySelector("button");


  let voices = [];

  /* Speech Synthesis Function to Populate Dropdown With Voices */
  function populateVoiceList() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("value", voices[i].name);
      voiceToSpeak.appendChild(option);
    }
  }

populateVoiceList();

/* Update Voice List If There Is A Voice Change */
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

/* Event Listener for Button */
talkBtn.addEventListener("click", ()=> {
  const v = voiceToSpeak.value;
  const text = textToSpeak.value;
  const utterThis = new SpeechSynthesisUtterance(text);

  for (let i = 0; i < voices.length; i++) { //voicematching 
    if (voices[i].name === v) {
      utterThis.voice = voices[i];
    }
  }

  utterThis.onstart = () => { //starts talking (opens mouth)
    smile.src = "assets/images/smiling-open.png";
  };

  utterThis.onend = () => { //stops talking (closes mouth)
    smile.src = "assets/images/smiling.png";
  };

  synth.speak(utterThis);
});
}