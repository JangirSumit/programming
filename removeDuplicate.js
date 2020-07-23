const nums = [1, 1, 2, 3, 3, 4, 5];

const newNums = nums.filter((item, index) => nums.indexOf(item) === index);

console.log(newNums);
