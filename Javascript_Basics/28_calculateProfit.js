/**
 * @param {number} amount
 * @param {number} percent
 * @param {number} period
 *
 * @returns {number}
 */
function calculateProfit(amount, percent, period) {
    let total = amount;
    for (let i = 1; i <= period; i++) {
      total += total * percent / 100;
    }
    return total - amount;
  }
 
const calculateProfit = (amount, percent, period) => {
    let total = amount;
    for (let i = 1; i <= period; i++) {
      total += total * percent / 100;
    }
    return total - amount;
  }