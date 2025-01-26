
var FrontMiddleBackQueue = function () {
    let q = [];

    FrontMiddleBackQueue.prototype.pushFront = function (val) {
        q.unshift(val);
    };

    /** 
     * @param {number} val
     * @return {void}
     */
    FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
        let i = parseInt((q.length) / 2);
        q.splice(i, 0, val);
    };

    /** 
     * @param {number} val
     * @return {void}
     */
    FrontMiddleBackQueue.prototype.pushBack = function (val) {
        q.push(val);
    };

    /**
     * @return {number}
     */
    FrontMiddleBackQueue.prototype.popFront = function () {
        if (q.length == 0) return -1;

        return q.shift();
    };

    /**
     * @return {number}
     */
    FrontMiddleBackQueue.prototype.popMiddle = function () {
        if (q.length == 0) return -1;

        let i = q.length % 2 == 0 ? parseInt((q.length - 1) / 2) : parseInt((q.length) / 2);
        return q.splice(i, 1);
    };

    /**
     * @return {number}
     */
    FrontMiddleBackQueue.prototype.popBack = function () {
        if (q.length == 0) return -1;

        return q.pop();
    };
};


/** 
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */