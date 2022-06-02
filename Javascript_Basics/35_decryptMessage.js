/**
 * @param {string} message
 *
 * @returns {string}
 */
function decryptMessage(message) {
    // write code here
    let result = '';
    for (let i = message.length - 1; i >= 0; i--) {
      result += message[i]
    }
    return result;
  }

const decryptMessage = (message) => {
    // write code here
    let result = '';
    for (let i = message.length - 1; i >= 0; i--) {
      result += message[i]
    }
    return result;
  }