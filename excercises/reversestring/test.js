const {reverse, reverseWithForLoop, reverseWithArrayMethod, reversewithNewForLoopSyntax} = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});

test("Reverse reverses a string 'apple'", () => {
  expect(reverse('apple')).toEqual('elppa');
});

test("Reverse reverses a string 'Hello, World!'", () => {
  expect(reverse('Hello, World!')).toEqual('!dlroW ,olleH');
});

test("Test additional solutions", () => {
  expect(reverseWithArrayMethod('Hello, World!')).toEqual('!dlroW ,olleH');
  expect(reverseWithForLoop('Hello, World!')).toEqual('!dlroW ,olleH');
  expect(reversewithNewForLoopSyntax('Hello, World!')).toEqual('!dlroW ,olleH');
})
