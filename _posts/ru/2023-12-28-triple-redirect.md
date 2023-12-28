---
layout: post
title: 'Тройная переадресация'
date: 2023-12-28 00:00 +0000
notebook: frontend
tags: [http, html, javascript]
---
Если вы хотите переадресовать посетителя на новый сайт, но у вас нет доступа к серверу (например, если сайт на Github Pages) то можно использовать "тройную" переадресацию без HTTP. А именно:

1. В **HTML** через тег ``meta http-equiv="refresh"``. Число после content - задержка в секундах. Можно поставить 1, 5 и т.п. Дальше сам адрес.
2. С помощью **JS** внутри script в head через ``window.location.href``
3. На случай, если это все не сработает, вставить ссылку в содержимое и попросить посетителей перейти самим.

Результат выглядит примерно так:
```
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="refresh" content="0; url=https://example.com/">
	<title>title</title>
	<link rel="canonical" href="https://example.com/">
	<script>
		window.location.href = "https://example.com/"
	</script>
</head>
<body>
	<h1>Сайт переехал на новый домен <a href="https://example.com/">https://example.com/</a>. Вас должно автоматически переадресовать на новый адрес. Если этого не произошло, пожалуйста, нажмите на <a href="https://example.com/">ссылку</a> сами)</h1>
</body>
</html>
```

Но, если есть возможность, то лучше [начать с HTTP](https://developer.mozilla.org/ru/docs/Web/HTTP/Redirections).
