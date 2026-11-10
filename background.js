// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

const BLOB_REGEX = /^https:\/\/(?:www\.)?github\.com\/[^/]+\/[^/]+\/blob\/[^/]+\/.*\.graphml(?:\?[^#]*)?(?:#.*)?$/i;
const RAW_REGEX = /^https:\/\/raw\.githubusercontent\.com\/.*\.graphml(?:\?[^#]*)?(?:#.*)?$/i;

function handleRawRedirect(url, changeInfo) {
	if (!changeInfo.url || !RAW_REGEX.test(url)) {
		return false;
	}
	chrome.tabs.create({ url: 'https://www.yworks.com/yed-live/?file=' + encodeURIComponent(url) });
	return true;
}

function handleBlobScriptInjection(tabId, changeInfo, url) {
	if (!BLOB_REGEX.test(url)) {
		return false;
	}
	if (changeInfo.status !== 'complete' && !changeInfo.url) {
		return false;
	}
	chrome.scripting.executeScript({
		target: { tabId: tabId },
		files: ['content.js']
	}).catch(function() {
		// Ignore errors if tab was closed or cannot be scripted
	});
	return true;
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	const url = changeInfo.url || (tab && tab.url);
	if (!url) return;

	if (handleRawRedirect(url, changeInfo)) {
		return;
	}

	handleBlobScriptInjection(tabId, changeInfo, url);
});

