---
layout: post
title: 'Open XAMPP Wordpress localhost on mobile'
date: 2025-04-29 00:00 +0000
notebook: webdev
tags: [local server, xampp, mobile, qa, windows, wordpress]
sources: ['https://stackoverflow.com/a/48990347/9749171', 'https://stackoverflow.com/a/7650646/9749171', 'https://stackoverflow.com/a/78978044/9749171']
---
I had a post about how to [open localhost on mobile](https://vallek .github.io/webdevtips/ru/localhost-on-mobile). That recipe is suitable when it comes to a simple [local server](https://vallek.github.io/webdevtips/en/local-servers) with a frontend. But if you have Wordpress running on XAMPP, that won't be enough) You'll have to open access to XAMPP in your OS firewall and change the ports. This instructions are fo Windows 10.

ATTENTION: setting safety rules weaker always theoretically reduces safety! You do this at your own risk.

Steps:

1. Stop Apache server in XAMPP
2. Change port `80` to port `8080` everywhere:

	2.1. In the settings (Config > Service and Port settings)

	2.2. In the file `httpd.conf` (Apache Config) - replace `Listen 80` and add `Listen IPv4 address:8080` (see your address in cmd > ipconfig)

	2.3 In the `httpd-xampp.cong` (Apache Config) file, find the line `<Directory "C:/xampp/phpMyAdmin ">` and replace `Require local` with `Require all granted`
3. Windows Control Panel > Windows Defender Firewall > Advanced Settings > Rules for incoming connections > find a rule for Apache HTTP Server (The protocol should be TCP, there also will be UPD one). It will be set to "block" in the properties, change it to "allow". You can increase security by additional means there (for example, allow only the ip of your mobile, for some reason it is considered remote for me).
4. In `wp-config.php ` add
	```
	define('WP_HOME','http://IPv4-адрес:8080/website ');
	define('WP_SITEURL','http://IPv4-адрес:8080/website ');
	```
5. Start the server in XAMPP
6. Open `http://IPv4-адрес:8080/website` on your mobile (don't forget to use wifi!)

Please note that all site paths with `localhost` in the url will not work. Including loading resources. You can replace all localhost with url:port via the [Better Search and Replace extension](https://wordpress.org/plugins/better-search-replace). Or you can test the site without replacing it by simply entering links manually, but again, images may not load, etc.