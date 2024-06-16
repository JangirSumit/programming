function Employee(fName, lName) {
  this.fName = fName;
  this.lName = lName;
}

const e1 = new Employee("Sumit", "Jangir");
const e2 = Employee("Jyoti", "Jangid");

console.log(e1);
console.log(e2);

console.log(fName, lName);

Employee.call(this, "Jyoti", "Jangid1");
console.log(fName, lName);
