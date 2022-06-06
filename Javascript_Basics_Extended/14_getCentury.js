/**
 * @param {number} year
 *
 * @returns {number}
 *
 */
 function getCentury(year) {
    const cen = Math.ceil(year / 100);
  
    if (year < 1000) {
      return 1;
    }
  
    return cen;
  }
  