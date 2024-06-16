var removeKdigits = function (nums, k) {
  if (nums.length <= k) {
    return "0";
  }

  let min = parseInt(nums);

  for (let i = 0; i <= nums.length - k; i++) {
    console.log(`${i} ${i + k}`);
    let newNum = nums.slice(0, i) + nums.slice(i + k);
    console.log(newNum);
    if (min > parseInt(newNum)) {
      min = parseInt(newNum);
    }
  }
  return min.toString();
};

let nums = "112",
  k = 1;
console.log(removeKdigits(nums, k));
