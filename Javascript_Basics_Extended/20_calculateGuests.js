/**
 * @param {string} guestsInput
 *
 * @returns {number|string}
 */
 function calculateGuests(guestsInput) {
    const num = extractNumAsString(guestsInput);
  
    if (num === '') {
      return 'not a number';
    } else if (num === '0') {
      return 'not a number';
    }
  
    return parseInt(num);
  }
  
  function extractNumAsString(str) {
    let acc = '';
    let flag = 'notNumber';
  
    for (const ch of str) {
      if (thisSymbolIsNumber(ch)) {
        flag = 'number';
        acc += ch;
      } else if (!thisSymbolIsNumber(ch)) {
        if (endProgram(ch, flag)) {
          break;
        } else {
          flag = 'notNumber';
        }
      }
    }
  
    return acc;
  }
  
  function endProgram(char, flag) {
    return !thisSymbolIsNumber(char) && flag === 'number';
  }
  
  function thisSymbolIsNumber(char) {
    const parsedChar = parseInt(char, 10);
  
    return parsedChar <= 9 && parsedChar >= 0;
  }
  