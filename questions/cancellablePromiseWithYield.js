//https://leetcode.com/problems/design-cancellable-function/submissions/1112956813/

/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
var cancellable = function (generator) {
  let canceled = false;

  return [
    () => (canceled = true),
    (async () => {
      let next = generator.next();

      while (!next.done) {
        try {
          let nextValue = await next.value;
          next = canceled
            ? generator.throw("Cancelled")
            : generator.next(nextValue);
        } catch (e) {
          next = generator.throw(e);
        }
      }

      return next.value;
    })(),
  ];
};

/**
 * function* tasks() {
 *   const val = yield new Promise(resolve => resolve(2 + 2));
 *   yield new Promise(resolve => setTimeout(resolve, 100));
 *   return val + 1;
 * }
 * const [cancel, promise] = cancellable(tasks());
 * setTimeout(cancel, 50);
 * promise.catch(console.log); // logs "Cancelled" at t=50ms
 */
