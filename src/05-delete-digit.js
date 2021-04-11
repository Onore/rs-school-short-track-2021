/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  const del = Math.min(...arr);
  return +arr.filter((v, k) => k !== arr.lastIndexOf(del.toString())).join('');
}

module.exports = deleteDigit;
