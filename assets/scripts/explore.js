// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  let text = document.getElementById('text-to-speak');
  let speech;
  let button = document.querySelector('button');
  let smiley = document.querySelector('[alt="Smiling face"]')
  button.addEventListener('click' , function () {
    speech = text.value;
    const utterance1 = new SpeechSynthesisUtterance(speech);
    const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterance1.voice = voices[i];
      }
    }
    synth.speak(utterance1);
    utterance1.onstart = function(event) {
      smiley.src = "assets/images/smiling-open.png";
    };
    utterance1.onend = function(event) {
      smiley.src = "assets/images/smiling.png";
    };
  })
  
  
}