//https://leetcode.com/problems/event-emitter/

class EventEmitter {
    constructor() {
        this.subscribers = new Map();
    }

    subscribe(eventName, callback) {
        let callbacks = this.subscribers.get(eventName) || [];

        this.subscribers.set(eventName, [...callbacks, callback]);
        return {
            unsubscribe: () => {
                let callbacks = this.subscribers.get(eventName) || [];
                callbacks = callbacks.filter((_) => _ != callback);

                if (callbacks && callbacks.length) {
                    this.subscribers.set(eventName, callbacks);
                } else {
                    this.subscribers.delete(eventName);
                }
            },
        };
    }

    emit(eventName, args = []) {
        if(!this.subscribers.has(eventName))
            return [];


        let callbacks = this.subscribers.get(eventName);
        let results = [];

        for (let i = 0; i < callbacks.length; i++) {
            results.push(callbacks[i](...args));
        }

        return results;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
