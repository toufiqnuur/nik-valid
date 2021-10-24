# Nik Valid
[![npm version](https://img.shields.io/npm/v/nik-valid.svg?style=flat-square)](https://www.npmjs.org/package/nik-valid)
[![install size](https://packagephobia.now.sh/badge?p=nik-valid)](https://packagephobia.now.sh/result?p=nik-valid)
[![npm downloads](https://img.shields.io/npm/dm/nik-valid.svg?style=flat-square)](http://npm-stat.com/charts.html?package=nik-valid)

Javascript client side NIK Validator.

### Installation
`npm install nik-valid`

### How to use
```js
const Validator = require('nik-valid')

const validator = new Validator()
const result = validator.check('010203XXXXXXXXXXX') // true
```
