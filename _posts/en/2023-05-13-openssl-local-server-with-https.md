---
layout: post
title: 'OpenSSL local server with HTTPS'
date: 2023-05-13 00:00 +0000
notebook: 'backend'
tags: [local server, https, openssl]
---
How to run a local server on https. It is necessary, for example, to test js modules.

First, install openssl [from here](https://wiki.openssl.org/index.php/Binaries ). On Windows there is a unofficial version, but it says it's ok) At least for the testing.

Open the terminal. Go to the project folder and execute

`openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem`

This will create two certificate files required for https to work.

It will ask you to enter several parameters such as name, country. It seems that you can enter any except Common Name. Here you need `127.0.0.1` for the local server.

Then install the server. [http-server](https://www.npmjs.com/package/http-server) did work right away for me. For live server, you need to write a config with file paths.

`npm install --global http-server`

And launch

`http-server -S -C cert.pem`

-S is https
-C is key before the path to the cert.pem file. For the key.pem file use -K key. It worked for me only when files are in the project folder.

If server tries to download a html file instead of opening a page. 

Run server without file name. Meaning run `http-server` not `http-server page.html`. After that just input url with file like this: `http://127.0.0.1:8080/page.html`