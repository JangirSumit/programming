/**
 * Initialize your data structure here.
 */

var stack1 = [];
var stack2 = [];

var MyQueue = function () {};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  while (stack2.length) {
    stack1.push(stack2.pop());
  }
  stack1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (stack1 && stack1.length) {
    stack2.push(stack1.pop());
  }

  return stack2.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (stack1 && stack1.length) {
    stack2.push(stack1.pop());
  }

  return stack2[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  while (stack2.length) {
    stack1.push(stack2.pop());
  }

  return stack1 && stack1.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 *  */
var obj = new MyQueue();
obj.push(1);
obj.push(2);
var param_2 = obj.pop();
var param_3 = obj.peek();
var param_4 = obj.empty();

console.log(`${param_2} ${param_3} ${param_4}`);
