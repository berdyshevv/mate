/**
 * @param {number} a
 * @param {number} b
 * @param {number} res
 *
 * @returns {string}
 */
 function findCalculationType(a, b, res) {
    // write code here
    switch (res) {
      case a + b:
        return 'addition';
  
      case a - b:
        return 'subtraction';
  
      case a * b:
        return 'multiplication';
  
      case a / b:
        return 'division';
  
      default:
        return 'NO';
    }
  }
  