function maxSumSubArray(array) {
  let maxSum = 0;
  let currentSum = array[0];

  for (let i = 1; i < array.length; i++) {
    currentSum += array[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
    } else if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSumSubArray(arr));
