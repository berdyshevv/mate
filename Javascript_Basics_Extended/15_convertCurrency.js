/**
 * @param {number} amount
 * @param {number} exchangeRate
 * @param {string} currencyName
 *
 * @returns {string}
 */
 function convertCurrency(amount, exchangeRate, currencyName) {
    if (amount <= 0 || exchangeRate <= 0) {
        return 'Enter valid data';
    } 

    const exchangedAmount = amount * exchangeRate;
    const mulAmount = exchangedAmount * 100;
    const rMAmount = Math.floor(mulAmount);
    const rAmount = rMAmount / 100;
  
    return 'Give them ' + rAmount + ' ' + currencyName + '(\'s)';
  }
  