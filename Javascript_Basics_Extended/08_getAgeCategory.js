/**
 * @param {number} age
 *
 * @returns {string}
 */
 function getAgeCategory(age) {
    if (age < 2) {
      return 'baby';
    } else if (age < 10) {
      return 'child';
    } else if (age < 18) {
      return 'teenager';
    } else if (age < 60) {
      return 'adult';
    }
  
    return 'senior';
  }
  