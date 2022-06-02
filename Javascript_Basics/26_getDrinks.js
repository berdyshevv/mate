/**
 * @param {number} numberOfGuests
 *
 * @returns {number}
 */
function getDrinks(numberOfGuests) {
    let sum = 0;
    for (let i = 1; i <= numberOfGuests; i++)
    sum += i;
    return sum;
  }

const getDrinks = (numberOfGuests) => {
    let sum = 0;
    for (let i = 1; i <= numberOfGuests; i++)
    sum += i;
    return sum;
  }
  
  