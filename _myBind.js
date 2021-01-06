Function.prototype.myBind = function (...args) {
  let boundFunction = this;
  let params = args.slice(1);

  return function (...args2) {
    boundFunction.apply(args[0], [...params, ...args2]);
  };
};

let printName = function (place, country) {
  console.log(`My name is ${this.name} and I am from ${place}, ${country}`);
};

let print = printName.bind({ name: "Sumit Jangir" }, "Rajasthan");
print("India");

let print1 = printName.myBind({ name: "Sumit Jangir" }, "Rajasthan");
print1("India");
