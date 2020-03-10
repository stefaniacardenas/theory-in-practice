// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split('').reduce((reversed, character) => character + reversed, '') === str
}

function palindromeWithArrayMethods(str) {
  return str.split('').reverse().join('') === str
}

function palindromeHalfIteration(str) {
  // this is by far the fastest solution
   for (let i = 0; i < str.length / 2; i++) {
      console.log('i',i, 'str[i]', str[i], 'str[str.length - i - 1]', str[str.length - i - 1])
       if (str[i] !== str[str.length - i - 1]) {
           return false;
       }
   }
   return true;
}

module.exports = {
  palindrome,
  palindromeWithArrayMethods,
  palindromeHalfIteration
};
