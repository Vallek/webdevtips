---
layout: post
title: 'Windows user environment variables'
date: 2024-12-02 00:00 +0000
notebook: frontend
tags: [windows, terminal, cmd]
---
Windows environment variables, that you can use in terminal. These are user folders related vars:
```
%HOMEDRIVE% - system drive
%HOMEPATH% - path to user folder without a drive letter
%USERPROFILE% - path to user folder with a drive letter

echo %VARIABLE% - see variable value
set - list all variable with values
```