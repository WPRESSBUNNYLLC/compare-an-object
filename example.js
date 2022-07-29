const compare = require('./index');


var a = { 
    a: 1, 
    b: [1,2,3,4,5,{a: { a: 23, b: 56 }}], 
    c: { 
        a: 44, 
        b: new Boolean(true), 
        d: { a: 32, b:98 }
    }
}

var b = { 
    a: 1, 
    b: [1,2,3,4,5,{a: { a: 23, b: 56 }}], 
    c: { 
        a: 44, 
        b: new Boolean(true),
        d: { a: 32, b:98 }
    }
}

var result;

try {
 result = compare(a,b);
} catch(err) { 
 console.log(err.message)
}

console.log(result);
// console.log(result);

