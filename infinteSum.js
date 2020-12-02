function sum(x) {
  return function (y) {
    if (typeof y !== "undefined") {
      x = x + y;
      return arguments.callee;
    } else {
      return x;
    }
  };
}

console.log(sum(1)());
console.log(sum(1, 2)());
console.log(sum(1)(2)());
