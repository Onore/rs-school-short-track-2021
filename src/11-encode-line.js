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
  const arr = s.split('');
  let nSkip = 0;

  for (let i = 0; i < arr.length; i++) {
    // Skip the same element(s)
    if (nSkip > 0) {
      nSkip--;
    } else {
      const count = arr.filter((v, k) => {
        if (v === arr[i] && arr[k + 1] === arr[i]) {
          return true;
        }
        return false;
      }).length;
      if (count > 1) {
        res += count + arr[i];
        nSkip = count - 1;
      } else {
        res += arr[i];
      }
    }
  }

  return res;
}

module.exports = encodeLine;
