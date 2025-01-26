var nums = [1, 2, 3, 4];

Array.prototype.myMap = function (fn) {
  for (let index = 0; index < this.length; index++) {
    this[index] = fn(this[index]);
  }
  return this;
};

var newNums = nums.myMap(function (a) {
  return a * 2;
});

console.log(newNums);
