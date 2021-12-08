// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution with Array.reverse()

const useReverse = (str) => str.split("").reverse().join("")

// Solution with reduce
const useReduce = (str) => {
  return str.split("").reduce((reversedString, character) => character + reversedString)
  // this function can also be written with an initial value to start from
  // return str.split("").reduce((reversedString, character) => character + reversedString, '')
}

// Solution with for loop
const useForLoop = (str) => {
  let reversedString = ''
  for (i=0; i < str.length; i++) {
    reversedString = str.charAt(i) + reversedString
  }
  return reversedString
}

// ES6 for of
const useNewForLoopSyntax = (str) => {
  let reversedString = ''
  // for...of
  for (let character of str) {
    reversedString = character + reversedString
  }
  return reversedString
}


function reverse(str) {
  return useReduce(str)
}

function reverseWithArrayMethod(str) {
  return useReverse(str)
}

function reverseWithForLoop(str) {
  return useForLoop(str)
}

function reversewithNewForLoopSyntax(str) {
  return useNewForLoopSyntax(str)
}

module.exports = { reverse, reverseWithForLoop, reverseWithArrayMethod, reversewithNewForLoopSyntax};
