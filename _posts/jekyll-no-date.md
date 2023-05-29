---
layout: post
title: 'Посты в Jekyll без даты в имени файла'
date: 2023-05-29 11:42 +0300
notebook: webdev
tags: [jekyll]
sources: [https://stackoverflow.com/questions/27099427/jekyll-filename-without-date/68287682#68287682]
---

Создайте _plugins/no_date.rb:
```
class Jekyll::PostReader
  def read_posts(dir)
    read_publishable(dir, "_posts", /.*\.md$/)
  end
end
```
Перезапустите сборку.

Обратите внимание, что в моей версии другой regexp, потому что у markdown файлов расширение md. 

Проверено прямо вот на этом сайте) Но на всякий случай все файлы кроме этого будут названы с датами.