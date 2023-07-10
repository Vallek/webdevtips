---
layout: post
title: 'How to set tags pages title for jekyll-tagging'
date: 2023-07-10 09:54 +0300
notebook: webdev
tags: [jekyll, ruby]
sources: []
---
Find Ruby: `where ruby`

Gems are at: `Ruby\lib\ruby\gems\version\gems\`

Open `jekyll-tagging-1.1.0\lib\jekyll\tagging.rb`

Find

```
data = { 'layout' => layout, 'posts' => posts.sort.reverse!, 'tag' => tag }
```

and change it to something like:

```
data = { 'layout' => layout, 'posts' => posts.sort.reverse!, 'tag' => tag, 'title' => 'Posts about' + ' ' + tag }
```

You can add or change other page setting like this. For example I needed to remove lang value for multilang site and did it like this: `'lang' => ''`.