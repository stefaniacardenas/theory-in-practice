console.log(typeof null); // return "object"
console.log(typeof undefined); // return undefined
console.log(typeof {}); // return "object"

// Attention here! typeof [] returns "object" for array
console.log(typeof []); // return "object"
// So how do you find if an array is an array?
console.log(Array.isArray([])); // return true
console.log([] instanceof Array); // return true
