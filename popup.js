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

var audio = document.getElementById("audioMusic");
    function bell(){
        audio.play()
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
    });
  }
  else{
    localStorage.setItem('status','unchecked')
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(5) > div.crqnQb > div.rG0ybd > div.q2u11 > div.a1GRr > div > div > div").style.pointerEvents = "all"'});
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
    });
  }
  else{
    localStorage.setItem('status1','unchecked')
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(5) > div.crqnQb > div.rG0ybd.LCXT6 > div.q2u11 > div.SfBQ6c > div > div").style.pointerEvents="all";'});
      });
  }
  
})
//both
let mute3 = document.getElementById('mute3');

let status2 = localStorage.getItem('status2');
if(status2 === 'checked'){
  mute3.click();
}

mute3.addEventListener('click',function(e){
  if(e.target.checked){
    document.getElementById("mute1").disabled = true;
    document.getElementById("mute2").disabled = true;
    localStorage.setItem('status2','checked')
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file:'video_audio.js'});
    });
  }
  else if(!e.target.checked)
  {
    document.getElementById("mute1").disabled = false;
    document.getElementById("mute2").disabled = false;
  }
  else{
    localStorage.setItem('status2','unchecked')
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(5) > div.crqnQb > div.rG0ybd.LCXT6 > div.q2u11 > div.SfBQ6c > div > div").style.pointerEvents="all";'},{code: 'document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(5) > div.crqnQb > div.rG0ybd > div.q2u11 > div.a1GRr > div > div > div").style.pointerEvents = "all"'});
      });
  }
  
})
