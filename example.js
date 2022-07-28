const compare = require('./index');

var a = {a: [1,{a: { b: 2, c: 2}},2,3,[2,3,4,[4,5,6, { a: { v: 3}}]]]}
var b = {a: [1, {a: { b: 3, d: 3, v: 3}},2,3,[2,3,4,[4,5,6]]]}

var a = {a: 22}
var b = {a: 22}

var result = compare(a,b); //maps must be formatted correctly or else error will be thrown