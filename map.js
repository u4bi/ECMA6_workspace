let map = new Map();

// basic
map.set('foo', 123); // key : foo , value : 123
console.log(map.get('foo')); // getter foo

console.log(map.has('foo')); // is foo? true

map.delete('foo'); // delete foo

console.log(map.has('foo')); // is foo? false

map.set('a', true);
map.set('b', false);

console.log(map.size); // map size of 2

map.clear(); // clear map

console.log(map.size); // size 0

let goodMap = new Map([
    ['a', 'abc'],
    ['b', 1],
    ['c', 2],
    ['d', 3],
    ['e', 4.32],
    ['f', true]
]);

console.log(goodMap); // goodMap array setup

let godMap = new Map()
    .set('af', 1)
    .set('bf', 3)
    .set('cf', 23.2)
    .set('df', true);

console.log(godMap); // chainable map godMap array setup

let soulMap = new Map();

const GOOD_KEY = {};
const LOAD_KEY = {};
const GOD = {};

soulMap.set(GOOD_KEY, 'hello');
soulMap.set(LOAD_KEY, 'world');
soulMap.set(GOD, godMap);

console.log(soulMap.get(GOOD_KEY), soulMap.get(LOAD_KEY), soulMap.get(GOD));

console.log(soulMap);

for(let key of godMap.keys()) console.log(key);       // iterables for key
for(let value of godMap.values()) console.log(value); // iterables for value
for(let entry of godMap.entries()) console.log(entry, entry[0], entry[1]); // iterables for entry
for(let [good_key, good_value] of godMap.entries()) console.log(good_key, good_value); // iterables for entry key value
for(let [good_key, good_value] of godMap) console.log(good_key, good_value); // of godMap

let arr = [
    2,
    11,
    -1,
    23
];

console.log(...arr); // spread operator map
console.log(Math.max(...arr));

let brr = new Map([
    [1, 'a'],
    [2, 'b'],
    [3, 'c']
]);

console.log(...brr.keys()); // spread operator map keys


brr.forEach((val, key) => { // map foreach
    console.log(key ,val);
});


/*
    filtering mapping
*/
let array = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'bomb');

console.log('array : ', array);

let filterArray = new Map(
    [...array]
    .filter(([key, value]) => key < 3)
);

console.log('fillterArray : ', filterArray);

let fixArray = new Map(
    [...array]
    .filter(([key, value]) => [key * 2, 'fix-'+value])
);

console.log('fixArray : ', fixArray);

// map api
/**
 * map.get(key)
 * map.set(key, value)
 * map.has(key)
 * map.delete(key)
 * 
 * map.size
 * map.clear()
 * 
 * map.entries()
 * map.forEach((value, key, collection) =>
 * map.keys()
 * map.values()
 * 
 */