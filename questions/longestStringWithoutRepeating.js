function findString(str) {
  var strings = [];
  let i = 0;
  var set = new Set();

  while (i < str.length) {
    console.log(str[i]);
    if (!set.has(str[i])) {
      set.add(str[i]);
    } else {
      var x = [...set];
      strings.push(x.join(""));
      set = new Set();
    }
    i++;
  }
  strings.push([...set].join());
  console.log(strings);

  var result = "";

  for (let i = 0; i < strings.length; i++) {
    if (result.length < strings[i].length) {
      result = strings[i];
    }
  }

  return result;
}

console.log(findString("pwwkew"));
