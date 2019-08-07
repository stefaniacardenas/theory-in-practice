// This is a curried function
// Currying a function is the technique of
// translating ONE function that takes MULTIPLE arguments
// into a SEQUENCE of functions that each take a single argument
// A function that retuns a fuction that returns a fuction that returns the result


function addThreeValues(num1, num2, num3) {
  return num1 + num2 + num3;
}

addThreeValues(10, 20, 30); // returns 60

// In its curried form will be translated like this
function tripleAdd(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3;
    }
  }
}

tripleAdd(10)(20)(30); // returns 60

// A curried can take multiple arguments and still be considered curried
// as long as it is a sequence of functions

// Example of curried function with multiple arguments
function quadrupleAdd(num1) {
  return function(num2) {
    return function(num3, num4) {
      return num1 + num2 + num3 + num4;
    }
  }
}

quadrupleAdd(10)(20)(30, 40); // returns 100
