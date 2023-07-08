---
layout: post
title: 'Как генерировать статичный html файл на Node.js и Github Actions'
date: 2023-06-26 10:38 +0300
notebook: backend
tags: [github, nodejs]
sources: [https://medium.com/@danieljimgarcia/publishing-static-sites-to-github-pages-using-github-actions-8040f57dfeaf]
---
## Зачем это нужно
Если вам нужно собирать по таймеру (раз в день например) одну статичную страницу со сложным шаблоном из данных с API, который вы не хотите нагружать, то это способ может вам помочь. Я использовал его для [списка анимируемых CSS свойств](https://vallek.github.io/animatable-css/). Во всех остальных случаях возможно лучше выбрать нормальный бэкэнд сервер)

## Инструкция 
Прежде всего создайте github token. Откройте настройки аккаунта (не репозитория) > developer settings > Personal access tokens. Я выбрал классический. Установите имя и дату окончания. Сохраните токен где-то у себя (как пароль).

Для репозитория на гитхабе:

1. Создайте папку для продакшена. Я использую 'dist' в этом примере
2. Создайте ветку gh-pages 
3. В настройках репозитория > Actions > General > Workflow permissions. Выберете `Read AND WRITE`.
4. Создайте Github Action

Код экшена:
```
name: Build and Deploy to GitHub pages
on:
  schedule:
    - cron: '0 9 * * *'
  push:
    paths-ignore:
      - 'dist/index.html'
      - 'README.md'
    branches: [ "master" ]
  pull_request:
    branches: [ "master" ]

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
**ВАЖНЫЕ ЗАМЕЧАНИЯ**:
1. Убедитесь, что вы загрузили все файлы ноды (node_modules и так далее).
2. НО НЕ пуште статический index.html. Пусть github создает его сам. Добавьте его в .gitignore
3. `actions/checkout@v2` - у меня работало только с **v2**
4. Убедитесь, что "npm run build" запускает правильный js-файл. Задайте в `package.json` в `build`. Мой - это `node index.js`.
5. Не будет работать без строчки `git config --global --add safe.directory /github/workspace`. Перед отключением убедитесь, что вы понимаете эту меру безопасности и [почему она существует](https://github.com/git/git/commit/8959555cee7ec045958f9b6dd62e541affb7e7d9 ). Подробности в [этом ответе](https://stackoverflow.com/a/71904131/9749171 ).
6. Убедитесь, что `cd dist/` и `directory: dist` указывают правильный путь к вашей папке прода
7. Убедитесь, что название вашей главной ветки указано правильно
8. Я запускаю сборку по  пушу изменений (очевидно), но также по таймеру один раз в день. Именно для этого существует `schedule`. Уазывается в формате [cron](https://crontab.guru/#0_24_ *_*_*) и универсальному UTC времени.
9. В оригинальной версии был `user.email "action@github.com"` и `user.name "GitHub Action"`, чтобы не зафлудить вашу собственную историю коммитов, НО у меня это не сработало.
10. `paths-ignore` позволяет вам не запускать сборку при пуше файлов, когда это не нужно.

Обратите внимание, что мой action отличается от источника.