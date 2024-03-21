---
layout: post
title: 'Move changes to new git branch'
date: 2023-06-01 12:08 +0300
notebook: webdev
tags: [git]
sources: [https://stackoverflow.com/a/1394804/9749171]
---
Sometimes you make changes and realize that they are too big for the main/active branch, require more work than you thought, etc. You can move all the changes from the working tree that you haven't committed yet to a new branch. Outgoing commits will be moved to a new branch as well.

```
git switch -c new-branch-name
```
Before the `switch` command appeared in 2.23, it was `git checkout -b new-branch-name`.

Then just commit the changes to the new branch. After that, you can return to the original one.

This method is suitable when you realize that you have started making a whole new feature that you plan to implement later (and then will forget about it as per usual:). If you just want to temporarily postpone the changes, then use [git stash](https://www.atlassian.com/ru/git/tutorials/saving-changes/git-stash ).