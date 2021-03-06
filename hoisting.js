// What is hoisting?
// Hoist: an act of raising or lifting something.
// In JavaScript you can call a variable before you even declare it. How does that happen?
// When the Javascript Interpreter compiles your code, all variable declarations are
// lifted to the top of the scope where they were declared, which can be the global scope or the function scope
// Important: Different keys will behave in a differnt way! So `var`, `let` and `const` variables behave differently

x = 5
// this will print 5 because the below function declaration will be moved at the top of the scope
console.log('I can print a variable before its declaration. X is', x)
// Important: all `var` variables are initialized as undefined when hoisted
var x;

// Using `let` or `const`
// Very Important: `let`and `const` variables are actually being hoisted!
// I've read on several articles online that `let` and `const` variables are not hoisted.
// This is wrong! `let` and `const` variables are actually being lifted to the top of their scope
// The reason why they cannot be fetched before its declaration is
// that, unlike `var`, they are not initialized with `undefined`
// until the line where you actually declare them, and only if there is no assignment immediately!

try {
  y = 5
  // this will throw an error
  console.log(y)
  let y; // this will be moved to the top of the scope in your compiled code
}
catch(error) {
  console.log('I cannot print a `let` or `const` before its declaration')
  console.log('Error:', error.message)
}

// Hoisting and functions
// Function hoisting works in the same way.
// In JavaScript if you declare a function using `var` or `const`, that's called a function expression
// Function expressions also get hoisted, the function name
// will be lifted to the top of the scope as a variable with no value.
// Spoiler: It won't work with `const`, that doesn't mean hoising is not happening

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

//Function expression with `const`
// Variables and functions that use `const` and `let`

try {
  // This will throw an error
  console.log('Calling a `const` function expression before its declaration', getProduct(4,4))
}
catch(error) {
  // Note! The error is different here compared to the one you got when using `var`
  // getProduct is not defined
  // This is because when const get hoisted there is no assignment, it's not even `undefined`
  console.log(error.message)
}

const getProduct = (num1, num2) => {
  return num1 * num2
}

// Function declarations
// Function declarations are function declared without using `var` or `const`
// They too get hoisted to the top of their scope

console.log('I can print a function declaration before. This is the result:', difference(100, 50))

// This is a function declaration
function difference(num1, num2) {
  return num1 - num2
}

// Remember: if you declare a variable inside a function, that variable will be
// hoisted at the top of the function, not at the top of the global scope!
// This is because of function scoping in JavaScript
// This is the scope for each key

// | var scope | const/let scope|
// |  global   |     global     |
// |  function |    function    |
// |           |    block       |

// This means that `const` and `let` are hoisted at the top of the block scope while `var` variables are NOT!
// Example, commented variables reflect hoisting behaviour

function getTotal() {
  // let total; // if you were to console log this, you would get a ReferenceError: Total is not defined
  // var multiplier; // if you were to console log this, you would get `undefined`
  let total = 0;// this will be hoisted here, at the top of the function

  for(var i = 0; i < 10; i++) {
    //let valueToAdd;
    let valueToAdd = i; // this will be hoisted here, at the top of the block
    var multiplier = 2; // this will be hoisted at the top of the function!
    total += valueToAdd * multiplier;
  }

  return total;
}

console.log(getTotal());

// More examples. Look at this code:

var num = 50;

function logNumber() {
    // You would expect this to print 50? Wrong. It's undefined
    console.log('### This example uses `var`')
    console.log('Print an existing variable re-declared in function scope, will return', num);
    // Because you are declaring var num inside this function scope, the interpreter
    // would look for the variable hoisting inside this function's scope
    var num = 100;
    // if you delete this the console.log would print 50 because
    // there is no hoisted variable inside of this function scope.
    // So it would look for it in the parent's scope
}

logNumber();

// Let's try with `let`
let name = 'Stefania';

function logName() {
    try {
      console.log('### This example uses `let`')
      // trying to do this, will return an error
      console.log('Trying to print an existing variable re-declared in function scope, will return', name);
      // this is why ES6 favours the use of `const` and `let` instead of `var`
      // Nonetheless, it's important to know how `var` works comapred to the new ES6 syntax
      let name = 'Lucy';
    }
    catch(err) {
      // name is not defined
      console.log(err.message)
    }
}
logName();

// Exercise. What would be printed out?
var x = 10; // I'm assigning a global variable x with a value of 10

function y() {
    x = 100; // here I want to override x
    return; // watch out there is a return
    function x() {} // but hey,there is a function declaration here,
    // so x is hoisted at the top of this function scope
    // it's function scoped, then the value 100 is assigned.
    // But this is all inside the function scope. Outside x is still 10
}

y();

console.log(x); // this returns 10
// One thing to keep in mind is that function declarations are hoisted differently than function expressions.
// when a function is written as a function expression

// Function expressions vs function declaration
// Let's take this example where we have a function expression like
var myFunctionExpression = function() {}

// the variable myFunctionExpression is hoisted and initialized but it is not defined
// so it receives the initial value of undefined.
// This is what happens under the hood

// var myFunctionExpression;
// console.log(myFunctionExpression) // returns undefined
// myFunctionExpression() // TypeError: myFunctionExpression is not a function
// myFunctionExpression = function() {};


// when function declarations are hoisted however, they are initialized and defined
// and they can be invoked before they are actually declared in the body of the code.

y(); // Outputs: "Definition hoisted!"

// x(); // TypeError: undefined is not a function

function y() {
  console.log("Definition hoisted!");
}

var x = function () {
  console.log("Definition not hoisted!");
};



// you can also see the difference if you log out the typeof in each case:

var x = 10;

function y() {
    console.log(typeof x);  // undefined
    x = 100;
    console.log(typeof x);  // number
    return;
    var x = function() {}
}

// VS

var x = 10;

function y() {
    console.log(typeof x);  // function
    x = 100;
    console.log(typeof x);  // number
    return;
    function x() {}
}


// ------------------------------------------------------------
// Some notes about the JS interpreter:
// When you execute your JavaScript code, the interpreter goes through the code twice.
// The first run through the code is where it does a safety check
// and small optimizations of your code.
// It will make sure that the syntax is right, if there are any calls to eval or with, etc.
// Then, it optimizes the code as best as it can to ensure better performance when it is executed.
// This is also where hoisting occurs (more on this soon). This is also referred to as the compile run.
// The second run is where it actually executes your code by going through it line by line, doing the assignments, calling the functions, and so on.
// Source re JS Interpreter is from: https://www.codingame.com/playgrounds/7974/understanding-hoisting-in-javascript
