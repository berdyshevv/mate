/**
 * @param {string} direction
 *
 * @returns {string}
 */
 function getDirection(direction) {
    switch (direction) {
      case 'forward':
        return 'hor=0 ver=1';
  
      case 'back':
        return 'hor=0 ver=-1';
  
      case 'right':
        return 'hor=1 ver=0';
  
      case 'left':
        return 'hor=-1 ver=0';
  
      case 'stop':
      default:
        return 'hor=0 ver=0';
    }
  }
  