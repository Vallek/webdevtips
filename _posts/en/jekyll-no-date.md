---
layout: post
title: 'Jekyll posts without date in file name'
date: 2023-05-29 11:42 +0300
notebook: webdev
tags: [jekyll]
sources: ['https://stackoverflow.com/questions/27099427/jekyll-filename-without-date/68287682#68287682']
---

Create `_plugins/no_date.rb`:
```
class Jekyll::PostReader
  def read_posts(dir)
    read_publishable(dir, "_posts", /.*\.md$/)
  end
end
```
Reload a build.

Note that my version has a different regexp, because markdown files have the md extension.

Tested right here on this site) But just in case, all files except this one will be named with dates.