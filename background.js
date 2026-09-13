// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

const BLOB_REGEX = /^https:\/\/(?:www\.)?github\.com\/[^/]+\/[^/]+\/blob\/[^/]+\/.*\.graphml(?:\?.*)?$/i;
const RAW_REGEX = /^https:\/\/raw\.githubusercontent\.com\/.*\.graphml(?:\?.*)?$/i;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	const url = changeInfo.url || (tab && tab.url);
	if (!url) return;

	if (RAW_REGEX.test(url)) {
		if (changeInfo.url) {
			chrome.tabs.create({ url: "https://www.yworks.com/yed-live/?file=" + encodeURIComponent(url) });
		}
	} else if (BLOB_REGEX.test(url)) {
		if (changeInfo.status === 'complete' || changeInfo.url) {
			chrome.scripting.executeScript({
				target: { tabId: tabId },
				files: ['content.js']
			}).catch(function() {
				// Ignore errors if tab was closed or cannot be scripted
			});
		}
	}
});

