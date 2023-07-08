---
layout: post
title: 'Accessible ways to visually hide element'
date: 2023-03-13 00:00 +0000
notebook: frontend
tags: [css, accessibility]
---
w3c recommendation:
```
.visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
```

Extended selector and properties:
```
.visually-hidden:not(:focus):not(:active) {
	border: 0;
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
}
```

visibility: hidden - removes from accessibility tree