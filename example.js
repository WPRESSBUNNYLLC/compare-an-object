const compare = require('./index');

var a = {a: [1,{a: { c: 2, b: 2}},2,3,[2,5,4,[4,5,6, { a: { v: 7}}]]]}
var b = {a: [{a: { b: 2, c: 2}},2,3,[2,5,4,[4,5,6, { a: { v: 7}}]]]}

// var a = [1,2,3,4,5, { a: [1,2,3,4, {b: { a: 1, b: 2}}] }];
// var b = [1,2,3,4,5, { a: [1,2,3,4, {b: { b: 2}}] }];

var result = compare(a,b); //maps must be formatted correctly or else error will be thrown

console.log(result);