# Nik Valid
[![jsdelivr version](https://badgen.net/jsdelivr/v/npm/nik-valid?color=orange)](https://cdn.jsdelivr.net/npm/nik-valid/dist/nik-valid.min.js)
[![npm version](https://badgen.net/npm/v/nik-valid?color=red)](https://www.npmjs.com/package/nik-valid)
[![license](https://badgen.net/github/license/toufiqnuur/nik-valid)](https://github.com/toufiqnuur/nik-valid/blob/main/LICENSE)
![total download](https://badgen.net/npm/dt/nik-valid)


Javascript client side NIK Validator.

## Installation

Using npm:
```bash
$ npm install nik-valid
```

Using cdn:
```html
<script src="https://cdn.jsdelivr.net/npm/nik-valid/dist/nik-valid.min.js"></script>
```

## How to use
```js
const Validator = require('nik-valid')

const validator = new Validator()
const result = validator.check('010203XXXXXXXXXXX') // true
```
