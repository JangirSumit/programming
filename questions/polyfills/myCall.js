Function.prototype.myCall = function (context, ...args) {
  // context.fn = this;
  // context.fn(...args);
  // delete context.fn;

  const symbol = Symbol();
  context[symbol] = this;
  const result = context[symbol](...args);
  delete context[symbol];

  return result;
};

function printName(place, country) {
  console.log(this);
  console.log(`My name is ${this.name} and I am from ${place}, ${country}`);
}

printName.call({ name: "Sumit Jangir" }, "Rajasthan", "India");
printName.myCall({ name: "Sumit Jangir" }, "Rajasthan", "India");
