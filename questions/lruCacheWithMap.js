//https://leetcode.com/problems/lru-cache/

var LRUCache = function (capacity) {
  this.size = 0;
  this.cache = new Map();

  LRUCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
      let value = this.cache.get(key);
      this.cache.delete(key); // delete and reinsert to make it most recently used
      this.cache.set(key, value);
      return value;
    }
    return -1;
  };

  LRUCache.prototype.put = function (key, value) {
    if (!this.cache.has(key) && this.size == capacity) {
      this.cache.delete(this.cache.keys().next().value);
      //console.log(this.cache);
      this.size--;
    }

    if (this.cache.has(key)) {
      this.cache.delete(key);
      this.size--;
    }

    this.size++;
    this.cache.set(key, value);
  };
};

var obj = new LRUCache(3);
obj.put(1, 1);
obj.put(2, 2);
obj.put(3, 3);
console.log(obj.get(1));
obj.put(4, 4);
console.log(obj);
