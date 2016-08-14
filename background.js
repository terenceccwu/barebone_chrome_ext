// this is the background code...

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(null, { file: "jquery-3.1.0.min.js" }, function() {
		chrome.tabs.executeScript(null, { file: 'inject.js' });
	});

});

chrome.runtime.onMessage.addListener(function(msg,sender,sendResponse) {
	console.log(msg); // will be printed in back end
	sendResponse({msg:'this is the response'}); // callback passed from front end (chrome.runtime.sendMessage)
});
