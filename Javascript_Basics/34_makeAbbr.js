/**
 * @param {string} words
 *
 * @returns {string}
 */

function makeAbbr(words) {
    // write code here
    let abbreviation = '';
    const name = words[0];
    for (let i = 0; i < words.length; i++) {
      if(words[i] === ' ') {
        abbreviation += words[i+1]
      }
    }
  
    return `${name.toUpperCase()}${abbreviation.toUpperCase()}`
  }

const makeAbbr = (words) => {
    // write code here
    let abbreviation = '';
    const name = words[0];
    for (let i = 0; i < words.length; i++) {
      if(words[i] === ' ') {
        abbreviation += words[i+1]
      }
    }
  
    return `${name.toUpperCase()}${abbreviation.toUpperCase()}`
  }