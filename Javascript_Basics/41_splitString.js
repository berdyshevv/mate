/**
 * @param {string} str
 *
 * @returns {string[]}
 */
 function splitString(str) {
    let result = [];
     
     if (str.length % 2 !== 0) {
       str += '_';
     }
     for (let i = 0; i < str.length; i = i+2){
     result.push(str[i] + str[i+1]);
   }
   return result
   }