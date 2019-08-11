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
