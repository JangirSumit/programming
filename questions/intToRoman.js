//https://leetcode.com/problems/integer-to-roman/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const NUM_ROMAN_MAP = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  const FACTOR_NUMS = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let result = "";
  let currentFactor = 0;

  while (num > 0 && currentFactor < FACTOR_NUMS.length) {
    if (FACTOR_NUMS[currentFactor] > num) {
      currentFactor++;
      continue;
    }

    let reminder = parseInt(num / FACTOR_NUMS[currentFactor]);
    console.log("before", num, currentFactor, reminder);

    if (reminder > 0) {
      result += NUM_ROMAN_MAP[FACTOR_NUMS[currentFactor]].repeat(reminder);

      num = num % FACTOR_NUMS[currentFactor];
    }
    currentFactor++;

    console.log("after", num, currentFactor, reminder);
  }

  return result;
};

console.log(intToRoman(1994));
