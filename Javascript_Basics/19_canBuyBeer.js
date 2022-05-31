/**
 * @param {number} age
 *
 * @returns {string}
 */

// declare your function below
function canBuyBeer(age) {
    if (age >= 18) {
      return 'You can buy beer';
    }
    return 'You can not buy beer';
}
// or You can do it like this
const canBuyBeer2 = (age) => {
    if (age >= 18) {
      return 'You can buy beer';
    }
    return 'You can not buy beer';
}