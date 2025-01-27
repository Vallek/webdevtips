---
layout: post
title: 'sudo for Windows 10'
date: 2025-01-27 00:00 +0000
notebook: webdev
tags: [windows terminal, cmd, powershell, windows]
---
On linux systems, you can run individual commands with elevated permissions by adding `sudo` in front of them. Windows works differently and requires you to run the entire application window as an admin. Which is better for security, but less convenient)

Microsoft is finally [delivered](https://devblogs.microsoft.com/commandline/introducing-sudo-for-windows) sudo for Windows 11, but not on Win 10 (at least officially, someone has already made a fork, but I wouldn't risk it).

Fortunately, there is an analogue in the form of the [gsudo] program (https://gerardog.github.io/gsudo). After installing it, you can add `gsudo` or `sudo` to the commands as well as on Linux and execute them with administrator privileges. People also [say](https://github.com/gerardog/gsudo/discussions/331#discussioncomment-11367503) that gsudo has features that ms-sudo doesn't.

It is worth noting that this may present [security risks](https://github.com/gerardog/gsudo/security ) to your system. Use it at your own risk.

gsudo can also be used with a Windows Terminal without opening a new window (which breaks layout when opened from quake mode).