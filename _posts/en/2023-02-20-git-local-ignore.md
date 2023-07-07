---
layout: post
title: 'When git ignore not working'
date: 2023-02-20 00:00 +0000
notebook: webdev
tags: [git]
---
Go to the hidden **.git** folder in the repository and find the **exclude** file without extension inside the **info** folder. Full path `.git/info/exclude`

It works as a local gitignore (only for your copy of the repo) and can sometimes hide files from git that cannot be hidden through git.ignore

## gitignore folder, what already in git
Remove the files from the index (not the actual files in the working copy)
```
$ git rm -r --cached .
```
Add these removals to the Staging Area...
```
$ git add .
```
...and commit them!
```
$ git commit -m "Clean up ignored files"
```
```
rm -rf .jekyll-cache
git commit . -m "Delete cache directory"
git push 
```