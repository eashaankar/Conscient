/* window.addEventListener('load', (event) => {
    chrome.tabs.executeScript(null, {
      file: 'content.js',}, () => {
        connect()
    });
    });

  function connect() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const port = chrome.tabs.connect(tabs[0].id);
      port.postMessage({ function: 'html' });
      port.onMessage.addListener((response) => {
        html = response.html;
        title = response.title;
        description = response.description;
      });
    });
  } */

/*   let mute = document.getElementById('mute');
  
  mute.onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(5) > div.crqnQb > div.rG0ybd > div.q2u11 > div.a1GRr > div > div > div").style.pointerEvents = "none"'});
    });
  }; */

  var x = document.getElementById("myAudioon"); 
  var y = document.getElementById("myAudiooff"); 
        
  function onAudio() { 
    x.play(); 
  }

  function offAudio() { 
    y.play(); 
  }

let mute1 = document.getElementById('mute1');
let status = localStorage.getItem('status');

if(status === 'checked'){
  mute1.click();
}

mute1.addEventListener('click',function(e){
  if(e.target.checked){
    localStorage.setItem('status','checked')
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file:'content.js'});
        onAudio();
    });
  }
  else{
    localStorage.setItem('status','unchecked')
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(5) > div.crqnQb > div.rG0ybd > div.q2u11 > div.a1GRr > div > div > div").style.pointerEvents = "all"'});
          offAudio();
      });
  }
  
})
//video
let mute2 = document.getElementById('mute2');

let status1 = localStorage.getItem('status1');
if(status1 === 'checked'){
  mute2.click();
}

mute2.addEventListener('click',function(e){
  if(e.target.checked){
    localStorage.setItem('status1','checked')
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file:'video.js'});
        onAudio();
    });
  }
  else{
    localStorage.setItem('status1','unchecked')
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(5) > div.crqnQb > div.rG0ybd.LCXT6 > div.q2u11 > div.SfBQ6c > div > div").style.pointerEvents="all";'});
          offAudio();
      });
  }
  
})
//both
let mute3 = document.getElementById('mute3');

let status2 = localStorage.getItem('status2');
if(status2 == 'checked'){
  mute3.click();
}

mute3.addEventListener('click',function(e){
  if(e.target.checked){
    if(mute1.checked)
     mute1.click()
    if(mute2.checked)
     mute2.click()
    localStorage.setItem('status2','checked')
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file:'video_audio.js'});
        onAudio();
    });
  }
  else{
    localStorage.setItem('status2','unchecked')
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(5) > div.crqnQb > div.rG0ybd.LCXT6 > div.q2u11 > div.SfBQ6c > div > div").style.pointerEvents="all";'},{code: 'document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(5) > div.crqnQb > div.rG0ybd > div.q2u11 > div.a1GRr > div > div > div").style.pointerEvents = "all"'});
          offAudio();
      });
  }
  
})