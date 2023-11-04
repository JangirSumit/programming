// https://leetcode.com/problems/design-circular-deque/description/

/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
    let q = [];

    MyCircularDeque.prototype.insertFront = function (value) {
        if(q.length >= k)
            return false;
        
        q.unshift(value);
        return true;
    };

    /** 
     * @param {number} value
     * @return {boolean}
     */
    MyCircularDeque.prototype.insertLast = function (value) {
        if(q.length >= k)
            return false;
        
        q.push(value);
        return true;
    };

    /**
     * @return {boolean}
     */
    MyCircularDeque.prototype.deleteFront = function () {
        if(q.length <= 0)
            return false;
        
        q.shift();
        return true;
    };

    /**
     * @return {boolean}
     */
    MyCircularDeque.prototype.deleteLast = function () {
        if(q.length <= 0)
            return false;
        
        q.pop();
        return true;
    };

    /**
     * @return {number}
     */
    MyCircularDeque.prototype.getFront = function () {
        return q.length == 0 ? -1 : q.at(0);
    };

    /**
     * @return {number}
     */
    MyCircularDeque.prototype.getRear = function () {
        return q.length == 0 ? -1 : q.at(-1);
    };

    /**
     * @return {boolean}
     */
    MyCircularDeque.prototype.isEmpty = function () {
        return q.length == 0;
    };

    /**
     * @return {boolean}
     */
    MyCircularDeque.prototype.isFull = function () {
        return q.length == k
    };

};


/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */