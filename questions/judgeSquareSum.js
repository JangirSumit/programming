//https://leetcode.com/problems/sum-of-square-numbers/description/

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let half = Math.ceil(c / 2);

  for (let i = 1; i <= half; i++) {
    for (let j = i; j <= half; j++) {
      if (c == i * i + j * j) return true;
    }
  }
  return false;
};

var judgeSquareSum = function (c) {
  let a = 0;
  let half = c / 2;

  while (a <= half && c - a * a >= 0) {
    let b = parseInt(Math.sqrt(c - a * a));
    if (c === a * a + b * b) {
      console.log("Possible Numbers", a, b);
      return true;
    }
    a++;
  }

  return false;
};

console.log("Test Case 1 => ", judgeSquareSum(0));
console.log("Test Case 2 => ", judgeSquareSum(1000000000));
console.log("Test Case 3 => ", judgeSquareSum(5));
console.log("Test Case 4 => ", judgeSquareSum(3));
