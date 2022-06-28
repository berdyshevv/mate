/**
 * @param {string} letters
 *
 * @returns {boolean}
 */
 function isAlphabet(letters) {
  if (letters === '') {
    return false;
  }

  if (letters.length === 1) {
    return true;
  }

  for (let i = 0; i < letters.length - 1; i++) {
    if (isDiffNotOne(letters[i], letters[i + 1])) {
      return false;
    }
  }

  return true;
}

function getIndex(letter) {
  const alphaBet = 'abcdefghijklmnopqrstuvwxyz';

  return alphaBet.indexOf(letter.toLowerCase());
}

function isDiffNotOne(letter1, letter2) {
  return getIndex(letter2) - getIndex(letter1) !== 1;
}
