'use strict'
// What does 'use strict' aka strict mode do?
// It enforces stricter parsing and error handling in our code
// It helps us to "FAIL FAST, FAIL LOUDLY"

// In practice this is what strict mode does:

// - Prevents the use of global variables
// A global variable is a varible available everywhere in the scope
// It's defined without the use of `const`, `let` or `var`
try {
  name = 'Stefania'
  console.log('Here is the global variable `name`', name)
  console.log('I can see this because I am in non strict mode')
}
catch(err) {
  console.log('Error:', err.message)
  console.log('This happened because global variables are not available in strict mode!')
}


// - All parameters names for a function must be unique
// For example you cannot do:
// Note: This example will break! It will only work if you comment out 'use strict'

// function myFunction(a, a, b) {
//   console.log('In non strict mode I can print this', a, a, b)
// }
// myFunction(1, 2, 3);

// If you comment out 'use strict' you will see that this passes and that the function
// prints `2 2 3`, that's because in non strict mode the first argument is overriden by the second one
// Note! If you use a function expression using `const` the error happens also in non strict mode

// - Prevents deleting objects that should not be deleted
// For example, I try to delete a JS Object property

try {
  console.log('I am about to delete serious stuff', delete Object.prototype)
  // Note! If you are in non strict mode the object prototype still WON'T BE deleted
  // Because you can't delete properties of JS itself, this will fail and will return false
  // but you the error will only be thrown when you are in strict mode.
  // Therefore in non strict mode you will be able to see the log above.
}
catch(err) {
  console.log('Strict mode says:', err.message)
}
