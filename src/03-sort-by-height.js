/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const res = [];

  const minusElementPositionArr = arr
    .map((v, k) => (v === -1 ? k : undefined))
    .filter((v) => v !== undefined);

  const notMinusElementArr = arr.filter((v) => v !== -1).sort((a, b) => a - b);

  arr.forEach((v, k) => {
    if (minusElementPositionArr.includes(k)) {
      res.push(-1);
    } else {
      res.push(notMinusElementArr.shift());
    }
  });

  return res;
}

module.exports = sortByHeight;
