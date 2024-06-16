function fibbo(n) {
  if (n <= 1) {
    return n;
  }

  return fibbo(n - 1) + fibbo(n - 2);
}

for (let i = 0; i <= 10; i++) {
  console.log(fibbo(i));
}
