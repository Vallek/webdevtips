---
layout: post
title: 'Repo inside repo in vs code'
date: 2023-02-07 00:00 +0000
notebook: webdev
tags: [vs code, git, jekyll]
---
In order for source control to support a repo inside a repo, you'll need to set a specific order of folders in workspace (if you have many projects folders opened in the vs code file manager).

The root repo should go AFTER, that is, BELOW the internal one.

For example, if this is a Jekyll build, then

```
_site
jekyll-dev
```
In some cases, I needed to raise _site to the very top.