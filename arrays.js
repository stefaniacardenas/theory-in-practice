// using the array constructor

var arr1 = [];
var arr2 = new Array(50); // passing a single number will generate an empty array of that length
var arr3 = new Array(1, 2, "three", 4, "five");
var arr4 = new Array([1, 2, 3, 4, 5]);

console.log('arr1: ', arr1); // returns []
console.log('arr2: ', arr2); // it's an empty array with length 50 [empty × 50]
console.log('arr3: ', arr3); // return [1, 2, "three", 4, "five"]
console.log('arr4: ', arr4); // returns a nested array [[1, 2, 3, 4, 5]]


console.log('Looking for index of number 30', [10, 20, 30, 40, 50].indexOf(30));
console.log('Looking for index of letter o','hello world'.indexOf('o')); // this is the string indexOf method, not the array one
// this returns -1 because the object passed in indexOf is not the same
// as the one in the array (because of object reference)
console.log("Looking for index of { name: 'Kent' }", [{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' })); // returns -1, can't find the element
// How to solve this? assign the object to a variable
const name = { name: 'Kent' }
console.log("Looking for index of { name: 'Kent' }, referencing the same obj",[{ name: 'Pam' }, name].indexOf(name)); //returns 1

// here we have the same problem that we had earlier with objects
// Arrays are also stored as reference therefore [2] !== [2] unless they are
// referencing the same piece of data
console.log('Looking for index of [2]',[[1], [2], [3], [4]].indexOf([2])); // returns -1

// How do we solve this? In the same way we did with objects
const myArray = [2]
console.log('Looking for index of myArray', [[1], myArray, [3], [4]].indexOf(myArray)); // will return 1

// it works even if you create another variable that points at the same object
const myNewArray = myArray
console.log('Looking for index of myNewArray',[[1], [2], [3], myNewArray].indexOf(myNewArray)); // will return 3


// Important! You can use some array methods on strings.
// How? By accessing the array method then use call
// For example
const data1 = 'Jordan Smith'
const data2 = [].filter.call(data1, (element, index) => index > 6)
console.log('Using array methods on strings. Filter,', data2)

// You can only use 'read-only' methods, you cannot use methods that manipulate the string
// So you can use `filter`, `forEach`, `map`, `some`, `every`, etc.
// You cannot use `push`, `pop`, `splice`, `shift`, `reverse`, etc.
