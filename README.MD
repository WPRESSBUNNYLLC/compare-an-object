# compare-an-object

This is a function that can compare two arrays or objects in any order at their deepest level and return the deleted items, changed items, added items and whether they are both equal with high accuracy. (beta)

```
npm i compare-an-object
```

```js
const compare = require("./index");

var result = compare(a, b);
console.log(result);

//result.added = array of added values
//result.changed = array of changed values
//result.deleted = array of deleted values
//result.same is a boolean showing if they are the same or not
```

(Does not support WeakSet and WeakMap) Sets are converted to arrays. Maps converted to objects.
