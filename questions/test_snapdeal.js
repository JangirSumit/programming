/*
const obj = {
 user: {
   name: "Vaibhav",
   address: {
   		houseNo: '23'
   }
 }
};



{
user.name: "va"
user.adress.house: 23
}
*/

const obj = {
  user: {
    name: "Vaibhav",
    address: {
      houseNo: "23",
    },
  },
};

function flatten(obj) {
  let flattenedObj = {};
  function inner(newObj, parent) {
    for (const key in newObj) {
      let newKey = parent && parent.length ? `${parent}.${key}` : key;

      if (typeof newObj[key] == "object") {
        inner(newObj[key], newKey);
      } else {
        flattenedObj[newKey] = newObj[key];
      }
    }
  }

  inner(obj, "");
  return flattenedObj;
}

console.log(flatten(obj));
