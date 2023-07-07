---
layout: post
title: 'How to clone repo in any folder'
date: 2023-06-17 16:50 +0300
notebook: webdev
tags: [git]
sources: [https://stackoverflow.com/a/651079/9749171]
---
From any place:
```
git clone https://github.com/user/repo-name path/folder-name
```
Repo folder name will become `folder-name` instead of repo name (default behavior).

In active folder (right here):
```
git clone https://github.com/user/repo-name .
```

In the source, git address is written differently, but the usual url works for me.