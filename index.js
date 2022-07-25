/*
 turning deep objects into arrays and comparing.
 recursing on objects and arrays
 pushing path, key, type and value
 for should_pop, making sure I am in an object when popping so I can compare in n^2
 feedback email: johneatman446@gmail.com
 please send an email if wrong
*/ 

var components = [];
var key_set = [];

function compare(av, rv) { 

 if(
  typeof(av) !== 'object' || 
  typeof(rv) !== 'object'
 ) { 
  return false;
 }

 if(
  av === null || 
  rv === null
 ) { 
  return false;
 }

 if(
  (Array.isArray(av) === true && Array.isArray(rv) === false) || 
  (Array.isArray(av) === false && Array.isArray(rv) === true)
 ) { 
  return false;
 } 

 if(
  Array.isArray(av) === true &&
  Array.isArray(rv) === true
 ) { 

  av = { 
   array: av
  }

  rv = { 
   array: rv
  }

 }

 if(
  `${av}` === "[object WeakMap]" || 
  `${av}` === "[object WeakSet]" ||
  `${rv}` === "[object WeakMap]" ||
  `${rv}` === "[object WeakSet]"
  ) { 
    return false;
  }

 if(`${av}` === "[object Map]") { 
  av = Object.fromEntries(av);
 } else if(`${av}` === "[object Set]") { 
  av = Object.assign({}, ...Array.from(av, value => ({ [value]: 'not assigned' })));
 }

 if(`${rv}` === "[object Map]") { 
  rv = Object.fromEntries(rv);
 } else if(`${rv}` === "[object Set]") { 
  rv = Object.assign({}, ...Array.from(rv, value => ({ [value]: 'not assigned' })));
 }

 var avkeys = Object.keys(av);
 var rvkeys = Object.keys(rv);

 if(avkeys.length !== rvkeys.length) { 
  return false;
 }

 const compare_av = deep_check_object(av, avkeys, true); components = []; key_set = [];
 const compare_rv = deep_check_object(rv, rvkeys, true); components = []; key_set = [];

 if(compare_av.length !== compare_rv.length) { 
  return false; 
 }

 for(let i = 0; i < compare_av.length; i++) { 
  var i_found = false;
  for(let j = 0; j < compare_av.length; j++) { 
   if(compare_av[i] === compare_rv[j]) { 
    i_found = true;
    break;
   }
  }
  if(i_found === false) { 
   return false;
  }
 }

 return true;

}

function deep_check_object(obj, keys, should_pop) { 

 if(
  `${obj}` === "[object WeakMap]" || 
  `${obj}` === "[object WeakSet]"
 ) { 
   throw new Error('object must not contain weakmap or weakset');
 }

 if(`${obj}` === "[object Map]") { 
  obj = Object.fromEntries(obj);
  keys = Object.keys(obj);
 } else if(`${obj}` === "[object Set]") { 
  obj = Object.assign({}, ...Array.from(obj, value => ({ [value]: 'not assigned' })));
  keys = Object.keys(obj);
 }

 keys.forEach((key, index) => {

  if(
   typeof(obj[key]) === 'object' && 
   Array.isArray(obj[key]) === false && 
   obj[key] !== null
  ) {
   `${obj[key]}` === "[object Object]" ? key_set.push(`(${key},object)`) : '';
   components.push(`{ path: "[${key_set}]", key: "${key}", type: "${typeof(obj[key])}", value: "${obj[key]}" }`);
   deep_check_object(obj[key], Object.keys(obj[key]), `${obj[key]}` === "[object Object]" ? true : false);
  }

  else if(
   typeof(obj[key]) === 'object' && 
   Array.isArray(obj[key]) === true
  ) {
   key_set.push(`(${key},array)`);
   components.push(`{ path: "[${key_set}]", key: "${key}", type: "array", value: "${obj[key]}" }`);
   deep_check_array(key, obj[key], true);
  }

  else { 
   components.push(`{ path: "[${key_set}]", key: "${key}", type: "${typeof(obj[key])}", value: "${typeof(obj[key]) === 'function' ? `${obj[key]}`.replace(/\s+/g, '').toLowerCase() : `${obj[key]}`}" }`);
  }

 });
 
 if(should_pop === true) {
  key_set.pop();
 }
 
 return components;

}

function deep_check_array(key, arr, should_pop) { 
 
 for(let i = 0; i < arr.length; i++) { 

  if(
   typeof(arr[i]) === 'object' && 
   Array.isArray(arr[i]) === false && 
   arr[i] !== null
  ) { 
   components.push(`{ path: "[${key_set}]", key: "${key}", type: "${typeof(arr[i])}", value: "${arr[i]}" }`);
   deep_check_object(arr[i], Object.keys(arr[i]), false);
  }

  else if(
   typeof(arr[i]) === 'object' && 
   Array.isArray(arr[i]) === true
  ) {
   components.push(`{ path: "[${key_set}]", key: "${key}", type: "array", value: "${arr[i]}" }`);
   deep_check_array(key, arr[i], false);
  }

  else { 
   components.push(`{ path: "[${key_set}]", key: "${key}", type: "${typeof(arr[i])}", value: "${typeof(arr[i]) === 'function' ? `${arr[i]}`.replace(/\s+/g, '').toLowerCase() : `${arr[i]}`}" }`);
  }

 }

 if(should_pop === true) { 
  key_set.pop();
 }

} 

module.exports = compare;