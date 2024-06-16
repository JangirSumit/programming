//https://leetcode.com/problems/snail-traversal/

/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  const newArray = [];

  for (let i = 0; i < rowsCount; i++) {
    newArray.push(this.splice(0, colsCount));
  }

  console.log(newArray);
};

const nums = [
  19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
];
const rowsCount = 5;
const colsCount = 4;

nums.snail(5, 4);
