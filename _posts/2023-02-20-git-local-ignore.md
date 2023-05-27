---
layout: post
title: 'Когда git ignore не работает'
date: 2023-02-20 00:00 +0000
notebook: frontend
tags: [git]
---
Зайдите в скрытую папку **.git** в репозитории и найдите внутри папки **info** файл **exclude** без расширения. Полный путь `.git/info/exclude`

Он работает как локальный git ignore (только для вашей копии репы) и иногда может скрыть от гита файлы, которые не получается скрыть через git.ignore

## gitignore папку, которая уже в гите
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