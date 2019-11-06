// This is a curried function
// Currying a function is the technique of
// translating ONE function that takes MULTIPLE arguments
// into a SEQUENCE of functions that each take a single argument
// A function that retuns a fuction that returns a fuction that returns the result


function addThreeValues(num1, num2, num3) {
  const result = num1 + num2 + num3
  console.log('this is the result of addThreeValues ' + result)
  return result
}

addThreeValues(10, 20, 30); // returns 60

// In its curried form will be translated like this
function tripleAdd(num1) {
  console.log('running tripleAdd')
  console.log('function one takes one argument ' + num1)
  return function(num2) {
    console.log('function two takes one argument ' + num2)
    return function(num3) {
      console.log('function three takes one argument ' + num3)
      const result = num1 + num2 + num3;
      console.log('Now we add all numbers and return the sum' + result)
      return result
    }
  }
}

tripleAdd(10)(20)(30); // returns 60

// A curried can take multiple arguments and still be considered curried
// as long as it is a sequence of functions

// Example of curried function with multiple arguments
function quadrupleAdd(num1) {
  console.log('Running quadrupleAdd')
  return function(num2) {
    return function(num3, num4) {
      const result = num1 + num2 + num3 + num4;
      console.log('Now we add all numbers and return the sum' + result)
      return result
    }
  }
}

quadrupleAdd(10)(20)(30, 40) // returns 100


function getProduct(num1) {
  return function(num2) {
    const product = num1 * num2
    console.log('getProduct result', product)
    return product
  }
}

getProduct(5)(5);


// function getTravelTime(distance, speed) {
//   return distance / speed;
// }

function getTravelTime(distance) {
  return function(speed) {
    return distance / speed;
  };
}

const travelTimeBosNyc = getTravelTime(400);
const travelTimeMiamiAtlanta = getTravelTime(600);
console.log(travelTimeBosNyc(100));
