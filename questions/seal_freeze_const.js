const obj1 = { x: 10 };
//1. can add new properties
obj1.y = 20;
//2. can change existing value of a property
obj1.x = 20;
//3. can't re assign new object/val
// obj1 = { x: 10 }; //Uncomment to see error

delete obj1.x;
console.log(obj1);

/***************************************/

var obj2 = { x: 10 };
Object.freeze(obj2);
//1. can't add new properties, no error
obj2.y = 20;
//2. can't change existing value of a property, but no error
obj2.x = 20;
//3. can re assign new object/val
obj2 = { x: 30 };
//4. delete existing prop
delete obj2.x;
console.log(obj2);

/***************************************/

var obj3 = { x: 10 };
Object.seal(obj3);
//1. can't add new properties, no error
obj3.y = 20;
//2. can change existing value of a property
obj3.x = 20;
//3. can re assign new object/val
obj3 = { x: 30 };
//4. can't delete existing prop
delete obj2.x;
console.log(obj3);
