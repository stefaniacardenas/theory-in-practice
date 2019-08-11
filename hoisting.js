// What is hoisting?
// Hoist: an act of raising or lifting something.
// In JavaScript you can call a variable before you even declare it.
// How does that happen? See the example below
// When the Javascript Interpreter compiles your code, all variable declarations using `var` are
// lifted to the top of the scope, which can be the global scope or the function scope
// if the variable was declared inside of a function

x = 5
// this will print 5 because the below function declaration will be moved at the top of the scope
console.log(x)
// Important: `const` and `let` variables are not hoisted. It means that they won't be declared at the top of the scope
// Therefore hoising will only work with `var`
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
