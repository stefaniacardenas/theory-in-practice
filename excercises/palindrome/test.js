const palindrome = require('./index').palindrome;
const palindromeWithArrayMethods = require('./index').palindrome;
const palindromeHalfIteration = require('./index').palindrome;

test('palindrome function is defined', () => {
  expect(typeof palindrome).toEqual('function');
});

test('"aba" is a palindrome', () => {
  expect(palindrome('aba')).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
  expect(palindrome(' aba')).toBeFalsy();
});

test('"aba " is not a palindrome', () => {
  expect(palindrome('aba ')).toBeFalsy();
});

test('"greetings" is not a palindrome', () => {
  expect(palindrome('greetings')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
  expect(palindrome('1000000001')).toBeTruthy();
});

test('"Fish hsif" is not a palindrome', () => {
  expect(palindrome('Fish hsif')).toBeFalsy();
});

test('"pennep" a palindrome', () => {
  expect(palindrome('pennep')).toBeTruthy();
});

test('"saippuakivikauppias" a palindrome', () => {
  expect(palindromeHalfIteration("saippuakivikauppias")).toBeTruthy();
});

test('The word "palindrome" is not a palindrome', () => {
  expect(palindromeHalfIteration("palindrome")).toBeFalsy();
});

test('"aippuakivikauppia" a palindrome', () => {
  expect(palindromeWithArrayMethods("aippuakivikauppia")).toBeTruthy();
});

test('"hello" is not a palindrome', () => {
  expect(palindromeWithArrayMethods("hello")).toBeFalsy();
});
