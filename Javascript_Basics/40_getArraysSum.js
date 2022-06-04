/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 *
 * @returns {number}
 */
 function getArraysSum(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++){
      sum += arr1[i];
    }
    for (let j = 0; j < arr2.length; j++) {
      sum += arr2[j]
    }
    return sum
  }
  
  