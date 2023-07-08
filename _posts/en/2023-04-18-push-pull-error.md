---
layout: post
title: 'If remote pull/push not working'
date: 2023-04-18 00:00 +0000
notebook: 'webdev'
tags: [git]
---
This happens if you create a local repository separately from a remote one and if they have different histories. Sometimes setting remote manually is not enough and a conflict occurs. Neither push nor pull works.

This command will allow you to pull when histories conflict.

`git pull https://github.com/user/repo --allow-unrelated-histories`

Be careful! Make sure that you commit the changes you need.