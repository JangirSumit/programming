var singleNonDuplicate = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
  }

  return Object.keys(map).filter((a) => map[a] === 1)[0];
};
