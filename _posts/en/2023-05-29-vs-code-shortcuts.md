---
layout: post
title: 'My VS Code hotkeys shortcuts'
date: 2023-05-29 11:42 +0300
notebook: webdev
tags: [vs code, shortcuts, git, emmet]
---
You can add these to `keybindings.json` or just in keyboard shortcuts ui.

Commit all files or the ones from stage. 
```
{
	"key": "ctrl+alt+c",
	"command": "git.commit"
},
```

Do pull/push
```
{
	"key": "ctrl+alt+g",
	"command": "git.sync"
},
```

Select range with emmet. For example text inside html element.
```
{
	"key": "ctrl+shift+a",
	"command": "editor.emmet.action.balanceOut"
},
```

Select all occurrences (if auto is turned off)
```
{
  "key": "ctrl+shift+l",
  "command": "editor.action.selectHighlights",
  "when": "editorFocus"
}
```

Put cursor in the end/beginning of the line
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

Next/prev code block
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

Make number bigger/smaller (like in browser devtools)
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

Fold/unfold terminal panel
```
{
	"key": "ctrl+alt+\\",
	"command": "workbench.action.toggleMaximizedPanel"
}
```