// Comparison operators
// What's the difference between `==` and `===`?

// == (equals)
// Test for abstract equality
// Does NOT test for data types

console.log('A number and a string CAN be equal when using `==`', 5 == '5'); //retuns true

// When using `==` this is what happens under the hood:
// 1. comparing `number` vs `string`
// - strings converted into a number
// -comparison is made
// 2. comparing bool vs !bool
// - !bool is converted to bool
// - comparison is made
// 3. comparing Object against Primitive data type (string, number)
// - Object converted to Primitive
// - comparison is made
// More about Primitives in the following paragraph

// === (strict equals)
// Tests for strict equality
// DOES test for data types
// they both must be of the same type, ie string vs string, etc

console.log('A number and a string CANNOT be equal when using `===`', 5 === '5'); //retuns false

// What happens when you compare two objects?
const user1 = {
  name: 'Jordan',
  age: 28,
};

const user2 = {
  name: 'Jordan',
  age: 28,
};

console.log('two objects that contain the same data. Are they equals?', user1 == user2); // will return false
console.log('two objects that contain the same data. Are they equals?', user1 === user2); // will return false
// user1 and user2 hold the same data yet they are not equals
// this is because when you assign an object to a variable, the object is stored as reference
// you are storing a reference to a specific object in the memory.
// so user1 and user2 have two different references

// if we create a new object and we assign user2 to it
// the new object will hold the reference for user2 so they will be equal
const user3 = user2
console.log('user3 holds reference of user2. Are they equals?', user2 == user3); // will return true
console.log('user3 holds reference of user2. Are they equals?', user2 === user3); // will return true

// If you want to compare that the data inside the objects is the same just use JSON.stringify
console.log('comparing stringified objects. Are they equals?', JSON.stringify(user1) === JSON.stringify(user2));


// This works with arrays too!
console.log('comparing stringified arrays. Are they equals?',JSON.stringify([]) === JSON.stringify([]));
console.log('comparing two empty arrays. Are they equals?',[] === [])

// if I update the value of name in user3 and then compare if user2 and user3 are equal
user3.name = 'Stef'
console.log('user3 holds reference of user2. Are they equals?', user2 === user3); // this still returns structures
// if you console.log the value of user2 and user3 you will see that the name has been set to 'Stef' for both Objects
// this is because they are the same object assigned to different variable names
console.log(user2, user3)
