//https://leetcode.com/problems/take-gifts-from-the-richest-pile/

/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
  gifts = gifts.sort((a, b) => parseInt(b) - parseInt(a));

  let sum = 0;
  console.log(gifts);

  for (let i = 0; i < gifts.length; i++) {
    if (i < k) {
      sum += Math.sqrt(gifts[i], 2);
    }
    sum += gifts[i];
  }
  return sum;
};

const gifts = [25, 64, 9, 4, 100],
  k = 4;

console.log(pickGifts(gifts, k));
