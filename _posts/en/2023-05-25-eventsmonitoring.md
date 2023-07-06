---
layout: post
title: 'Мониторинг браузерных событий'
notebook: 'frontend'
tags: [devtools, events, chrome, firefox]
---
## Chrome

Для того, чтобы видеть все браузерные события в реальном времени введите в консоли браузера `monitorEvents(tempVar, 'events type')`

`tempVar` временная переменная, которую можно создать в девтулзах (ПКМ на любом узле > store as global variable).

Можно просто найти узел. Например `monitorEvents(document.body, 'mouse')`.

`events type` - тип событий, например 'mouse'. Можно и отдельные события.

## Firefox

В лисе к сожалению такой встроенной функции нет. Но ее можно создать самому! 
```
function monitorEvents(element) {
  let log = function(e) { console.log(e);};
  let events = [];

  for(let i in element) {
    if(i.startsWith("on")) events.push(i.substr(2));
  }
  events.forEach(function(eventName) {
    element.addEventListener(eventName, log);
  });
}
```
Затем выполните с нужным узлом в качестве аргумента. Например `monitorEvents(temp0)` или monitorEvents(document.body).

*Совет со stackoverflow*: If you're trying to see all the events are happening inside an element (such as the body), you should log during the capture phase - element.addEventListener(eventName, log, true);
