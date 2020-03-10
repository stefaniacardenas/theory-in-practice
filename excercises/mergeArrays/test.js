const mergeSortedArrays = require('./index');

const a = [1,2,3,4]
const b = [4,5,6]
const c = []

test('mergeArrays function exists', () => {
  expect(typeof mergeSortedArrays).toEqual('function');
});

test('Should merge two arrays into one', () => {
  expect(mergeSortedArrays(a,b)).toEqual([1,2,3,4,4,5,6]);
});

test('Should return the first array if the second one is empty', () => {
  expect(mergeSortedArrays(a, c)).toEqual([1,2,3,4]);
});

test('Should return the second array if the first one is empty', () => {
  expect(mergeSortedArrays(c, b)).toEqual([4,5,6]);
});

test('Should merge two arrays into one', () => {
  expect(mergeSortedArrays([1,2,4],[1,3,4])).toEqual([1,1,2,3,4,4]);
});
