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

## Выделить определенную часть

`первая_часть.*?вторая_часть?` - Выбрать все между без повторений (только одно совпадение)

Пример: нужно выбрать часть url в атрибутах html элементов, которые при этом написаны в одну строку. В данном коде `"img\/favs\/.*?jpg` выберет внутри каждого url отдельно.

```
<li><img class="topic__favicon" loading="lazy" src="img/favs/roadmap.sh.jpg"><a href="https://roadmap.sh/frontend?r=frontend-beginner">Roadmap для новчиков от roadmap.sh</a> <span>и</span> <img class="topic__favicon" loading="lazy" src="img/favs/roadmap.sh.jpg"><a href="https://roadmap.sh/frontend">продвинутая версия</a></li>
```

`([^символ]*$)` - выделить все с конца до опр. символа

Пример: `([^\:]*$)` выделяет часть url адреса до двоеточия

```
<a href="https://roadmap.sh/frontend">продвинутая версия</a></li>
```