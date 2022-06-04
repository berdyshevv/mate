/**
 * @param {number} fuelRemaining
 * @param {number} distance
 * @param {number} fuelConsumption
 *
 * @returns {string}
 */
 function makeDecision(fuelRemaining, distance, fuelConsumption) {
    if (fuelRemaining < 0 || distance < 0 || fuelConsumption <= 0) {
      return ('please, enter the valid data');
    } 
  
    const enoughFuel = fuelRemaining >= fuelConsumption / 100 * distance;
  
    if (enoughFuel) {
      return ('reach gas station by themselves');
    } else {
      return ('ask for help');
    }
  }
  