// 1. variables declarations

var x = 10;
console.log(typeof x);
var y;
console.log(typeof y);
y = "";
console.log(typeof y);

x = {};
console.log(typeof x);

x = [1, 2];
console.log(typeof x);
console.log(Array.isArray(x));

x = true;
console.log(typeof x);

x = function name(params) {};
console.log(typeof x);

//---------------------------------

// 2. Conditional Statements

if (true) {
  console.log("Vinit");
} else {
  console.log("Dhiman");
}

x = 10;

switch (x) {
  case 10:
    console.log("printed 10");
    break;
  case 11:
    console.log("printed 11");

  default:
    console.log("printed 10");
    break;
}

//-------------------------------

// 3. Loops

var arr = [{ a: 1 }, { a: 2 }]; //5

for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]["a"]);
}

var index = 0;
while (index < arr.length) {
  console.log(arr[index]["a"]);
  index++;
}

//----------------------------
//1. sort

var arr = [2, 5, 8, 1, 2, 5, 6, 10];

arr.sort((a, b) => parseInt(a) - parseInt(b));
console.log(arr);

//2. filter
var arr = [2, 5, 8, 1, 2, 5, 6, 10];

// remove duplicates
var filteredValues = arr.filter((value, index) => arr.indexOf(value) == index);
console.log(filteredValues);

var gt5 = filteredValues.filter((value) => value > 5);
console.log(gt5);

//3. map
var arr = [2, 5, 8, 1, 2, 5, 6, 10];

var result = arr.map((value) => value * 5);
console.log(result);

//4. slice

console.log(arr.slice(1));
