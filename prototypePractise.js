function Person(name, age) {
  this.name = name;
  this.age = age;

  this.print = function () {
    console.log(this.name + " " + this.age);
  };
}

const p1 = new Person("Sumit", 29);
const p2 = new Person("Jyoti", 27);

p2.__proto__.printAge = function () {
  console.log(this.age);
};

p1.print();
p2.print();

p2.printAge();
p1.printAge();

console.log(Person.prototype);
