function sum(x) {
  return function inner(y) {
    if (typeof y !== "undefined") {
      x = x + y;
      return inner;
    } else {
      return x;
    }
  };
}

console.log(sum(1)());
console.log(sum(1)(2)(3)());
console.log(sum(1)(2)());
