/**
 * @param {string} doc
 *
 * @returns {string}
 */
function removeVowels(doc) {
    let result = '';
  
    for (let char of doc) {
      if (!'aeiouy'.includes(char.toLocaleLowerCase()))
    result += char;
    }
    return result;
  }
  
const removeVowels = (doc) => {
    let result = '';
  
    for (let char of doc) {
      if (!'aeiouy'.includes(char.toLocaleLowerCase()))
    result += char;
    }
    return result;
  }  