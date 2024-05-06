// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsConfetti = new JSConfetti()
  let hornselect = document.getElementById("horn-select");
  let status;
  let image = document.querySelector('[alt="No image selected"]');
  let sound = document.querySelector('.hidden');
  hornselect.addEventListener('input',function(){
    status = this.value;
    if(status == 'air-horn'){
      image.src = "assets/images/air-horn.svg";
      sound.src = "assets/audio/air-horn.mp3";
    } 
    else if(status == 'car-horn'){
      image.src = "assets/images/car-horn.svg";
      sound.src = "assets/audio/car-horn.mp3";
    } 
    else if(status == 'party-horn'){
      image.src = "assets/images/party-horn.svg";
      sound.src = "assets/audio/party-horn.mp3";
    } 
  });

  let button = document.querySelector('button');
  button.addEventListener('click', function() {
  if(status == 'party-horn'){
    jsConfetti.addConfetti();
  }
  sound.play();
  })
  
  let volume = document.getElementById("volume");
  let value;
  let volImg = document.querySelector('[alt="Volume level 2"]');
  volume.addEventListener('input',function(){
    
    value = volume.value;
    if(value == 0){
      volImg.src = "assets/icons/volume-level-0.svg";
    }
    else if(value > 0 && value < 33){
      volImg.src = "assets/icons/volume-level-1.svg";
    }
    else if(value > 33 && value < 67){
      volImg.src = "assets/icons/volume-level-2.svg";
    }
    else if(value > 67){
      volImg.src = "assets/icons/volume-level-3.svg";
    }
    sound.volume = value/100;
  })
}

