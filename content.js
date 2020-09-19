/* chrome.runtime.onConnect.addListener((port) => {
    port.onMessage.addListener((msg) => {
      if (msg.function == 'html') {
        port.postMessage({ html: document.documentElement.outerHTML, description: document.querySelector("meta[name=\'description\']").getAttribute('content'), title: document.title });
      }
    });
  });
chrome.runtime.onMessage.addListener(async function(request,sender,sendResponse){
    
}) */




if(document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(5) > div.crqnQb > div.rG0ybd > div.q2u11 > div.a1GRr > div > div > div").dataset.isMuted == "false"){
  document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(5) > div.crqnQb > div.rG0ybd > div.q2u11 > div.a1GRr > div > div > div").click()
}

document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(5) > div.crqnQb > div.rG0ybd > div.q2u11 > div.a1GRr > div > div > div").style.pointerEvents = "none"