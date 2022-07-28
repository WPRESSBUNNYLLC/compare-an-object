const compare = require('./index');

// var a = {a: [1,{a:{ c: 4, b: 4}},2,3,[2,5,4,[4,5,6,7,{ a: { v: 7}}]]]}
// var b = {a: [1,{a:{ c: 4, b: 1, h: 7}},2,3,[2,5,4,[4,5,6, { a: { v: 7}}]]]}

var a = { 
    a: 1, 
    b: [1,2,3,4,5,{a: { a: 23, b: 56 }}], 
    c: { 
        a: 44, 
        b: new Boolean(true), 
        d: { a: 32 }
    }
}

var b = { 
    a: 1, 
    b: [1,2,3,4, {a: { b: 56, a: 12 }}], 
    c: { 
        a: 44, 
        b: new Boolean(true), 
        d: { a: 32 }
    }
}

// var a = [1,2,3,4,5, { a: [1,2,3,4, {b: { a: 1, b: 2}}] }];
// var b = [1,2,3,4,5, { a: [1,2,3,4, {b: { b: 2}}] }];

var result = compare(a,b); //maps must be formatted correctly or else error will be thrown

console.log(result);

//2 wasnt deleted it was changed to an object