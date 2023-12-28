---
layout: post
title: 'Тriple redirect'
date: 2023-12-28 00:00 +0000
notebook: frontend
tags: [http, html, javascript]
---
If you need to redirect users to a new address, but you don't have a server, you can use "triple" redirection. It includes:

1. meta tag in **HTML** with ``meta http-equiv="refresh"``. The number after content is a delay in seconds. You can set to 1, 5 and so on.
2. **JS** code inside script in the head with ``window.location.href``
3. In case of all that somehow didn't work put text explanation for users with a link.

Result could look like this:
```
<!DOCTYPE html>
<html lang="en">
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
	<h1>The website moves to <a href="https://example.com/">https://example.com/</a>. If you weren't redirected please click a <a href="https://example.com/">link</a></h1>
</body>
</html>
```

Although it's better to [start with HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections) if you can.
