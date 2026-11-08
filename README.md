# yEd-github viewer (Firefox & Chrome Extension)

## Introduction

This browser extension makes it easy to view `.graphml` files hosted on GitHub in the [yEd-live graph editor](https://www.yworks.com/yed-live/).

## Features

- Works across **Firefox** (Manifest V3) and **Chrome** (Manifest V3).
- Injects a dedicated yEd Live button directly into GitHub file headers next to the **Raw** button.
- Automatically handles GitHub Turbo navigation and PJAX page transitions.
- Intercepts raw GitHub `.graphml` URLs to open them directly in yEd Live.

## Usage

1. Navigate to a `.graphml` file hosted in any GitHub repository.
2. Click either the **yEd icon button** or the **Raw** button to open the graph in the [yEd-live graph editor](https://www.yworks.com/yed-live/).

## Development & Testing

### Firefox
- Load temporarily via `about:debugging#/runtime/this-firefox` by selecting `manifest.json`.
- Or run locally with `npx web-ext run`.
- Lint with `npx web-ext lint`.
- Build package with `npx web-ext build`.

### Chrome
- Load unpacked via `chrome://extensions` (Enable Developer mode -> "Load unpacked" -> select repository root).
