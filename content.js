chrome.runtime.onConnect.addListener((port) => {
    port.onMessage.addListener((msg) => {
      if (msg.function == 'html') {
        port.postMessage({ html: document.documentElement.outerHTML, description: document.querySelector("meta[name=\'description\']").getAttribute('content'), title: document.title });
      }
    });
  });
chrome.runtime.onMessage.addListener(async function(request,sender,sendResponse){
    
})