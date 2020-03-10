// What is `this` in JavaScript?
// `this` is a keyword that in JavaScript returns a preperty of the execution context - aka lexical scope (global, function or eval).
// Think of lexical scope as location in memory allocated for all local variables to that scope.
// In non–strict mode, is always a reference to an object and in strict mode can be any value.
// `this` refers to whatever object it is directly inside of
//

console.log(this)

const myObject = {
  num1: 5,
  num2: 2,
  c: function() {
    // `this` here refers to the object itself
    console.log('Should print myObject', this)
    console.log(myObject.num1 + myObject.num2 === this.num1 + this.num2 )
  }
}
myObject.c()

// Scope and Self
// this is the global scope
color = 'blue';

var myHair = {
    color: "red",
    logColor: function() {
        // this a common practice in JS to debug scope related issues
        var self = this;
        console.log("In logColor - this.color: " + this.color); // will print red
        console.log("In logColor - self.color: " + self.color); // will print red
        (function() {
            // `this` here has lost reference to the object
            // because now `this` refers to the global scope as we are inside an iife
            console.log("In IIFE - this.color: " + this.color); // will print blue
            // self here is a variable that was defined inside the parent function scope
            // so it will be available here and its value is the object myHair
            console.log("In IIFE - self.color: " + self.color); // will print red
        })();
    }
};

myHair.logColor();

// Some definitions:
// Scope defines the lifetime and visibility of a variable.
// Lexical scope is just a fancy name for compile-time scope
// The scope of a variable is defined by its location in the source code.
// Location means the place where you define your variable
// Lexical scope is the ability of the inner function to access the outer scope in which it is defined.
// Remember hoisting

// Global scope
// Variables defined outside any function, block, or module scope have global scope.
// Variables in global scope can be accessed from everywhere in the application.

// Function scope
// Function scope means that parameters and variables defined in a function
// are visible everywhere within the function, but are not visible outside of the function.
// Nested functions have access to variables in their outer scope

// Block Scope
// Block scope is defined with curly braces. It is separated by { and }.
// They can only be accessed in the block in which they are defined.

// Scope chain
// Every scope has a link to the parent scope.
// When a variable is used, JavaScript looks down the scope chain until it either
// finds the requested variable or until it reaches the global scope, which is the end of the scope chain.
