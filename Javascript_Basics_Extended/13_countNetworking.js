/**
 * @param {number} quarantineLength - count of quarantine months
 * @param {number} frequency - networking repeat period
 *
 * @returns {number}
 */
 function countNetworking(quarantineLength, frequency) {
    const timeLeft = 12 - quarantineLength;
    const networkingAmount = timeLeft / frequency;
    const nARounded = Math.ceil(networkingAmount);
  
    return nARounded;
  }
  