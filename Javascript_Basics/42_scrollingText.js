/**
 * @param {string} word
 *
 * @returns {string[]}
 */
 function scrollingText(word) {
    let result = [];
   for (let i = 0; i < word.length; i++){
     result [i] = word.slice(i).toUpperCase();
     result [i] += word.slice (0, i).toUpperCase();
   }
    return result
  }
  