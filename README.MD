# compare-an-object

This is a function that can compare two arrays or objects in any order at their deepest level and return the deleted items, changed items, added items and whether they are both equal with high accuracy.

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

console.log(result);

//result.added = array of added values
//result.changed = array of changed values
//result.deleted = array of deleted values
//result.same is a boolean showing if they are the same or not
//...
//error message
```

# Returned Parameters

path: The path you are currently in and their type (array or object)
<br>
<br>
key: The key you are currently pointing to
<br>
<br>
type: the type of the value for that key
<br>
<br>
value: the value at that key
<br>
<br>
index: if the value is an array value, the index of the array.. if not an array value, -1
<br>
<br>
index_set: [123,[2,3,4,[3,4,5]]], tracks how many levels at each index you are inside of an array - (1,3) for value 5
<br>
<br>
l_deep: tracks how many levels you are inside of an array
<br>
<br>
currently_inside_of: what you are currently inside of (object or array)
<br>
<br>
the returned 'result.changed' array is an array of objects containing 'a' the base object and 'b' the changed object as JSON string you can print or parse
<br>
<br>
The result.deleted and result.added arrays contain single JSON string which you can print or parse

# Additional

(Does not support WeakSet and WeakMap) Sets are converted to arrays. Maps converted to objects.
