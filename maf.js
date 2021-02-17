const users = [
  {
    name: "John",
    hobbies: ["singing", "walking", "playing guitar"],
  },
  {
    name: "Terry",
    hobbies: ["swimming", "playing guitar"],
  },
  {
    name: "Anna",
    hobbies: ["walking", "swimming", "playing guitar"],
  },
  {
    name: "Paul",
    hobbies: ["swimming", "singing"],
  },
];

const result_hobbies = {};

const result = users.map((u) => {
  if (u.hobbies && u.hobbies.length == 2) return u;
});

console.log(result);

users.forEach((u) => {
  for (let i = 0; i < u.hobbies.length; i++) {
    if (u.hobbies[i] in result_hobbies) {
      result_hobbies[u.hobbies[i]] = result_hobbies[u.hobbies[i]] + 1;
    } else {
      result_hobbies[u.hobbies[i]] = 1;
    }
  }
});

console.log(result_hobbies);

var result1 = users.reduce((a, u) => {
  console.log(a, u);
  for (let i = 0; i < u.hobbies.length; i++) {
    if (u.hobbies[i] in result1) {
      a[u.hobbies[i]] = result1[u.hobbies[i]] + 1;
    } else {
      a[u.hobbies[i]] = 1;
    }
  }
}, {});

console.log(result1);
