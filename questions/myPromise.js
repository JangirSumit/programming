function MyPromise(executer) {
  let onResolveCallback;
  let onRejectCallback;
  let isCalled = false;

  this.then = function (callback) {
    onResolveCallback = callback;
    return this;
  };

  this.catch = function (callback) {
    onRejectCallback = callback;
    return this;
  };

  function resolve(val) {
    if (typeof onResolveCallback === "function" && !isCalled) {
      onResolveCallback(val);
      isCalled = true;
    }
  }

  function reject(err) {
    if (typeof onRejectCallback === "function" && !isCalled) {
      onRejectCallback(val);
      isCalled = true;
    }
  }

  executer(resolve, reject);
}

// Handle Promise.resolve and promise.reject also

var promise = new MyPromise(function (resolve, reject) {
  setTimeout(() => {
    console.log("callback...");
    resolve("Done");
  }, 3000);
}).then((result) => {
  console.log(result);
});
