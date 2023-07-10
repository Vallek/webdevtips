---
layout: post
title: 'regex трюки'
date: 2021-08-04 00:00 +0000
notebook: frontend
tags: [regex, html]
---
## Замена html элементов
```
</a>\n*.*</div>
</a>\n\t\t\t\t</a>
```

Удалить пустые строчки, проще всего расширением [Remove Empty Lines](https://marketplace.visualstudio.com/items?itemName=usernamehw.remove-empty-lines) в vs code 

## Поиск слов

`/[\wА-Яа-я]+/ig` - все слова