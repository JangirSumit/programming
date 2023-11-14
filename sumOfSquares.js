//https://leetcode.com/problems/sum-of-squares-of-special-elements/

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
  let sum = 0;
  let length = nums.length;

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (length % (i + 1) == 0) {
      sum = sum + element * element;
    }
  }

  return sum;
};

console.log(sumOfSquares([2, 7, 1, 19, 18, 3]));
