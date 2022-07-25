const compare = require('./index');

var a = {  zzz: 4, cmn: new Date(), ll: new Map([['coolbro'], ['awesome']]), a: 3, b: { c: 4, we: new Set(['cool'], ['awesome']), d: 55, e: 'string', f: { g: 5, h: [1,2, [1,2,6, [2,3,4], 5, 3], { i: 4, j: { k: 5, l: [2,3,4, {s: 4, f: { g: [123,{h: new Boolean(true), k:90, d: 78}]}}, {m: 4}, {ss: 00}], n: 66}, jj: new Number(1)}, 4,5], f: [345], o: { p: 5, q: 6} }}, zzzz: 33 }; 
var b = {  ll: new Map([['coolbro'], ['awesome']]), zzz: 4, cmn: new Date(), a: 3, b: { c: 4, d: 55, e: 'string', we: new Set(['cool'], ['awesome']), f: { g: 5, h: [1,2, [1,2,6, [2,3,4], 5, 3], { i: 4, j: { k: 5, l: [2,3,4, {s: 4, f: { g: [123,{d: 78, k: 90, h: new Boolean(true)}]}}, {ss: 00}, {m: 4}], n: 66}, jj: new Number(1)}, 4,5], f: [345], o: { p: 5, q: 6} }}, zzzz: 33 };

var result = compare(a,b);
console.log(result);
