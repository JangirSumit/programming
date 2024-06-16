Function.prototype.myBind = function (...args) {
  let bindTo = this;
  let params = args.slice(1);

  return function (...args2) {
    return bindTo.apply(args[0], params.concat(args2));
  };
};

function getNames(fName, lName, country) {
  this.fName = fName;
  this.lName = lName;
  this.country = country;
}

let printName = function (place, country) {
  console.log(`My name is ${this.name} and I am from ${place}, ${country}`);
};

let print = printName.bind({ name: "Sumit Jangir" }, "Churu, Rajasthan");
print("India");

let print1 = printName.myBind({ name: "Sumit Jangir" }, "Rajasthan");
print1("India");

// -----------------------------------------------

console.log("\n\n--------Infinte Sum----------\n\n");

function sum(a) {
  return function inner(b) {
    if (b) {
      a = a + b;
      return inner;
    } else {
      return a;
    }
  };
}

console.log(sum(1)());
console.log(sum(1)(2)());
console.log(sum(1)(2)(3)());
console.log(sum(1)(2)(3)(4)());

// -----------------------------------------------

console.log("\n\n--------generic Currying----------\n\n");

function currify(fn) {
  return function curry(...args) {
    if (args.length >= fn.length) return fn.apply(this, args);
    else return curry.bind(this, ...args);
  };
}

function mul(a, b, c) {
  return a * b * c;
}

let curriedMul = currify(mul);
console.log(curriedMul(1, 2, 3));
console.log(curriedMul(1, 2)(3));
console.log(curriedMul(1)(2, 3));

// -----------------------------------------------

console.log("\n\n--------find anagrams----------\n\n");

function swap(string, i, j) {
  let str = string.split("");
  let temp = str[i];
  str[i] = str[j];
  str[j] = temp;

  return str.join("");
}

function anagrams(string) {
  let arr = [];
  function inner(string, l, m) {
    if (l == m) {
      arr.push(string);
      return string;
    }

    for (let i = l; i <= m; i++) {
      const str = swap(string, i, m);
      inner(str, l + 1, m);
    }
  }

  inner(string, 0, string.length - 1);
  return arr;
}

console.log(anagrams("abc"));

// -----------------------------------------------

console.log("\n\n--------debounce----------\n\n");

function debounce(fn, delay) {
  let timerId = null;

  return function (...args) {
    if (timerId) {
      clearInterval(timerId);
    }

    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
}

// -----------------------------------------------

console.log("\n\n--------throttle----------\n\n");

function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    let currentCall = new Date().getTime();

    if (currentCall - lastCall > delay) {
      fn(...args);
      lastCall = currentCall;
    }
  };
}

function printSUmit(i) {
  console.log(i);
}

let throttledFunc = throttle(printSUmit, 1000);
let i = 0;
setInterval(() => {
  console.log("Inside set interval");
  throttledFunc(i++);
}, 500);
