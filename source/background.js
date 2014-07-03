// React when a browser action's icon is clicked.
chrome.browserAction.onClicked.addListener(function(tab) {
	
	var tabId = -1;
	chrome.tabs.query({}, function(tabs) {
		for(var t in tabs){
			if(tabs[t].url.indexOf('youtube.com') > 0 ) {
				tabId = tabs[t].id;
			}			
		}
		
		if(tabId > -1) {
			chrome.tabs.executeScript(tabId, {file:'playpause.js'}, function (result /* array */){
				if (chrome.runtime.lastError) {
					alert(chrome.runtime.lastError.message);
				}
			});
		} else {
			alert('No supported media tabs open');
		}
	});
	
});