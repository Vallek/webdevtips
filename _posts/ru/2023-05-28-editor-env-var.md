---
layout: post
title: 'Переменные среды редактора в терминалe для jekyll compose'
date: 2023-05-28 21:33 +0300
notebook: webdev
tags: [terminal, cmd, powershell, windows, jekyll]
---
Расширение jekyll compose для Jekyll может автоматически открывать созданные файлы. Но для этого помимо [настройки](https://github.com/jekyll/jekyll-compose#auto-open-new-drafts-or-posts-in-your-editor) нужно задать переменную среды редактора по умолчанию для вашего терминала. Я использую clink для cmd.

1.  Создайте файл **init.cmd** в папке пользователя OC 
```
C:\Users\YourName\init.cmd
```
Он может быть и в другом месте (у меня он в папке с репами).

2. Синтаксис:
```
set VAR_NAME=value
```
Задаем VS Code как редактор по умолчанию.
```
set JEKYLL_EDITOR=code
```
Обратите внимание, что нужно именно такое название.

3.  Теперь нужно это зарегистрировать, чтобы автоматически применять при запуске cmd.exe

В терминале выполните:

```
reg add "HKCU\Software\Microsoft\Command Processor" /v AutoRun /t REG_EXPAND_SZ /d "%"USERPROFILE"%\init.cmd" /f 
```
Убедитесь, что путь до init.cmd указан верно

Готово!

Перезапустите cmd и переменная должна работать.

Чтобы отменить регистрацию выполните:

```
reg delete "HKCU\Software\Microsoft\Command Processor" /v AutoRun
```

А еще так можно задать [сокращенные команды для cmd/powershell](alias-for-command-in-cmd.html).