---
layout: post
title: 'REmove file from a commit'
date: 2023-02-17 00:00 +0000
notebook: webdev
tags: [git]
---
```
git reset --soft HEAD~1
```
after that, the changes can be sent back to stage and only the necessary file can be committed.