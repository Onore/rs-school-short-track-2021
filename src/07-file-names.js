/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function renameFiles(arr) {
  let res = [];
  const map = new Map();

  res = arr.map((v) => {
    if (!map.has(v)) {
      map.set(v, 0);
    } else {
      map.set(v, map.get(v) + 1);
    }

    if (map.get(v) > 0) {
      return `${v}(${map.get(v)})`;
    }
    return v;
  });

  if ([...map.values()].filter((el) => el > 0).length) {
    return renameFiles(res);
  }

  return res;
}

module.exports = renameFiles;
