function reverseString(string) {
  return string.length === 0 ? "" : reverseString(string.substr(1)) + string[0];
}

console.log(reverseString("Sumit"));
