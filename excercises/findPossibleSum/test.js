const myModule = require('./index.js')
const { findPairsWithSum, findPairsWithSum1, twoSum } = myModule

const arr1 = [1,2,3,9] // false
const arr2 = [1,2,4,4] // true

const sum = 8
const sum2 = 12
const arr3 = [1,13,4,8] // true
const sum3 = 5
const arr4 = [1,13,4,8] // true

test('findPairsWithSum returns true if there are possible pairs that would return sum', () => {
  expect(findPairsWithSum(arr2, sum)).toEqual(true);
});

test('findPairsWithSum returns false if there are no pairs that would return sum', () => {
  expect(findPairsWithSum(arr1, sum)).toEqual(false);
});

test('findPairsWithSum returns true if there are possible pairs that would return sum', () => {
  expect(findPairsWithSum(arr3, sum2)).toEqual(true);
});

test('findPairsWithSum1 returns true if there are possible pairs that would return sum', () => {
  expect(findPairsWithSum1(arr2, sum)).toEqual(true);
});

test('findPairsWithSum1 returns false if there are no pairs that would return sum', () => {
  expect(findPairsWithSum1(arr1, sum)).toEqual(false);
});

test('findPairsWithSum1 returns true if there are possible pairs that would return sum', () => {
  expect(findPairsWithSum1(arr3, sum2)).toEqual(true);
});

test('twoSum returns the indeces of pairs that can be return the sum', () => {
  expect(twoSum(arr2, sum)).toEqual(expect.arrayContaining([2,3]));
});

test('twoSum returns the indeces of pairs that can be return the sum', () => {
  expect(twoSum(arr3, sum2)).toEqual(expect.arrayContaining([2,3]));
});

test('twoSum returns the indeces of pairs that can be return the sum', () => {
  expect(twoSum(arr4, sum3)).toEqual(expect.arrayContaining([0,2]));
});

test('twoSum returns the indeces of pairs that can be return the sum with zeros', () => {
  expect(twoSum([0,4,3,0], 0)).toEqual(expect.arrayContaining([0,3]));
});

test('twoSum returns the indeces of pairs that can be return the sum', () => {
  expect(twoSum([0,13,4,8], 8)).toEqual(expect.arrayContaining([0,3]));
});

test('twoSum returns the indeces of pairs that can be return the sum with negative numbers', () => {
  expect(twoSum([-1,-2,-3,-4,-5], -8)).toEqual(expect.arrayContaining([2,4]));
});

test('twoSum returns the indeces of pairs that can be return the sum with some negative numbers', () => {
  expect(twoSum([-3,4,3,90], 0)).toEqual(expect.arrayContaining([0,2]));
});

test('twoSum returns the indeces of pairs that can be return the sum with some negative numbers', () => {
  expect(twoSum([4], 8)).toEqual(expect.arrayContaining([]));
});

test('twoSum returns an empty array if no pairs can return sum', () => {
  expect(twoSum(arr1, sum)).toEqual(expect.arrayContaining([]));
});
