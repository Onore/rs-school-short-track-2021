/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arr) {
  const allVariantArr = [];
  arr.forEach((str) => {
    const tmp = [];
    str
      .split('.')
      .reverse()
      .forEach((v) => {
        if (tmp.length === 0) {
          tmp.push(`.${v}`);
        } else {
          tmp.push(`${tmp[tmp.length - 1]}.${v}`);
        }
      });

    allVariantArr.push(...tmp);
  });

  const res = new Map();

  allVariantArr.forEach((v) => {
    if (res.has(v)) {
      res.set(v, res.get(v) + 1);
    } else {
      res.set(v, 1);
    }
  });

  return Object.fromEntries(res);
}

module.exports = getDNSStats;
