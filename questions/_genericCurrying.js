function genericCurry(f) {
  return function currify(...args) {
    if (args.length >= f.length) {
      return f.apply(this, args);
    } else {
      return function (...newArgs) {
        return currify.apply(this, args.concat(newArgs));
      };
    }
  };
}

function genericCurryNew(f) {
  return function currify(...args) {
    return args.length >= f.length
      ? f.apply(this, args)
      : currify.bind(this, ...args);
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = genericCurry(sum);
console.log(curriedSum(1, 2)(3));
console.log(curriedSum(1)(2)(3));
console.log(curriedSum(1)(2, 3));



