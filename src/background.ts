chrome.browserAction.setBadgeBackgroundColor({color: 'red'});
chrome.browserAction.setBadgeText({text:"!"});

chrome.runtime.onMessage.addListener(function(message, sender) {
  if (message.action === "ticket_obtained") {
    chrome.browserAction.setBadgeText({text:"2000"});
    chrome.browserAction.setBadgeBackgroundColor({color: 'green'});
  }
});
