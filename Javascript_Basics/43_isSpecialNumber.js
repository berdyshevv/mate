/**
 * @param {number} n
 *
 * @returns {string}
 */
 function isSpecialNumber(n) {
    let text = n.toString();
      
      for (let i = 0; i < text.length; i++){
        if (text[i] > 5 || text[i] < 0){
          return 'NOT!!';
        }
      }
      return 'Special!!'
    }