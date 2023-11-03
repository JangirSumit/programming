function power(num, pow) {
  console.log(num, pow);
  if (pow == 0) {
    return 1;
  } else if (pow === 1) {
    return num;
  }

  if (pow % 2 == 0) {
    pow = parseInt(pow / 2);
    return power(num * num, pow);
  }

  pow = parseInt(pow / 2);
  return num * power(num * num, pow);
}

console.log(power(2, 11));
