---
layout: post
title: 'Переместить изменения в новую git ветку'
date: 2023-06-01 12:08 +0300
notebook: webdev
tags: [git]
sources: [https://stackoverflow.com/a/1394804/9749171]
---
Бывает, что вы сделали изменения и поняли, что они слишком большие для главной/активной ветки, требуют большей работы, чем вы думали и т.д. Вы можете перенести все изменения из working tree, которые вы еще не закоммитили в новую ветку.

```
git switch -c new-branch-name
```
До появления команды switch в 2.23 использовали `git checkout -b new-branch-name`.

Далее просто коммитите изменения уже в новую ветку. После чего можно вернуться в изначальную. 

Этот метод подходит, когда вы поняли, что начали делать целую новую фичу, которую планируете реализовать потом (дойдут ли до этого руки уже другой вопрос:). Если же вы просто хотите временно отложить изменения, то используйте [git stash](https://www.atlassian.com/ru/git/tutorials/saving-changes/git-stash).