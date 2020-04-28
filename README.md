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
let button = $('#click-me'); // Get the button with ID "click-me"
let headings = $$('article > h1'); // Get all H1 tags inside article
```
