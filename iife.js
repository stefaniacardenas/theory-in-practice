// An iife is a function that is invoked right when the function is declared
// It stands for Immediately-Invoked function expression

const $ = 'I am global';

(function myPrivateFuntion($) {
  console.log('This function was invoked immediately')
  // One of the reasons why you might want to use an IIFE is to preserve a private scope
  // in order to make sure you are not overriding/using a global variables if not intended
  $ = 'I am private'
  console.log('inside of iife',$)
})($);

console.log('on global scope my value is unchanged ',$)

// I don't need to call the iifee anywhere because we are already executing it when
// wrapping the fuction definition in between (function(){...})();

// More example from this jsbin here
// https://jsbin.com/puqenak/1/edit?html,js,output
