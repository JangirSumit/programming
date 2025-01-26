Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue || this[0];
  let startIndex = initialValue ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
}