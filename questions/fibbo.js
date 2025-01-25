function fibbo(n) {
  if (n <= 1) {
    return n;
  }

  return fibbo(n - 1) + fibbo(n - 2);
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  for (let i = 0; i < 10; i++) {
    console.log(fibbo(i));
    await sleep(1000);
  }
}

main();
