/**
 * @param {integer} number
 *
 * @returns {boolean}
 */
 function isTidy(number) {
    let text = number.toString();
      for (let i = 1; i < number; i++){
        if (text[i] < text[i - 1]){
          return false
        }
      }
      return true
    }