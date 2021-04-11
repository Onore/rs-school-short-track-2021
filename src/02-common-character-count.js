/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  const arr2 = s2.split('');

  if (s1.length === 0) return res;

  s1.split('').forEach((v) => {
    const foundElIndex = arr2.indexOf(v);
    if (foundElIndex !== -1) {
      arr2.splice(foundElIndex, 1);
      res++;
    }
  });
  return res;
}

module.exports = getCommonCharacterCount;
