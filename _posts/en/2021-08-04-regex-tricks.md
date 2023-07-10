---
layout: post
title: 'regex tricks'
date: 2021-08-04 00:00 +0000
notebook: frontend
tags: [regex, html]
---
## REplace html elements
```
</a>\n*.*</div>
</a>\n\t\t\t\t</a>
```

It's easier to delete empty lines with extension [Remove Empty Lines](https://marketplace.visualstudio.com/items?itemName=usernamehw.remove-empty-lines) for vs code 

## Find all words

`/[\wА-Яа-я]+/ig` - all words including cyrillic