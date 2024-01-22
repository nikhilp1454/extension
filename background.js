chrome.runtime.onInstalled.addListener(function() {
  // Set up initial update
  updateContentScript();
});

// Periodically check for updates every 2 hours
setInterval(function() {
  updateContentScript();
}, 2 * 60 * 60 * 1000); // 2 hours

function updateContentScript() {
  // Replace 'YOUR_GITHUB_RAW_URL' with the raw URL of your content.js file on GitHub
  const githubUrl = 'https://raw.githubusercontent.com/nikhilp1454/extension/main/content.js';

  fetch(githubUrl)
    .then(response => response.text())
    .then(newContent => {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateContent', content: newContent });
      });
    })
    .catch(error => console.error('Error updating content.js:', error));
}
