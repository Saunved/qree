$ returns the first element in the DOM (document.querySelector)  
$$ returns an array of elements from the DOM (document.querySelectorAll)

### Usage
```js
import {$, $$} from 'qree';
let button = $(selector)
let headings = $$(headings)
```

### Example
```js
import {$, $$} from 'qree';
let button = $('nav > #click-me');
let headings = $('article > h1');
```
