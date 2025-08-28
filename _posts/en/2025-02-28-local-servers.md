---
layout: post
title: 'Local servers for testing compilation'
date: 2025-02-28 00:00 +0000
notebook: backend
tags: [local server, nodejs, php, python, java, vs code, xampp, qa]
sources: [https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server]
---
## Why do we need local servers?
You cannot fully test the frontend by simply opening an html file in a browser. A number of features will be unavailable, like asynchronous API requests. And of course, you need server to test the backend. However, using a real live server for active testing is inconvenient, slow, and unsafe.

## Native
These are servers built into the language platforms or are separate modules. They are usually enough to test a frontend with not the most complex backend code (for example, for sending form data) or a just the frontend. In addition, you could learn more about the backend, configs, and running commands through the terminal)

### Node.js
Install the [Node] itself(https://nodejs.org/) (the npm package manager is included). There is no built-in server in the Node, but as always there are modules for that. For testing, I use [http server](https://www.npmjs.com/package/http-server).  

Install it globally. It is started simply by the command `http-server` inside the project folder. After that, you can specify the exact address to the html file in the browser (if it is not an index at the root).

Read about how to enable https encryption support in my [separate note](https://vallek.github.io/webdevtips/en/openssl-local-server-with-https).

### Python
For a [Python server](https://realpython.com/python-http-server/#how-to-start-pythons-httpserver-in-the-command-line), you will need to install [Python] (https://www.python.org/downloads/) and probably the [Django framework](https://docs.djangoproject.com/en/5.1/topics/install/).

On windows, it is started by the command `py -3 -m http.server`.

### PHP
PHP has a [built-in local server](https://www.php.net/manual/en/features.commandline.webserver.php). It is enough to just install [php](https://www.php.net/downloads.php) itself, after which you can start the server with the command `php -S localhost:8000`.

cons: slow (at least for me/out of the box), long page reload

### Java
Although a significant part of modern tools for frontend developers are written in Node in the form of npm packages, you can find tools in other languages too. For example on [Java](https://www.java.com/ru/download/). The w3c validator [local version](https://validator.github.io/validator/#web-based-checking) has been written on it.

## LAMP/WAMP bundles
AMP/WAMP bundles are useful if you need to test a website with a more complex backend, CMS (for example, on Wordpress), but you don't want to do everything manually. They consists of server, backend language and data base.

### XAMPP
[XAMPP](https://www.apachefriends.org/) consists of of Apache server with PHP support, MariaDB database (MySQL fork) and Perl. There is a simple graphical interface, but you can also access the config files. After [a little manipulation](https://blog.terresquall.com/2021/10/running-python-in-xampp/) it is also possible to run Python code.

There are also many other options: [WAMP](https://sourceforge.net/projects/wampserver/), [Laragon](https://laragon.org/download), [ddev в docker](https://ddev.readthedocs.io/en/stable/users/install/docker-installation/).

## Extensions for VS Code
The simplest, but limited, option for testing only the frontend are extensions for code editors. They also run a local server on the selected port and are usually started simply by clicking on a button.

I **do not** recommend using extensions that open the page preview directly in VS Code. Even if it's technically a Chrome engine, it's still better to test your site as closely as possible to what the user is using. That is, in the official stable versions of browsers. 

### Live Server
The most popular option for VS Code is [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

cons: it runs files only from the sidebar (at least for me), so it will not be possible to run for a single file, only for a project in workspace.