//https://leetcode.com/problems/compact-object/

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (obj instanceof Array && obj.some((_) => !_) === false) {
    return obj;
  }

  if (obj instanceof Array) {
    for (let index = 0; index < obj.length; index++) {
      if (obj[index] instanceof Object) {
        compactObject(obj[index]);
      } else if (!obj[index]) {
        obj.splice(index, 1);
        index--;
      }
    }
  } else {
    for (const key in obj) {
      if (obj[key] instanceof Object) {
        compactObject(obj[key]);
      } else if (!obj[key]) {
        delete obj[key];
      }
    }
  }
  return obj;
};

console.log(compactObject({ a: 1, b: 1, d: "false" }));
console.log(compactObject({ a: null, b: [false, 1] }));
