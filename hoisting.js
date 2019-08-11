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
// Function expressions with `var` also get hoisted, that the function name
// will be lifted to the top of the scope as a variable with no value.
// Spoiler: It won't work with `const`

try {
  // At this point addNumbers is just a variable and it's undefined. It's not a function yet.
  // So this will throw an error
  console.log('Calling a `var` function expression before its declaration', addNumbers(2,2))
}
catch(error) {
  //addNumbers is not a function
  console.log(error.message)
}

// this will go to the top of the scope as:
// var addNumbers;
var addNumbers = function(num1, num2) {
  return num1 + num2
}

//Function expression with `const` - Hoisting won't work

try {
  // This will throw an error
  console.log('Calling a `const` function expression before its declaration', getProduct(4,4))
}
catch(error) {
  // Note! The error is different here
  // getProduct is not defined
  // This is because as said earlier hoisting does not work with `const`
  console.log(error.message)
}

// this won't be hoisted because you can't just declare a const variable like this
// const getProduct;
// If you tried that you would get a `Missing initializer in const declaration` error
const getProduct = (num1, num2) => {
  return num1 * num2
}

// Function declarations
// This is a function declaration

console.log('I can print a function declaration before. This is the result:', difference(100, 50))

// In this case the whole function is hoisted at the top of the scope
function difference(num1, num2) {
  return num1 - num2
}

// Remember: if you declare a variable inside a function, that variable will be
// hoisted at the top of the function, not at the top of the global scope!
// This is because of function scoping in JavaScript
