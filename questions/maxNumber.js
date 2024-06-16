function maxSubArraySum(arr) {
  let Max_Sum = -Infinity;
  let max_till = 0;
  let start = 0;
  let end = 0;
  let s = 0;

  for (let i = 0; i < arr.length; i++) {
    max_till += arr[i];
    console.log(`${Max_Sum} ${max_till}`);
    if (max_till > Max_Sum) {
      Max_Sum = max_till;
      start = s;
      end = i;
    }

    if (max_till < 0) {
      max_till = 0;
      s = i + 1;
    }
  }

  return { sum: Max_Sum, data: arr.slice(start, end + 1) };
}

//{-2, -5, 6, -2, -3, 1, 5, -6},//7

console.log(maxSubArraySum([-2, -5, 6, -2, -3, 1, 5, -6]));
