// What is a Map and how is it different from an Object?

// Maps, like Objects, are data structures that allow you to store data in a form of pairs,
// which contains a unique key and a value mapped to that key.
// There is no duplicate pair stored.

// 1. Maps accept any type as keys
// You can use any type of data as the key. While in objects you can use
// integers or strings or symbols (but they will all be stringified),
// in Maps you could have Objects, Arrays or functions as keys.

// 2. Maps maintain the insertion order

// 3. Inheritance
// Map is an instance of Object

// There is only one way to create a Map
const newEmptyMap = new Map(); // Empty map
const map = new Map([1,2],[2,3]]); // map = {1=>2, 2=>3}

// retrieve data from a Map
// use .get(key)
map.get(1) // will return 2

// Add data
// will push a key value pair at the end
map.set(['some', 'stuff'])

// delete
// use .delete(key)
map.delete(1) // returns `true` if key/value pair was deleted successfully, else `false`

map.clear() // deletes all elements from map


// Summary
// The difference between a Map and an Object is that
// a map allows you to use any data as the key
// while in objects every key gets stringified
// With a map you could potentially have a function as a key, or an array, etc
// Additionally, maps maitain the insertion order (like arrays).

// Think about a map of your city. What do you use it for? To look something up quickly.
// And that's exactly what maps are for. Quick Lookups!
// Map is mainly used for fast searching and looking up data.
// Like anything else, Maps is a form of Object.



// Sets are very similar to maps and arrays. But they only store keys, not values
const aNewSet = new Set


// Reference
// This article about Objects vs Maps
// https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373
