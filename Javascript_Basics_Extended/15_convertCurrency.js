/**
 * @param {number} amount
 * @param {number} exchangeRate
 * @param {string} currencyName
 *
 * @returns {string}
 */
 function convertCurrency(amount, exchangeRate, currencyName) {
    const exchangedAmount = amount * exchangeRate;
    const mulAmount = exchangedAmount * 100;
    const rMAmount = Math.floor(mulAmount);
    const rAmount = rMAmount / 100;
  
    if (amount <= 0 || exchangeRate <= 0) {
      return 'Enter valid data';
    }
  
    return 'Give them ' + rAmount + ' ' + currencyName + '(\'s)';
  }
  