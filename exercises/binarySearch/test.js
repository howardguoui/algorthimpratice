const binarySearch = require('./index');

test('binarySearch is a function', () => {
  expect(typeof binarySearch).toEqual('function');
});

test('capitalizes the first letter of every word in a sentence', () => {
  expect(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103)).toEqual(-1);
});