const isValid = require('./index.js')

test('isValid returns true if the parenthesis are balanced', () => {
  expect(isValid("()")).toEqual(true);
});

test('isValid returns true if the parenthesis are balanced', () => {
  expect(isValid("()[]{}")).toEqual(true);
});

test('isValid returns false if the parenthesis are not balanced', () => {
  expect(isValid("(]")).toEqual(false);
});

test('isValid returns false if the parenthesis are not balanced', () => {
  expect(isValid("([)]")).toEqual(false);
});

test('isValid returns true if the parenthesis are balanced', () => {
  expect(isValid("{[]}")).toEqual(true);
});
