---
layout: post
title: 'Highlight Matching Tag в VS Code'
date: 2023-05-29 14:18 +0300
notebook: webdev
tags: [vs code]
sources: []
---
If you also use the HighlightMatchingTag extension in VS Code and want to make underscores and marks on the right gutter be different colors set the settings:
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
for dark theme. `light` for light)