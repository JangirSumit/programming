//https://leetcode.com/problems/valid-triangle-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  let validTriangles = 0;
  for (let i = 0; i < nums.length; i++) {
    let a = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let b = nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        let c = nums[k];

        if (a + b > c && b + c > a && a + c > b) {
          validTriangles++;
        }
      }
    }
  }
  return validTriangles;
};

var validTrianglesNewMethod = function (nums) {
  let validTriangles = 0;

  const triangles = function (a, b, c) {
    if (a + b > c && b + c > a && a + c > b) {
      validTriangles++;
    }
  };

  let nums = validNums(nums)

};

const nums = [4, 2, 3, 4];
console.log(triangleNumber(nums));
