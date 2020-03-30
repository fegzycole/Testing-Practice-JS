import capitalize from './capitalize';

test('should capitalize a string', () => {
  expect(capitalize('wilfried')).toBe('Wilfried');
});