# JS Data Structures Cheatsheet (LeetCode)

## Array

```js
arr.length                     // size
arr.push(x)                    // add to end         O(1)
arr.pop()                      // remove from end     O(1)
arr.shift()                    // remove from front   O(n)
arr.unshift(x)                 // add to front        O(n)
arr.indexOf(x)                 // first index of x    O(n)
arr.includes(x)                // boolean             O(n)
arr.slice(i, j)                // copy [i, j)         O(n)
arr.splice(i, n, ...items)     // remove/insert        O(n)
arr.reverse()                  // in place            O(n)
arr.sort((a,b) => a - b)       // in place            O(n log n)
arr.join(sep)                  // → string            O(n)
arr.flat(depth)                // flatten nested      O(n)
arr.fill(val, i, j)            // fill [i, j)         O(n)
arr.findIndex(fn)              // first index match   O(n)
arr.find(fn)                   // first value match   O(n)
arr.every(fn)                  // all match?          O(n)
arr.some(fn)                   // any match?          O(n)
arr.filter(fn)                 // new filtered array  O(n)
arr.map(fn)                    // new mapped array    O(n)
arr.reduce((acc,x) => ..., 0)  // reduce to value     O(n)
arr.forEach(fn)                // iterate             O(n)
Array.from({length: n}, fn)    // create array        O(n)
Array.isArray(x)               // boolean
```

## String

```js
str.length                     // size
str[i]                         // char at i           O(1)
str.charAt(i)                  // char at i           O(1)
str.charCodeAt(i)              // char code at i      O(1)
String.fromCharCode(n)         // code → char         O(1)
str.indexOf(sub)               // first index         O(n)
str.lastIndexOf(sub)           // last index          O(n)
str.includes(sub)              // boolean             O(n)
str.startsWith(sub)            // boolean             O(n)
str.endsWith(sub)              // boolean             O(n)
str.slice(i, j)                // substring [i, j)    O(n)
str.substring(i, j)            // like slice, no neg  O(n)
str.split(sep)                 // → array             O(n)
str.replace(a, b)              // first match         O(n)
str.replaceAll(a, b)           // all matches         O(n)
str.toUpperCase()              // → string            O(n)
str.toLowerCase()              // → string            O(n)
str.trim()                     // strip whitespace    O(n)
str.repeat(n)                  // repeat n times      O(n)
str.padStart(n, ch)            // pad left            O(n)
str.padEnd(n, ch)              // pad right           O(n)
str.match(regex)               // regex match         O(n)

// strings are immutable — convert to array to mutate:
const arr = str.split('');
arr[i] = 'x';
const newStr = arr.join('');
```

## Set

```js
const s = new Set()
const s = new Set([1,2,3])     // init from array

s.add(x)                       // add value           O(1)
s.delete(x)                    // remove value        O(1)
s.has(x)                       // boolean             O(1)
s.size                         // number of elements
s.clear()                      // remove all
s.forEach(fn)                  // iterate
[...s]                         // → array
```

## Map

```js
const m = new Map()
const m = new Map([['a',1]])   // init from pairs

m.set(key, val)                // add/update          O(1)
m.get(key)                     // get value           O(1)
m.has(key)                     // boolean             O(1)
m.delete(key)                  // remove key          O(1)
m.size                         // number of pairs
m.clear()                      // remove all
m.keys()                       // iterator of keys
m.values()                     // iterator of values
m.entries()                    // iterator of [k,v]
m.forEach((val, key) => ...)   // iterate

// Map vs plain object:
// Map keys can be any type (objects, numbers, etc.)
// plain object keys are always strings
```

## Object (plain hash map)

```js
const obj = {}
obj[key] = val                 // set
obj[key]                       // get
delete obj[key]                // remove
key in obj                     // boolean
obj.hasOwnProperty(key)        // boolean (safer)
Object.keys(obj)               // array of keys
Object.values(obj)             // array of values
Object.entries(obj)            // array of [k,v]

// common pattern for frequency map:
const freq = {};
for (const ch of str) freq[ch] = (freq[ch] || 0) + 1;
```

## Stack (use Array)

```js
const stack = []
stack.push(x)                  // push              O(1)
stack.pop()                    // pop               O(1)
stack[stack.length - 1]        // peek              O(1)
stack.length === 0             // isEmpty
```

## Queue (use Array — or doubly linked list for O(1) shift)

```js
const queue = []
queue.push(x)                  // enqueue           O(1)
queue.shift()                  // dequeue           O(n) ← slow for large inputs
queue[0]                       // peek              O(1)
queue.length === 0             // isEmpty

// For performance-critical BFS, use a pointer instead of shift:
let head = 0;
while (head < queue.length) {
    const node = queue[head++];
    // process node
}
```

## Math

```js
Math.max(a, b)
Math.min(a, b)
Math.abs(x)
Math.floor(x)
Math.ceil(x)
Math.round(x)
Math.trunc(x)                  // truncate toward zero
Math.sqrt(x)
Math.pow(base, exp)            // prefer ** operator
Math.log(x)                    // natural log
Math.log2(x)
Math.log10(x)
Math.PI
Infinity                       // useful for min/max init
-Infinity

// integer division:
Math.trunc(a / b)              // or a / b | 0
```

## Bitwise

```js
n & 1                          // check if odd (1) or even (0)
n >> 1                         // divide by 2 (signed)
n >>> 1                        // divide by 2 (unsigned)
n << 1                         // multiply by 2
1 << k                         // 2^k
(1 << k) - 1                   // k ones:  0...01...1
n & (n - 1)                    // clear lowest set bit
n | (1 << k)                   // set bit k
n & ~(1 << k)                  // clear bit k
n ^ (1 << k)                   // toggle bit k
n >>> 0                        // force unsigned 32-bit int
```

## Number

```js
Number.isInteger(x)
Number.isFinite(x)
Number.isNaN(x)
parseInt(str, 10)              // string → int (always pass radix 10)
parseFloat(str)                // string → float
x.toString(2)                  // int → binary string
x.toString(16)                 // int → hex string
Number.MAX_SAFE_INTEGER        // 2^53 - 1
Number.MIN_SAFE_INTEGER        // -(2^53 - 1)
```
