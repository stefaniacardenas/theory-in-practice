const myModule = require('./index.js')

const { hasCommonElements1, hasCommonElements2, hasCommonElements3, hasCommonElements4 } = myModule

const arr1 = [1,2,3]
const arr2 = [0,2,7]
const arr3 = [10,8,6]
const arr4 = [null, 'hello', 6]

test('all my functions exist', () => {
  expect(typeof hasCommonElements1).toEqual('function');
  expect(typeof hasCommonElements2).toEqual('function');
  expect(typeof hasCommonElements3).toEqual('function');
  expect(typeof hasCommonElements4).toEqual('function');
});

test('hasCommonElements1 returns true if there are common elements', () => {
  expect(hasCommonElements1(arr1, arr2)).toEqual(true);
  expect(hasCommonElements1(arr3, arr4)).toEqual(true);
});

test('hasCommonElements1 returns false if there are no common elements', () => {
  expect(hasCommonElements1(arr2, arr3)).toEqual(false);
  expect(hasCommonElements1(arr1, arr4)).toEqual(false);
});

test('hasCommonElements2 returns true if there are common elements', () => {
  expect(hasCommonElements2(arr1, arr2)).toEqual(true);
  expect(hasCommonElements2(arr3, arr4)).toEqual(true);
});

test('hasCommonElements2 returns false if there are no common elements', () => {
  expect(hasCommonElements2(arr2, arr3)).toEqual(false);
  expect(hasCommonElements2(arr1, arr4)).toEqual(false);
});

test('hasCommonElements3 returns true if there are common elements', () => {
  expect(hasCommonElements3(arr1, arr2)).toEqual(true);
  expect(hasCommonElements3(arr3, arr4)).toEqual(true);
});

test('hasCommonElements3 returns false if there are no common elements', () => {
  expect(hasCommonElements3(arr2, arr3)).toEqual(false);
  expect(hasCommonElements3(arr1, arr4)).toEqual(false);
});

test('hasCommonElements3 returns true if there are common elements', () => {
  expect(hasCommonElements3(arr1, arr2)).toEqual(true);
  expect(hasCommonElements3(arr3, arr4)).toEqual(true);
});

test('hasCommonElements4 returns false if there are no common elements', () => {
  expect(hasCommonElements4(arr2, arr3)).toEqual(false);
  expect(hasCommonElements4(arr1, arr4)).toEqual(false);
});
