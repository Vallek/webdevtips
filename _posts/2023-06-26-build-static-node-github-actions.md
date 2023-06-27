---
layout: post
title: 'How to build static page with Node.js and Github Actions'
date: 2023-06-26 10:38 +0300
notebook: backend
tags: [github, nodejs]
sources: [https://medium.com/@danieljimgarcia/publishing-static-sites-to-github-pages-using-github-actions-8040f57dfeaf]
---
## Зачем это нужно
Если вам нужно собирать по таймеру (раз в день например) одну статичную страницу со сложным шаблоном из данных с API, который вы не хотите нагружать, то это способ может вам помочь. Я использовал его для [списка анимируемых CSS свойств](https://vallek.github.io/animatable-css/). Во всех остальных случаях возможно лучше выбрать нормальный бэкэнд сервер)

## How to 
First of all create a github token. Go to account settings > developer settings > Personal access tokens. I chose classic. Set name and expiration. Save it somewhere.

In remote repo on github:

1. Create production folder. I use `dist` in this example
2. Create gh-pages branch 
3. In repo settings > Actions > General > Workflow permissions. Set to `Read AND WRITE`.
4. Create Github Action

Action code:
```
name: Build and Deploy to GitHub pages
on:
  push:
    branches: [ "master" ]
  pull_request:
    branches: [ "master" ]
  schedule:
    - cron: '0 12 * * *'

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2

    - name: Generate static files
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm run build

    - name: Init new repo in dist folder and commit generated files
      run: |
        cd dist/
        git init
        git add -A
        git config --local user.email "email@email.com"
        git config --local user.name "username"
        git commit -m 'deploy'
        git config --global --add safe.directory /github/workspace
        
    - name: Force push to destination branch
      uses: ad-m/github-push-action@master
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        branch: gh-pages
        force: true
        directory: dist
```
**IMPORTANT NOTES ABOUT ACTION**:
1. Make sure to push all node files (node_modules and so on)
2. BUT DO NOT PUSH static index.html. Let github create it. Add it to .gitignore
3. `actions/checkout@v2` - only worked with **v2** for me
4. Make sure `npm run build` runs the right js file. Set in `package.json` in `build`. Mine is `node index.js`.
5. Will not work without `git config --global --add safe.directory /github/workspace`. Before disabling, make sure you understand this security measure, and [why it exists](https://github.com/git/git/commit/8959555cee7ec045958f9b6dd62e541affb7e7d9). You should not do this if your repositories are stored on a shared drive. See [this answer](https://stackoverflow.com/a/71904131/9749171).
6. Make sure `cd dist/` and `directory: dist` have the right path for your prod folder
7. Make sure your branch main name is right
8. I run build on push changes (obviously) but also on timer once a day. This is what `schedule` is for. It's in [cron format](https://crontab.guru/#0_24_*_*_*) and UTC time.
9. Original version had `user.email "action@github.com"` and `user.name "GitHub Action"` to not flood your own commit history BUT it was not working for me.


Обратите внимание, что мой action отличается от источника.