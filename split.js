function split(input, splitBy) {
  let arr = [];
  if (splitBy) {
    let lastIndex = 0;

    while (input && input.length) {
      const element = input.substring(
        lastIndex,
        input.indexOf(splitBy) == -1 ? input.length : input.indexOf(splitBy)
      );
      lastIndex = input.indexOf(splitBy) + 1;
      input = input.replace(element, "").replace(splitBy, "");
      if (element.trim()) {
        arr.push(element);
      }
    }
  } else {
    for (let index = 0; index < input.length; index++) {
      const element = input[index];
      arr.push(element);
    }
  }

  return arr;
}

console.log(split("Sumit"));
console.log(split("Sumit Jangir", " "));
console.log(split("Sumit,Jangir", ","));
console.log(split("SumitsuJangir", "su"));
