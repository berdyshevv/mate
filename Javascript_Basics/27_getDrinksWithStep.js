/**
 * @param {number} numberOfGuests
 * @param {number} step
 *
 * @returns {number}
 */
 function getDrinksWithStep(numberOfGuests, step) {
    // write code here
    let sum = 0;
    for (let i = 1; i <= numberOfGuests; i += step) {
      sum += i;
    }
    return sum;
  }
  
const getDrinksWithStep = (numberOfGuests, step) => {
    // write code here
    let sum = 0;
    for (let i = 1; i <= numberOfGuests; i += step) {
      sum += i;
    }
    return sum;
  }
  