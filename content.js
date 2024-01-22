chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateContent') {
    // Update content.js with the new content
    // Make sure to handle the update process in a way that suits your extension logic
    // For example, you may replace the entire content or update specific functions.
    // Access the updated content using request.content
  }
});
