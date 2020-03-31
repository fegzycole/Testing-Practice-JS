/* eslint-disable no-restricted-globals */
const isUpperCase = str => str === str.toUpperCase();

const caesarCipher = (str, moves) => {
  let decipheredString = '';

  const arrayOfSymbols = [' ', '!', '@', '#', '$', '%', '^',
    '&', '*', '(', ')', '_', '-', '+', '=', '.', ',', '<', '>', '?', '/', '|', '\'', '`', '~'];

  str.split('').forEach((element, index) => {
    if (arrayOfSymbols.includes(element) || !isNaN(element)) {
      decipheredString += element;
    } else if (isUpperCase(element)) {
      decipheredString += String.fromCharCode(((str.charCodeAt(index) + moves - 65) % 26) + 65);
    } else {
      decipheredString += String.fromCharCode(((str.charCodeAt(index) + moves - 97) % 26) + 97);
    }
  });
  return decipheredString;
};

export default caesarCipher;