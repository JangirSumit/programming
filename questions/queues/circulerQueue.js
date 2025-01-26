//https://leetcode.com/problems/design-circular-queue/description/
/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.q = [];

    this.enQueue  = function(value){
        if(this.q.length >= k)
            return false;
        
        this.q.push(value);
        return true;
    };

    this.deQueue = function(){
        if(this.q.length <= 0)
            return false;

        this.q.shift();
        return true;
    };

    this.Front = function(){
        return this.q.length == 0 ? -1 : this.q.at(0);
    };

    this.Rear = function(){
        return this.q.length == 0 ? -1 : this.q.at(-1);
    };

    this.isEmpty = function(){
        return this.q.length == 0;
    };

    this.isFull = function(){
        return this.q.length == k;
    };
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */