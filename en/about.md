---
layout: page
title: About this project
lang: en
permalink: en/about/
---
# Welcome to Web Dev Tips!

Web Dev Tips is a collection of tips and tricks for web development (mainly frontend) and customizing a PC, which at some point helped me and which I collected into a knowledge base. Perhaps they will be useful to you too!

I want to emphasize that this is *not* an encyclopedia. For extensive basic knowledge go to [MDN](https://developer.mozilla.or/) and [javascript.info](https://javascript.info/). Some of the notes here are taken from similar sites, but mostly Web Dev Tips are things that can only be learned from practice. Partly from my own experience, partly from stackoverflow, blogs and the rest of the web.

By the way, you can find different sources of information about web development from [my links selection](https://vallek.github.io/web-links/index.html).

Another disclaimer: you follow any advice here at your own risk. Some of them may not work for you or work the wrong way.

## How to use
On the left in the sidebar you will find all the notes divided into several general headings and tags.

In the header there is a search for all notes (searches by titles, tags and content).

On the right is a panel with tags. Each note can have many tags (topics).

## How to participate
These notes are from my personal practice and only a small fraction of what may be needed in development. You can help make this collection much more versatile and useful!

The Web Dev Tips website is made on [Jekyll](https://jekyllrb.com/docs/), but you don't have to install and build anything to participate. You can just edit a note on github or create a new one. To edit, click on the link "Edit on GitHub!" on any page of the site. All notes are files in [markdown format](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

The file name **must** contain the date in the format `YEAR-MONTH-DAY-name.md `, for example `2023-04-22-how-to.md `.Front matter (hidden properties of the page) should be filled at the top of each new file. Syntax:
```
---
layout: post
title: 'The title that will be visible to users'
notebook: 'frontend'
tags: [css, html, animation]
---
```
**notebook** is one of the main categories (see below and in the sidebar).

You can specify a link to the source in **sources**, if there is one. the url must be in quotation marks.
```
sources: ['https://www.site.com/']
```
After that, click on the "Send pull request" button, I will receive a notification and will check it out. I may accept it, not accept it, change it, or offer to change it to you.

## Categories
At the moment, the site has frontend, webdev, backend and pc categories.
* frontend - html, css, js, layout and everything around it.
* webdev - here I put things that do not necessarily relate to the frontend, but can be used for it. For example, npm packages, static sites generators, etc. This is done simply to not lump everything into one pile.
* backend - for any web backend languages. I don't do backend much myself, so I don't have a lot of notes here.
* pc - tips that are not related to development. Similar questions can be found on superuser, not stackoverflow.

You can also suggest creating a new section if you have something to add to it.

## Roadmap - what has already been done and plans for the future (may change)
- [x] Prototype layout based on the default Jekyll minima theme instead of the finished one, because I'm not looking for easy ways
- [x] Automatic sidebar filling
- [x] Tag cloud, tags in posts
- [x] Site Search
- [x] Pagination
- [x] Transferring my notes from the knowledge base in a more presentable form [partially]
- [x] Edit button on github
- [ ] A story about creating a website and why I'm not looking for easy ways
- [x] Displaying sources from front matter on post pages
- [ ] Transfer answers from stackoverflow from my bookmarks that were not in the notes
- [ ] Home page with widgets, transferring all posts to a separate one
- [x] Number of posts in the tag cloud
- [x] Transferring to my own css layout completely (BEM without nesting, outdated practices, remove everything from minima, etc.)
- [ ] Dark theme
- [x] Accordion in the sidebar
- [x] Posts by tags in the sidebar
- [ ] Prepare the layout as a theme for jekyll
- [x] Search Fork
- [ ] Search improvements (working fuzzy, details in the results)
- [ ] Documentation for participants
- [x] Localization of the interface and content into English (and into Russian, where in English)
- [ ] Comments
- [ ] Your suggestions)

If something doesn't work, please start an issue. With any questions about the project, write in the discussion. Other suggestions and questions can be written to [mail](mailto:vwebdis@gmail.com) or [telegram](https://t.me/webval).