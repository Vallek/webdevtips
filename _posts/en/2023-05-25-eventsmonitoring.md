---
layout: post
title: 'Browser events monitoring'
notebook: 'frontend'
tags: [devtools, events, chrome, firefox]
---
## Chrome

In order to see all browser events in real time, enter in the browser console `monitorEvents(tempVar, 'events type')`

`tempVar` - temp variable that you need to create in devtools (right clikc on any node > store as global variable).

You can just find a node. For example `monitorEvents(document.body, 'mouse')`.

`events type` - event type, for example 'mouse'. Or specific event

## Firefox

There is no native function in Firefox. But you can create it! 
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
Then run with the node as argument. For example `monitorEvents(temp0)` or `monitorEvents(document.body)`.

*Advice from stackoverflow*: If you're trying to see all the events are happening inside an element (such as the body), you should log during the capture phase - element.addEventListener(eventName, log, true);
