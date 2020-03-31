import reverseString from './reversestring';

test('should successfully reverse a string', () => {
  expect(reverseString('tar')).toBe('rat');
});