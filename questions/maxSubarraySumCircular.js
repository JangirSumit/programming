/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function (A) {
  let maxAll = Math.max();
  let maxTill = 0;

  A = [...A, ...A];

  for (let i = 0; i < A.length; i++) {
    maxTill = maxTill + A[i];
    if (maxTill > maxAll) {
      maxAll = maxTill;
    }

    if (maxTill < 0) {
      maxTill = 0;
    }
  }

  return maxAll;
};

console.log(maxSubarraySumCircular([5, -3, 5]));
