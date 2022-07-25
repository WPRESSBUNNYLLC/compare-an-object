# compare-an-object

This is a function that can compare two arrays or objects. Pass in an object in any order or array and will return true or false. Does not suupport WeakSet and WeakMap (will throw an error). Converts map and set to object. See example for test.

```
npm i compare-an-object
```

```js
var compare = require("compare-an-object");
var a = {
  a: 3,
  zzz: 4,
  b: {
    c: 4,
    d: 55,
    e: "string",
    f: {
      g: 5,
      h: [
        1,
        2,
        [1, 2, 6, [2, 3, 4], 5, 3],
        {
          i: 4,
          j: { k: 5, l: [2, 3, 4, { m: 4 }, { s: 4 }, { ss: 00 }], n: 66 },
        },
        4,
        5,
      ],
      f: [345],
      o: { q: 6, p: 5 },
    },
  },
  zzzz: 33,
};
var b = {
  zzz: 4,
  a: 3,
  b: {
    c: 4,
    d: 55,
    e: "string",
    f: {
      g: 5,
      h: [
        1,
        2,
        [1, 2, 6, [2, 3, 4], 5, 3],
        {
          i: 4,
          j: { k: 5, l: [2, 3, 4, { s: 4 }, { m: 4 }, { ss: 00 }], n: 66 },
        },
        4,
        5,
      ],
      f: [345],
      o: { p: 5, q: 6 },
    },
  },
  zzzz: 33,
};

var test = compare(a, b);
//returns true
```
