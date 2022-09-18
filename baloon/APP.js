const AIR_AMOUNT = 20;
const baloon = document.querySelector('span');
const colorPickBar = document.getElementById('favcolor');
const inflateBtn = document.getElementById('inflate');
const deflateBtn = document.getElementById('deflate');
const pumpModeText = document.querySelector('p');
const baloonCounter = document.getElementById('counter');
let pumpMode;
let pumpGo;
let counter = 0;



baloon.style.height = 0;
baloon.style.width = 0;


baloon.style.backgroundColor = '#000000';

function countBaloons() {
  counter++;
  baloonCounter.innerHTML = counter;
}

function pickPumpMode(Pmode) {
  pumpModeText.innerHTML = `Current Mode - ${Pmode}`;
  if (Pmode.includes('auto')){
    pumpMode = 'auto';
  } else if (Pmode.includes('manual')){
    clearInterval(pumpGo);
    pumpMode = 'manual';
    
  }
  
}


function pickBaloonColor() {
	baloon.style.backgroundColor = colorPickBar.value;
}

function inflateHandler() {
  baloon.style.height = parseInt(baloon.style.height) + AIR_AMOUNT + 'px';
  baloon.style.width = parseInt(baloon.style.width) + AIR_AMOUNT + 'px';
}

function deflateHandler() {
  baloon.style.height = parseInt(baloon.style.height) - AIR_AMOUNT + 'px';
		baloon.style.width = parseInt(baloon.style.width) - AIR_AMOUNT + 'px';
}

function inflateBaloon(pmode) {
  pickBaloonColor();
  pmode = pumpMode;
  
  if (pmode === 'auto') {
    pumpGo = setInterval(function(){inflateHandler(), makeBaloonDisappear()}, 500);
  } else if (pmode === 'manual') {
    inflateHandler();
    
  }
  makeBaloonDisappear();
}
    
   
    
   

function deflateBaloon(pmode){
pmode = pumpMode;
if(pmode === 'manual'){
  

deflateHandler();
} else if (pmode === 'auto'){
  pumpGo = setInterval(function(){deflateHandler(), makeBaloonDisappear()}, 500);
}
makeBaloonDisappear();
}
  
function makeBaloonDisappear(){
  if (parseInt(baloon.style.height) >= 100) {
    clearInterval(pumpGo);
    countBaloons();
    baloon.style.visibility = 'hidden';
    baloon.style.height = 0;
    baloon.style.width = 0;
    baloon.style.visibility = 'visible';

  } 
}



  




