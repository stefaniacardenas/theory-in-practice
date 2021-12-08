const moveZeroes = require('./index');

const arr = [0,1,0,3,12]
const out = [1,3,12,0,0]

test('moveZeroes function exists', () => {
  expect(typeof moveZeroes).toEqual('function');
});

test('Should move all zeroes at the end of the array', () => {
  expect(moveZeroes(arr)).toEqual(out);
});

test('Should move all zeroes at the end of the array', () => {
  expect(moveZeroes([1,0,0,3,0,10])).toEqual([1,3,10,0,0,0]);
});

test('Should move all zeroes at the end of the array', () => {
  expect(moveZeroes([0,0,0,2])).toEqual([2,0,0,0]);
});

test('Should move all zeroes at the end of the array', () => {
  expect(moveZeroes([1,2,3,4])).toEqual([1,2,3,4]);
});
