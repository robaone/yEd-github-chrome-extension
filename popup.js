  let url = document.getElementById('url');
  let save_button = document.getElementById('save');

  chrome.storage.sync.get('url', function(data) {
    url.setAttribute('value', data.url);
  });
  save_button.onclick = function(element) {
	    let url_value = document.getElementById('url').value;
	    chrome.storage.sync.set({url: url_value}, function() {
	        console.log("The url is = "+url_value);
	      });
	    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	      chrome.tabs.executeScript(
	          tabs[0].id,
	          {code: 'console.log("' + url_value +'");'});
	    });
	  };