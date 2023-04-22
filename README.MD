# compare-an-object

This is a function that can compare two objects in any order at their deepest level and return the deleted items, changed items, added items

```
npm i compare-an-object
```

```js
const compare = require("compare-an-object");

var result;

try {
  result = compare({ a: 4 }, { a: 4, b: 5 }); // can take [],[] or {},{}
} catch (err) {
  result = err.message;
}

if (typeof result === "object") {
  //result.added = array of added values
  //result.changed = array of changed values
  //result.deleted = array of deleted values
  //result.same is a boolean showing if they are the same or not
  //result.error is a boolean showing if there was an error in execution
  //result.error_message is the error message associated with the error
} else {
  //get 'result' err.message string
}
```

(Does not support WeakSet and WeakMap as enumerable objects (accepts as values)) Sets are converted to arrays. Maps converted to objects.
