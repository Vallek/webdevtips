---
layout: post
title: 'Мои горячие клавиши для VS Code'
date: 2023-05-29 11:42 +0300
notebook: webdev
tags: [vs code, shortcuts, git, emmet]
sources: []
---
Набор мои сочетаний в vs code, которые позволяют экономить время и делать работу чуть проще. Вы можете добавить их в keybindings.json или просто в интерфейс горячих клавиш.

Закомитить и все файлы одного репозитория или те, которые в stage. И сделать pull/push.

```
{
	"key": "ctrl+alt+c",
	"command": "git.commit"
},
{
	"key": "ctrl+alt+g",
	"command": "git.sync"
},
```
Выделить диапазон с помомощью emmet. Например текст внутри html тегов.
```
{
	"key": "ctrl+shift+a",
	"command": "editor.emmet.action.balanceOut"
},
```
Выделить все совпадения (если отключено автоматом при выделении)
```
{
  "key": "ctrl+shift+l",
  "command": "editor.action.selectHighlights",
  "when": "editorFocus"
}
```