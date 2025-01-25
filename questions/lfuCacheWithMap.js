//https://leetcode.com/problems/lfu-cache/description/

/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
  this.useCount = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    let value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    this.useCount.set(key, this.useCount.get(key) + 1);
    return value;
  }
  return -1;
};

LFUCache.prototype.getLeastUsedKey = function () {
  let min = Number.MAX_VALUE;
  let key = -1;
  for (let [k, v] of this.useCount) {
    if (v < min) {
      min = v;
      key = k;
    }
  }
  return key;
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if(this.capacity > this.cache.size) {
    this.cache.set(key, value);
    this.useCount.set(key, 1);
  }else{
    let leastUsedKey = this.getLeastUsedKey();
    this.cache.delete(leastUsedKey);
    this.cache.set(key, value);
    this.useCount.set(key, 1);
  }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
