---
layout: post
title: 'Highlight Matching Tag в VS Code'
date: 2023-05-29 14:18 +0300
notebook: frontend
tags: [vs code]
sources: []
---
Кто тоже использует расширение Highlight Matching Tag в VS Code и хочет сделать подчеркивание и отметки справа разными цветами ловите настройки:
```
"highlight-matching-tag.styles": {
        "opening": {
            "name": {
                "custom": {
                    "dark": {
                        "overviewRulerColor": "yellow"
                    },
                },
                "underline": "#839496",
            }
        }
    },
```
это для темной темы. Для светлой ставьте "light"