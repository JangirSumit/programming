//https://leetcode.com/problems/multiply-strings/description/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  return "" + +num1 * +num2;
};

console.log(multiply(123456789, 987654321));
