chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const mediumUrlPattern = /https:\/\/(.*\.)?medium\.com\/(.*)/;
    
    // Check if the URL matches a Medium post
    if (mediumUrlPattern.test(details.url)) {
      // Redirect to freedium
      return { redirectUrl: `https://freedium.cfd/${details.url}` };
    }
  },
  { urls: ["*://*.medium.com/*"] },
  ["blocking"]
);
