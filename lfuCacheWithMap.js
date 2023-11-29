//https://leetcode.com/problems/lfu-cache/description/

/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.size = 0;
  this.cache = new Map();
  this.occurances = new Map();
  /**
   * @param {number} key
   * @return {number}
   */
  LFUCache.prototype.get = function (key) {
    let value = this.cache.get(key);

    if (value) {
        this.occurances
    }

    return value || -1;
  };

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  LFUCache.prototype.put = function (key, value) {};
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
