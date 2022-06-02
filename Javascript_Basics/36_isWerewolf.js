/**
 * @param {string} target
 *
 * @returns {boolean}
 */
function isWerewolf(target) {
    // write code here
    const lowerTarget = target.toLocaleLowerCase();
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    let direct = '';
    let reversed = '';
  
    for (const char of lowerTarget) {
      if(abc.includes(char)) {
        direct += char;
        reversed = char + reversed;
      }
      
    }
  
    return direct === reversed;
  }

const isWerewolf = (target) => {
    // write code here
    const lowerTarget = target.toLocaleLowerCase();
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    let direct = '';
    let reversed = '';
  
    for (const char of lowerTarget) {
      if(abc.includes(char)) {
        direct += char;
        reversed = char + reversed;
      }
      
    }
  
    return direct === reversed;
  }