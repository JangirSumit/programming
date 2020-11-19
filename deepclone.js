function deepClone(object) {
  let newObject = {};

  for (const key in object) {
    if (
      typeof object[key] === "object" &&
      !Array.isArray(object[key]) &&
      object[key]
    )
      newObject[key] = deepClone(object[key]);
    else {
      newObject[key] = object[key];
    }
  }

  return newObject;
}

var personalDetail = {
  name: "Sumit",
  address: {
    location: "xyz",
    zip: "123456",
    phoneNumber: {
      homePhone: 8797912345,
      workPhone: 1234509876,
      others: [1, 2, 3, 4, 5],
    },
    others: [1, 2, 3, 4, 5],
  },
};

var newPersonalDetails = personalDetail;

console.log(deepClone(personalDetail));
console.log(deepClone(personalDetail) === personalDetail);
console.log(newPersonalDetails === personalDetail);
