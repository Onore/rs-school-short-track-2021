/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(s) {
  let res = '';
  let n = 0;
  let count = 0;

  s.split('').forEach((el, key, arr) => {
    if (key >= n) {
      for (let k = key; k <= arr.length; k++) {
        if (arr[k] === el) {
          count++;
        } else {
          n = k;
          res += count === 1 ? el : count + el;
          count = 0;
          break;
        }
      }
    }
  });

  return res;
}

module.exports = encodeLine;
