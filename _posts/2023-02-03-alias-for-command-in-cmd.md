---
layout: post
title: 'Сокращенные команды для cmd/powershell'
date: 2023-02-03 00:00 +0000
notebook: webdev
tags: [terminal, cmd, powershell]
sources: ['https://stackoverflow.com/questions/54866820/create-alias-for-a-specific-command-in-cmd/65823225#65823225']
---
Alias - это сокращенные команды, которые можно использовать вместо слишком длинных в терминале. Например я часто запускаю bejs вместо bundle exec jekyll serve.

Я использую cmd.exe с расширением clink (рецепт работает и без него). Проверено в Windows 10/11.

1.  Создайте файл **init.cmd** в папке пользователя OC 
```
C:\\Users\YourName\init.cmd
```
Он может быть и в другом месте (у меня он в папке с репами).

2. Пример содержимого файла:
```
@echo off
doskey c=cls
doskey d=cd %USERPROFILE%\Desktop
doskey e=explorer $*
doskey jp=cd C:\John\Pictures
doskey l=dir /a $* 
```
Каждый doskey задает alias. Синтаксис `doskey alias=command`.

3.  Теперь нужно это зарегистрировать, чтобы автоматически применять при запуске cmd.exe

В терминале выполните:

```
reg add "HKCU\Software\Microsoft\Command Processor" /v AutoRun /t REG_EXPAND_SZ /d "%"USERPROFILE"%\init.cmd" /f 
```
Убедитесь, что путь до init.cmd указан верно

Готово!

Перезапустите cmd и alias должны работать.

Чтобы отменить регистрацию выполните:

```
reg delete "HKCU\Software\Microsoft\Command Processor" /v AutoRun
```

Для PowerShell:

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