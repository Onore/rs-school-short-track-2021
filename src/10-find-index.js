/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(arr, v) {
  let i = 0;
  while (i < arr.length) {
    if (arr.length / 2 < v - 1) {
      if (arr[arr.length - 1 - i] === v) {
        return arr.length - 1;
      }
    }
    if (arr[i] === v) {
      break;
    }
    i++;
  }
  return i;
}

module.exports = findIndex;
