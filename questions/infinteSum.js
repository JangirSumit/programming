function sum(x) {
  if (!x) {
    return 0;
  }

  return function inner(y) {
    if (typeof y !== "undefined") {
      x = x + y;
      return inner;
    } else {
      return x;
    }
  };
}

console.log(sum());
console.log(sum(1)());
console.log(sum(1)(2)(3)());
console.log(sum(1)(2)());
