---
layout: post
title: 'Alias for cmd/powershell CLI'
date: 2023-02-03 00:00 +0000
notebook: webdev
tags: [terminal, cmd, powershell]
sources: ['https://stackoverflow.com/questions/54866820/create-alias-for-a-specific-command-in-cmd/65823225#65823225']
---
Alias are abbreviated commands that can be used instead of too long ones in the terminal. For example, I often use run `bejs` instead of `bundle exec jekyll serve`.

I use cmd.exe with clink extension (should work without it). Tested in Windows 10/11.

1.  Create **init.cmd** file in your OS user folder 
```
C:\Users\YourName\init.cmd
```
You can put it in different place (i put it in repos folder).

2. Example of file contents:
```
@echo off
doskey c=cls
doskey d=cd %USERPROFILE%\Desktop
doskey e=explorer $*
doskey jp=cd C:\John\Pictures
doskey l=dir /a $* 
```
Each `doskey` set alias. Синтаксис `doskey alias=command`.

3.  Now you need to register it in order to apply it automatically on cmd.exe startup 

Execute:

```
reg add "HKCU\Software\Microsoft\Command Processor" /v AutoRun /t REG_EXPAND_SZ /d "%"USERPROFILE"%\init.cmd" /f 
```
Make sure the path to init.cmd is right

Reload cmd 

That's it, now alias should work

To undo registration:

```
reg delete "HKCU\Software\Microsoft\Command Processor" /v AutoRun
```

For PowerShell:

```
function bundleExecJekyllServe {
    bundle exec jekyll serve
}
New-Alias bejs bundleExecJekyllServe

function runW3CValidatorServer {
    D:/Webdev/vnu-runtime-image/bin/java nu.validator.servlet.Main 8888
}
New-Alias valid runW3CValidatorServer
```

You can also set [environment variables](editor-env-var.html).