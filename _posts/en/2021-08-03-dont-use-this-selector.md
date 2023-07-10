---
layout: post
title: 'Do not use selector .class > tag?'
date: 2021-08-03 00:00 +0000
notebook: frontend
tags: [css, selectors]
---
Why not use `.class > tag`? I often want to, because I'm too lazy to set classes for all the items in the list, etc.

But you shouldn't because of the specificity. This selector will overwrite others with the same class. It may not be a problem now, but it will be sooner or later.

For example (true story) the `.item` class for a list item will not be able to rewrite the text properties from `.list > li`.