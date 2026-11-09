'use strict';

const SVG_STRING = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">' +
	'<g transform="translate(-92.444 -51.464)">' +
	'<ellipse cx="120.192" cy="79.908" rx="22.139" ry="24.255" style="fill:#c0fc1a;fill-opacity:1;stroke-width:.264583"/>' +
	'<path d="M116.623 109.633c-2.172-.488-3.605-1.18-10.273-4.96-7.442-4.22-9.004-5.4-10.88-8.22-2.707-4.074-3.129-6.49-3.007-17.22.088-7.773.092-7.815.833-9.92 1.88-5.343 3.762-7.195 12.515-12.322 7.142-4.182 7.841-4.53 10.415-5.175 2.51-.63 6.915-.39 9.356.51 1 .368 4.8 2.375 8.449 4.46 5.73 3.277 6.893 4.052 8.55 5.697 1.498 1.487 2.186 2.443 3.14 4.366 1.835 3.7 2.051 5.385 1.938 15.13-.092 7.936-.095 7.978-.833 10.086-1.185 3.384-3.087 6.126-5.597 8.066-1.613 1.246-12.434 7.596-14.332 8.41-2.956 1.266-7.398 1.739-10.274 1.092m5.526-8.993c2.04-1.605 1.92-4.2-.258-5.547-.777-.48-1.527-.63-3.909-.779-4.809-.3-6.544-1.5-9.525-6.578-2.252-3.837-2.633-4.996-2.512-7.647.083-1.823.235-2.347 1.285-4.439 1.52-3.026 1.633-4.653.412-5.927-1.489-1.554-3.712-1.548-5.025.012-1.34 1.593-1.258 2.532.54 6.18 1.143 2.316 1.233 2.648 1.246 4.58.012 1.974-.06 2.238-1.358 4.985-1.496 3.164-1.635 4.032-.854 5.313.857 1.406 1.576 1.699 4.81 1.959 4.532.364 6.701 1.585 8.882 5.001 1.114 1.745 2.137 2.886 2.856 3.186 1.02.424 2.675.28 3.41-.299m14.57-8.289c2.159-.902 2.402-3.115.705-6.411-2.05-3.984-2.086-6.526-.144-10.332 1.284-2.516 1.493-3.981.769-5.382-.642-1.241-1.997-1.75-5.102-1.914-2.214-.117-2.992-.274-4.144-.837-1.73-.847-3.286-2.317-4.26-4.341-1.259-2.617-1.417-3.792-.73-5.422.638-1.514 2.38-2.29 4.342-1.937 2.441.44 2.766.964 4.145 6.667 1.428 5.912 2.348 7.32 6.309 9.665 3.198 1.893 4.093 3.011 4.708 5.877.7 3.272.51 4.287-1.043 5.53-1.265 1.013-2.713 1.034-4.897.068z" style="fill:#242265;fill-opacity:1;stroke-width:.264583"/>' +
	'</g>' +
	'</svg>';

function isGraphmlBlobPage() {
	const current = window.location.pathname + window.location.search + window.location.hash;
	return /\.graphml(?:\?[^#]*)?(?:#.*)?$/i.test(current);
}

function getRawUrl() {
	const rawBtn = document.querySelector('a[data-testid="raw-button"]') ||
	               document.getElementById('raw-url') ||
	               document.querySelector('a[data-test-selector="raw-url"]') ||
	               document.querySelector('a[href*="/raw/"]');
	if (rawBtn && rawBtn.href) {
		return rawBtn.href;
	}
	const match = window.location.pathname.match(/^\/([^/]+)\/([^/]+)\/blob\/(.+)$/);
	if (match) {
		return `https://raw.githubusercontent.com/${match[1]}/${match[2]}/${match[3]}`;
	}
	return null;
}

function createYedElement(rawUrl, itemClass) {
	const yedUrl = 'https://www.yworks.com/yed-live/?file=' + encodeURIComponent(rawUrl);
	const a = document.createElement('a');
	a.id = 'yEdBtn';
	a.href = yedUrl;
	a.target = '_blank';
	a.rel = 'noopener noreferrer';
	a.setAttribute('aria-label', 'Open this file in yEd-live');
	a.setAttribute('title', 'Open this file in yEd-live');
	a.setAttribute('data-testid', 'yed-live-button');

	const siblingButton = document.querySelector('button[data-testid="download-raw-button"]') ||
	                      document.querySelector('button[data-testid="copy-raw-button"]') ||
	                      document.querySelector('a[data-testid="raw-button"]');
	if (siblingButton && siblingButton.className) {
		a.className = siblingButton.className;
	} else {
		a.className = 'btn btn-sm btn-octicon';
	}

	a.style.display = 'inline-flex';
	a.style.alignItems = 'center';
	a.style.justifyContent = 'center';
	a.style.height = 'var(--control-small-size, 28px)';
	a.style.minWidth = 'var(--control-small-size, 28px)';
	a.style.boxSizing = 'border-box';
	a.style.textDecoration = 'none';

	const div = document.createElement('div');
	div.style.cssText = 'display:flex;align-items:center;justify-content:center;width:16px;height:16px;';

	const parser = new DOMParser();
	const svgDoc = parser.parseFromString(SVG_STRING, 'image/svg+xml');
	const svg = svgDoc.documentElement;
	svg.setAttribute('width', '16');
	svg.setAttribute('height', '16');
	div.appendChild(svg);
	a.appendChild(div);

	if (itemClass) {
		const wrapper = document.createElement('div');
		wrapper.id = 'yEdBtnWrapper';
		wrapper.className = itemClass;
		wrapper.appendChild(a);
		return wrapper;
	}

	return a;
}

function injectYedButton() {
	if (!isGraphmlBlobPage()) {
		const existing = document.getElementById('yEdBtnWrapper') || document.getElementById('yEdBtn');
		if (existing) {
			existing.remove();
		}
		return;
	}

	const existingBtn = document.getElementById('yEdBtn');
	if (existingBtn && document.contains(existingBtn)) {
		return;
	}

	const rawUrl = getRawUrl();
	if (!rawUrl) {
		return;
	}

	const primerButtonGroup = document.querySelector('[data-component="ButtonGroup"]') ||
	                          document.querySelector('a[data-testid="raw-button"]')?.closest('[data-component="ButtonGroup"]');
	if (primerButtonGroup) {
		const itemClass = primerButtonGroup.firstElementChild ? primerButtonGroup.firstElementChild.className : '';
		const element = createYedElement(rawUrl, itemClass);
		primerButtonGroup.appendChild(element);
		return;
	}

	const actionContainer = document.querySelector('.react-blob-header-edit-and-raw-actions') ||
	                        document.querySelector('[data-testid="blob-actions"]') ||
	                        document.querySelector('.Box-header .d-flex');
	if (actionContainer) {
		const element = createYedElement(rawUrl, null);
		actionContainer.appendChild(element);
		return;
	}

	const legacyButtonGroup = document.getElementsByClassName('BtnGroup');
	if (legacyButtonGroup.length > 0) {
		const iconGroup = legacyButtonGroup[legacyButtonGroup.length - 1].nextElementSibling;
		if (iconGroup) {
			const element = createYedElement(rawUrl, null);
			iconGroup.insertBefore(element, iconGroup.firstChild);
			return;
		}
	}

	const rawBtn = document.querySelector('a[data-testid="raw-button"]') ||
	               document.getElementById('raw-url') ||
	               document.querySelector('a[data-test-selector="raw-url"]') ||
	               document.querySelector('a[href*="/raw/"]');
	if (rawBtn && rawBtn.parentElement) {
		const element = createYedElement(rawUrl, null);
		if (rawBtn.parentElement.parentElement) {
			rawBtn.parentElement.parentElement.insertBefore(element, rawBtn.parentElement.nextSibling);
		} else {
			rawBtn.parentElement.insertBefore(element, rawBtn.nextSibling);
		}
	}
}

let scheduledFrame = null;
function scheduleInject() {
	if (scheduledFrame !== null) {
		return;
	}
	scheduledFrame = requestAnimationFrame(function() {
		scheduledFrame = null;
		injectYedButton();
	});
}

if (!window.__yedViewerInitialized) {
	window.__yedViewerInitialized = true;

	const observer = new MutationObserver(scheduleInject);
	observer.observe(document.body || document.documentElement, {
		childList: true,
		subtree: true
	});

	document.addEventListener('turbo:load', scheduleInject);
	document.addEventListener('turbo:render', scheduleInject);
	document.addEventListener('pjax:end', scheduleInject);
	window.addEventListener('popstate', scheduleInject);
	window.addEventListener('hashchange', scheduleInject);
}

injectYedButton();
