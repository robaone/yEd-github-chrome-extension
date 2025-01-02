// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

const regex = /([^/]+)\/([^/]+)\/blob\/([^/]+)\/(([^/]+\/)*[^/]+.graphml)/gm;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if(changeInfo.status == 'complete'){
		chrome.tabs.get(tabId, function (data){
			const str = JSON.stringify(data.url);
			let m;
			
			while ((m = regex.exec(str)) !== null) {
			    // This is necessary to avoid infinite loops with zero-width matches
			    if (m.index === regex.lastIndex) {
			        regex.lastIndex++;
			    }
			    if(m.length >= 4){
			      chrome.scripting.executeScript({
			    		  target: {tabId: tabId},
			    		  files: ['content.js']
			      });
			    }
			}
		});
	}else{
		var url = changeInfo.url;
		if(url && url.match(/^https:\/\/raw[.]githubusercontent[.]com\/.*[.]graphml.*/g)) {
			window.open("https://www.yworks.com/yed-live/?file="+url);
		}
	}
});


chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {
              urlMatches: 'github.com'
          },
        })
        ],
        actions: [
        	new chrome.declarativeContent.ShowPageAction()
        ]
      }]);
    });
});
