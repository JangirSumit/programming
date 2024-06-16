// check if 2 strings are valid anagrams or not?
// anagram === gramana

function isValidAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const map1 = {},
    map2 = {};

  for (let index = 0; index < str1.length; index++) {
    map1[str1[index]] = (map1[str1[index]] || 0) + 1;
    map2[str2[index]] = (map2[str2[index]] || 0) + 1;
  }

  for (const key in map1) {
    if (map1[key] != map2[key]) {
      return false;
    }
  }

  return true;
}

console.log(isValidAnagrams("sumit", "umits"));
