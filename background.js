// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

const regex = /([^/]+)\/([^/]+)\/blob\/([^/]+\/([^/]+\/)*[^/]+.graphml)/gm;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if(changeInfo.status == 'loading'){
		const str = JSON.stringify(tabId);
		alert(str);
		let m;
		
		while ((m = regex.exec(str)) !== null) {
		    // This is necessary to avoid infinite loops with zero-width matches
		    if (m.index === regex.lastIndex) {
		        regex.lastIndex++;
		    }
		    if(m.length >= 4){
		      let info = {
		         owner: m[1],
		         repo: m[2],
		         file_path: m[3]
		      };
		      alert(JSON.stringify(info));
		    }
		}
	}
});


chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({url: 'not set'}, function() {
      console.log("The url is not set");
    });
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
