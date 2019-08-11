// What is hoisting?
// Hoist: an act of raising or lifting something.
// In JavaScript you can call a variable before you even declare it.
// How does that happen? See the example below
// When the Javascript Interpreter compiles your code, all variable declarations using `var` are
// lifted to the top of the scope, which can be the global scope or the function scope
// if the variable was declared inside of a function

x = 5
// this will print 5 because the below function declaration will be moved at the top of the scope
console.log('I can print a variable before its declaration. X is', x)
var x;


// Some notes about the JS interpreter:
// When you execute your JavaScript code, the interpreter goes through the code twice.
// The first run through the code is where it does a safety check
// and small optimizations of your code.
// It will make sure that the syntax is right, if there are any calls to eval or with, etc.
// Then, it optimizes the code as best as it can to ensure better performance when it is executed.
// This is also where hoisting occurs (more on this soon). This is also referred to as the compile run.
// The second run is where it actually executes your code by going through it line by line, doing the assignments, calling the functions, and so on.
// Source: https://www.codingame.com/playgrounds/7974/understanding-hoisting-in-javascript

// `const` and `let`
// Important: `const` and `let` variables are not hoisted. It means that they won't be declared at the top of the scope
// Therefore hoising will only work with `var`

try {
  y = 5
  // this will throw an error
  console.log(y)
  let y;
}
catch(error) {
  console.log('Hoisting does not work with `let` or `const`')
  console.log('Error:', error.message)
}

// Hoisting and functions
// Function hoisting works in the same way.
// In JavaScript if you declare a function using `var` or `const`, that's called a function expression
// Function expressions also get hoisted, it means that the function name
// will be lifted to the top of the scope as a variable with no value

try {
  // At this point addNumbers is just a variable and it's undefined. It's not a function yet.
  // So this will throw an error
  console.log('Trying to run a function expression before its declaration', addNumbers(2,2))
}
catch(error) {
  console.log(error.message)
}

try {
  // Same here.
  // This will throw an error
  console.log('Trying to run a function expression before its declaration', getProduct(4,4))
}
catch(error) {
  console.log(error.message)
}

// this will go to the top of the scope as:
// var addNumbers;
var addNumbers = function(num1, num2) {
  return num1 + num2
}

// this will go to the top of the scope as:
// const getProduct;
const getProduct = (num1, num2) => {
  return num1 * num2
}
