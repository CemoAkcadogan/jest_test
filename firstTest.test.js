const { sum, subtract } = require('./firstTest.js');

test('sum adds two numbers correctly', () => {
  expect(sum(2, 3)).toBe(5);
});

test('subtract subtracts two numbers correctly', () => {
  expect(subtract(5, 3)).toBe(2);
});
