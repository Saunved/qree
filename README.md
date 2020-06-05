$ returns the first element in the DOM (document.querySelector)  
$$ returns an array of elements from the DOM (document.querySelectorAll)

### Installation
```shell
npm i qree --save
```
```js
import {$, $$} from 'qree';
```

Or via CDN
```html
<script src="https://cdn.jsdelivr.net/npm/qree@1.0.4/dist/qree.min.js">
```

### Usage
```js
let button = $(selector)
let headings = $$(headings)
```

### Example
```js
let button = $('#click-me'); // Get the button with ID "click-me"
let headings = $$('article > h1'); // Get all H1 tags inside article
```
