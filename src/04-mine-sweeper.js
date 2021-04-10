/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(arr) {
  const res = arr.map((ar, key) => ar.map((v, k) => {
    let n = 0;

    if (k > 0 && ar[k - 1] === true) {
      n += 1;
    }
    if (ar[k + 1] === true) {
      n += 1;
    }
    if (arr[key - 1] && arr[key - 1][k - 1] === true) {
      n += 1;
    }
    if (arr[key - 1] && arr[key - 1][k] === true) {
      n += 1;
    }
    if (arr[key - 1] && arr[key - 1][k + 1] === true) {
      n += 1;
    }
    if (arr[key + 1] && arr[key + 1][k - 1] === true) {
      n += 1;
    }
    if (arr[key + 1] && arr[key + 1][k] === true) {
      n += 1;
    }
    if (arr[key + 1] && arr[key + 1][k + 1] === true) {
      n += 1;
    }

    return n;
  }));

  return res;
}

module.exports = minesweeper;
