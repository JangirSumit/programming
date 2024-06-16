var camelCases = function (string) {
  let s = [];
  let temp = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i].toUpperCase()) {
      s.push(temp);
      temp = "";
    }
    temp += string[i];
  }
  s.push(temp);
  return s.length;
};

console.log(camelCases("saveChangesInTheEditor"));
