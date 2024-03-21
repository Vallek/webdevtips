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

## Select specific fragment

`start_with.*?end_with?` - Select without repeats (only one occurrence)

Example: select part of url in html elements, that are written in one line. `"img\/favs\/.*?jpg` selects inside each url:

```
<li><img class="topic__favicon" loading="lazy" src="img/favs/roadmap.sh.jpg"><a href="https://roadmap.sh/frontend?r=frontend-beginner">Roadmap для новчиков от roadmap.sh</a> <span>и</span> <img class="topic__favicon" loading="lazy" src="img/favs/roadmap.sh.jpg"><a href="https://roadmap.sh/frontend">продвинутая версия</a></li>
```

`([^symbol]*$)` - select all from the end uo to symbol

Example: `([^\:]*$)` selects part of url up to colon:

```
<a href="https://roadmap.sh/frontend">продвинутая версия</a></li>
```