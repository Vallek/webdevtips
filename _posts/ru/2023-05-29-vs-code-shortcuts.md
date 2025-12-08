---
layout: post
title: 'Мои горячие клавиши для VS Code'
date: 2023-05-29 11:42 +0300
notebook: webdev
tags: [vs code, shortcuts, git, emmet]
---
Набор мои сочетаний в vs code, которые позволяют экономить время и делать работу чуть проще. Вы можете добавить их в `keybindings.json` или просто в интерфейс горячих клавиш.

Закомитить все файлы одного репозитория или те, которые в stage.

```
{
	"key": "ctrl+alt+c",
	"command": "git.commit"
},
```

И сделать pull/push.
```
{
	"key": "ctrl+alt+g",
	"command": "git.sync"
},
```

Выделить диапазон с помощью emmet. Например текст внутри html тегов.
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

Переместить курсор в начало/конец строки
```
{
	"key": "alt+]",
	"command": "cursorLineEnd"
},
{
	"key": "alt+[",
	"command": "cursorLineStart"
}
```

Предыдущий/следующий блок в коде
```
{
	"key": "alt+home",
	"command": "editor.gotoPreviousFold"
},
{
	"key": "alt+end",
	"command": "editor.gotoNextFold"
}
```

Увеличить/уменьшить число (как в devtools браузера)
```
{
	"key": "ctrl+alt+up",
	"command": "editor.emmet.action.incrementNumberByOne"
},
{
	"key": "ctrl+alt+down",
	"command": "editor.emmet.action.decrementNumberByOne"
},
{
	"key": "ctrl+shift+alt+down",
	"command": "editor.emmet.action.decrementNumberByTen"
},
{
	"key": "ctrl+shift+alt+up",
	"command": "editor.emmet.action.incrementNumberByTen"
}
```

Развернуть/свернуть панель с терминалом
```
{
	"key": "ctrl+alt+\\",
	"command": "workbench.action.toggleMaximizedPanel"
}
```

Напечатать квадратные скобки (можно использовать в ру раскладке)
```
{
	"key": "shift+alt+[",
	"command": "type",
	"args": {
		"text": "["
	}
},
{
	"key": "shift+alt+]",
	"command": "type",
	"args": {
		"text": "]"
	}
}
```