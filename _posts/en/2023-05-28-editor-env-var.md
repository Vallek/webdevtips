---
layout: post
title: 'Editor environment variables for terminal'
date: 2023-05-28 21:33 +0300
notebook: webdev
tags: [terminal, cmd, powershell, windows, jekyll]
---
The jekyll-compose extension for Jekyll can automatically open created files. But for this in addition to [settings](https://github.com/jekyll/jekyll-compose#auto-open-new-drafts-or-posts-in-your-editor) you need to set the default editor environment variable for your terminal. I use clink for cmd.

1. Create the **init.cmd** file in the user's OC folder
```
C:\Users\YourName\init.cmd
```
It can be in another place (I have it in my rep folder).

2. Syntax:

```
set VAR_NAME=value
```

We set VS Code as the default editor.
```
set JEKYLL_EDITOR=code
```
Note that this is the name you need.

3. Now you need to register it in order to apply it automatically at startup cmd.exe

In the terminal, run:

```
reg add "HKCU\Software\Microsoft\Command Processor" /v AutoRun /t REG_EXPAND_SZ /d "%"USERPROFILE"%\init.cmd" /f
```	
Make sure that the path to init.cmd is specified correctly

Ready!

Restart cmd and the variable should work.

To cancel registration, run:

```
reg delete "HKCU\Software\Microsoft\Command Processor" /v AutoRun
```

And so you can also set [abbreviated commands for cmd/powershell](alias-for-command-in-cmd.html).