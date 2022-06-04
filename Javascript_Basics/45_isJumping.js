/**
 * @param {number} number
 *
 * @returns {string}
 */
 function isJumping(number) {
    let text = number.toString();
    
    for (let i = 1; i < text.length; i++) {
      if (Math.abs(text[i] - text[i - 1]) !== 1){
      return 'NOT JUMPING';
    } 
  }
    return 'JUMPING'
  }
  