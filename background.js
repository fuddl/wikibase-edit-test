browser.runtime.onInstalled.addListener(function() {
  browser.tabs.create({
    url: browser.runtime.getURL("page.html")
  });
});