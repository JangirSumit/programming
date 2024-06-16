// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

const nums = [1, 1, 2, 3, 3, 4, 5];

function removeDuplicatesWithFilter(nums) {
  return nums.filter((item, index) => nums.indexOf(item) === index);
}

function removeDuplicateInPlace(nums) {
  let start = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[start]) {
      nums.splice(i, 1);
      i--;
    } else {
      start++;
    }
  }
  return nums;
}

function removeDuplicatesByMovingDuplicatesToEnd(nums) {
  let start = 0;
  let k = nums.length - 1;

  for (let i = 1; i < k; i++) {
    if (nums[i] == nums[start]) {
      //nums.push(...);
      //nums.splice(i, 1);
      swap(nums, i, i + 1);
      i--;
    } else {
      start++;
    }
  }
  return [nums, start];
}

function swap(nums, i, j) {
  let k = nums[i];
  nums[i] = nums[j];
  nums[j] = k;
}

console.log(removeDuplicatesWithFilter(nums));
console.log(removeDuplicatesByMovingDuplicatesToEnd([1, 1, 2]));

//console.log(removeDuplicateInPlace(nums));
