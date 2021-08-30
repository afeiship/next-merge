# next-merge
> Recursively merges own enumerable properties of the source object(s).

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-merge
```

## usage
```js
import '@jswork/next-merge';

const object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};
 
const other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};
 
const res = nx.merge(object, other);
conosle.log(res);
conosle.log(res === object);

// { a: [ { b: 2, c: 3 }, { d: 4, e: 5 } ] }
// true
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-merge/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-merge
[version-url]: https://npmjs.org/package/@jswork/next-merge

[license-image]: https://img.shields.io/npm/l/@jswork/next-merge
[license-url]: https://github.com/afeiship/next-merge/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-merge
[size-url]: https://github.com/afeiship/next-merge/blob/master/dist/next-merge.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-merge
[download-url]: https://www.npmjs.com/package/@jswork/next-merge
