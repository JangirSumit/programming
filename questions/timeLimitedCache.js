//https://leetcode.com/problems/cache-with-time-limit/description/

class TimeLimitedCache {
    constructor() {
      this.cache = new Map();
      this.intervalCache = new Map();
  
      this.deleteKeys = this.deleteKeys.bind(this)
    }
  
    set(key, value, interval) {
      if (this.cache.has(key)) {
        clearInterval(this.intervalCache.get(key))
  
        this.cache.set(key, value);
        this.intervalCache.set(key, this.deleteKeys(key, interval));
  
        return true;
      }
  
      this.cache.set(key, value);
      this.intervalCache.set(key, this.deleteKeys(key, interval));
  
      return false;
    }
  
    deleteKeys(key, interval) {
      return setTimeout(() => {
        this.cache.delete(key);
        this.intervalCache.delete(key);
      }, interval);
    }
  
    get(key) {
      console.log(this.cache)
      return this.cache.get(key) || -1;
    }
  
    count() {
      console.log(this.cache);
      return this.cache.size;
    }
  }
  