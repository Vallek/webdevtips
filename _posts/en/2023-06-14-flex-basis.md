---
layout: post
title: 'How flex-basis works'
date: 2023-06-14 13:57 +0300
notebook: frontend
tags: [css, flexbox]
sources: [https://www.w3.org/TR/css-flexbox-1/#flex-basis-property]
---
## How it works

![](../img/rel-vs-abs-flex.svg)

* flex-basis: 0; - **empty space** distribution according to flex-grow
* flex-basis: auto; - size distribution according to  flex-grow 

If one flex element has grow 2 and the other has 1, then with flex-basis: 0, the empty space inside the flex container will be divided. And it will be twice as much.

With flex-basis: auto the size of the entire element with the contents will be twice as large.

[Demo](https://codepen.io/vallek/pen/ExOVqbz)

## Defaults

The initial values of the flex components are equivalent to `flex: 0 1 auto`.

**Note:** The initial values of flex-grow and flex-basis are different from their defaults when omitted in the flex shorthand. This is so that the flex shorthand can better accommodate the most common cases.

It means that if you use one keyword, then it can substitute not `initial`,
but something else according to popular uses. Examples from specs below:

## common cases

* flex: initial 

	Equivalent to `flex: 0 1 auto`. (This is the initial value.) Sizes the item based on the width/height properties. (If the item’s main size property computes to auto, this will size the flex item based on its contents.) Makes the flex item inflexible when there is positive free space, but allows it to shrink to its minimum size when there is insufficient space. The alignment abilities or auto margins can be used to align flex items along the main axis.

* flex: auto

    Equivalent to `flex: 1 1 auto`. Sizes the item based on the width/height properties, but makes them fully flexible, so that they absorb any free space along the main axis. If all items are either flex: auto, flex: initial, or flex: none, any positive free space after the items have been sized will be distributed evenly to the items with flex: auto. 

* flex: none

    Equivalent to `flex: 0 0 auto`. This value sizes the item according to the width/height properties, but makes the flex item fully inflexible. This is similar to initial, except that flex items are not allowed to shrink, even in overflow situations. 

* flex: `<positive-number>`

    Equivalent to flex: `<positive-number>` 1 0. Makes the flex item flexible and sets the flex basis to zero, resulting in an item that receives the specified proportion of the free space in the flex container. If all items in the flex container use this pattern, their sizes will be proportional to the specified flex factor. 

By default, flex items won’t shrink below their minimum content size (the length of the longest word or fixed-size element). To change this, set the min-width or min-height property. (See §4.5 Automatic Minimum Size of Flex Items.)
