// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

const regex = /([^/]+)\/([^/]+)\/blob\/([^/]+)\/(([^/]+\/)*[^/]+.graphml)/gm;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if(changeInfo.status == 'complete'){
		chrome.tabs.get(tabId, function (data){;
			const str = JSON.stringify(data.url);
			let m;
			
			while ((m = regex.exec(str)) !== null) {
			    // This is necessary to avoid infinite loops with zero-width matches
			    if (m.index === regex.lastIndex) {
			        regex.lastIndex++;
			    }
			    if(m.length >= 4){
			      //alert(JSON.stringify(tab));
			      let info = {
			         owner: m[1],
			         repo: m[2],
			         branch: m[3],
			         file_path: m[4]
			      };
			      chrome.storage.sync.set({file_info: info}, function() {
			    	  console.log(JSON.stringify(info));
				      chrome.tabs.executeScript(
				        		tabId,
				        		{file: 'content.js'});
				    });
			    }
			}
		});
	}
});


chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({url: 'https://script.google.com/macros/s/AKfycbwdn8DvT7tmv6k-tzlR_8hxPsx_3ArdByRWufhsZ7zr_pIZF3n7/exec'}, function() {
      console.log("The default url is set");
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
