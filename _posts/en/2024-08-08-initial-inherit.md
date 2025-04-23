---
layout: post
title: "What's the difference between inherit, initial, unset and revert?"
date: 2024-08-08 00:00 +0000
notebook: frontend
tags: [css]
---
inherit - property value is **inherited from parent** node (html element)

initial - property value comes from **css specifications** (w3c)

unset - property value is inherited from parent node if possible. If not will come from css specifications.

revert - property value comes from **default browser styles** (user agent stylesheet)

![](../img/inherit.jpg)

About revert [на MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/revert)