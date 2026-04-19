browser.webRequest.onBeforeRequest.addListener(
    function(details) {
      const mediumUrlPattern = /https:\/\/(.*\.)?medium\.com\/(.*)/;
      
      if (mediumUrlPattern.test(details.url)) {
        return {
          redirectUrl: `https://freedium-mirror.cfd/${details.url}`
        };
      }
    },
    { urls: ["*://*.medium.com/*"] },
    ["blocking"]
  );
  