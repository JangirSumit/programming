Array.prototype.myFilter = function (fn) {
  const newArr = [];
  for (let index = 0; index < this.length; index++) {
    if (fn(this[index])) newArr.push(this[index]);
  }

  return newArr;
};

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.myFilter((a) => a > 3));
console.log(arr.myFilter((a) => a > 6));
console.log(arr.myFilter((a) => a < 10));

const arr1 = [{ a: 1 }, { a: 2 }, { a: 3 }];
console.log(arr1.myFilter((x) => x.a > 1));
