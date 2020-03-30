import caesarCipher from './caesarcipher';

test('should decipher a given string by number of moves', () => {
  expect(caesarCipher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
});

test('should decipher a given string by number of moves', () => {
  expect(caesarCipher('zAd@', 2)).toBe('bCf@');
});