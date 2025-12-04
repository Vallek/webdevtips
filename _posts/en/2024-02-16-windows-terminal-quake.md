---
layout: post
title: 'Windows Terminal in quake mode on start up'
date: 2024-02-16 00:00 +0000
notebook: pc
tags: [windows terminal, quake, windows, terminal]
sources: [https://www.makeuseof.com/windows-terminal-quake-mode/]
---
Windows Terminal can work in quake mode. The mode comes from Quake video game 

In this mode console slides down from top of the screen. It's pretty handy if you use terminal globally. 

To start wt in quake mode add `wt.exe -w _quake` to desktop shortcut properties. With no quotation marks:

![](../img/wt-quake-2.png)

However if you want wt to autostart at system start up it will just open standard window. To start it in wake mode and minimized create special shortcut like this:

1. win + R
2. Type `shell:startup`. It will open Startup folder
3. right click > create shortcut
4. wt.exe -w _quake (or %LOCALAPPDATA%\Microsoft\WindowsApps\wt.exe -w _quake if it's not working)
5. Call it what you want
6. Choose minimized in windows input

**UPDATE**: choosing minimized is not working anymore. 

To start wt minimized change shortcut props from `wt.exe -w _quake` to `wt.exe --window "_quake" powershell -window hidden`. WT will start with powershell tab. 

If you want cmd tab you can start it kinda inside powershell like this: `wt.exe --window "_quake" powershell -window hidden cmd`.

To hide wt tab bar:

![](../img/wt-quake-3.png)

Tested on Windows 10