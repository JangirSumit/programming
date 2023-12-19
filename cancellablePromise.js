class CancellablePromise {
  constructor(executor) {
    this.isCancelled = false;
    this.promise = new Promise((resolve, reject) => {
      this.cancel = () => {
        this.isCancelled = true;
        reject(new Error("Promise cancelled"));
      };
      executor(resolve, reject, this.cancel);
    });
  }

  then(onFulfilled, onRejected) {
    return this.promise.then(onFulfilled, onRejected);
  }

  catch(onRejected) {
    return this.promise.catch(onRejected);
  }

  finally(onFinally) {
    return this.promise.finally(onFinally);
  }
}

// Example usage:
const cancellablePromise = new CancellablePromise((resolve, reject, cancel) => {
  const timeoutId = setTimeout(() => {
    if (!cancellablePromise.isCancelled) {
      resolve("Promise resolved successfully");
    }
  }, 2000);

  // Attach cancellation logic
  cancellablePromise.cancel = () => {
    clearTimeout(timeoutId);
    reject(new Error("Promise cancelled"));
  };
});

// To cancel the promise
cancellablePromise.cancel();
