---
layout: post
title: 'How to merge last commit with one before'
date: 2024-11-25 00:00 +0000
notebook: webdev
tags: [git]
sources: ['https://stackoverflow.com/a/24690646/9749171']
---
It could be useful if you for example forget to update version number along with main changes. 

```
git reset --soft "HEAD^"
git commit --amend
```

You will have a commit with a name of one before the last one. 

You can merge as many commits as you want, as long as they are the last X commits, and not somewhere in the middle. Just run `git reset --soft HEAD~N`, where `N` is the number of commits you want to merge.