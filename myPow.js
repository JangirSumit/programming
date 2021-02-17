function myPow(x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let result = 1;
  while (n > 0) {
    console.log(n, x, result);
    if (n % 2 == 1) {
      result *= x;
      n -= 1;
    }

    x *= x;
    n = n / 2;
  }
  return result;
}

function myPow1(x, n) {
  function inner(x, n) {
    if (n == 0) {
      return 1;
    } else if (n % 2 == 0) {
      let temp = inner(x, n / 2);
      return temp * temp;
    } else {
      let temp = inner(x, Math.floor(n / 2));
      return x * temp * temp;
    }
  }

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  return inner(x, n);
}

console.log(myPow1(2, -1));
