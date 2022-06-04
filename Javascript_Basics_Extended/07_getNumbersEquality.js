/**
 * @param {number} a
 * @param {number} b
 *
 * @returns {string}
 */
 function getNumbersEquality(a, b) {
    if (a === b) {
      return 'a and b are equal';
    }
  
    if (a < b) {
      return 'a < b';
    }
  
    return 'a > b';
  }
  