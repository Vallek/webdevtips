---
layout: post
title: 'Block element with adblock based on text content'
date: 2022-08-09 00:00 +0000
notebook: pc
tags: [adblock]
---
Syntax:
```
url#?#selector:-abp-has(selector:-abp-contains(content))
```
Example:

Hide google search result with "fandom.com" in url
```
google.com#?#div.MjjYud:-abp-has(cite:-abp-contains(fandom.com))
```

Hide youtube recommendation with word "New"
```
youtube.com#?#ytd-compact-video-renderer:-abp-has(span:-abp-contains(New))
```