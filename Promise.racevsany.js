// Promise.race and Promise.any do different things:

// Promise.race is settled as soon as any of the promises you feed it settle, whether they are fulfilled or rejected.

// Promise.any is settled as soon as any of the promises you feed it is fulfilled or they are all rejected, in which case it's rejected with an AggregateError.

// The chief differences are:

// race's promise is rejected when the first promise you give it is rejected; any's promise isn't, because another promise may be fulfilled instead.

// any's promise's rejection reason will be an AggregateError, but race's rejection reason will be the rejection reason from the first promise that was rejected.

// So if you pass them both an array of two promises, and one of the promises is rejected, then afterward the other promise is fulfilled, the promise from Promise.race will be rejected (because the first promise to settle was rejected) and the promise from Promise.any will be fulfilled (because although the first promise was rejected, the second was fulfilled). E.g.:



const a = new Promise((_, reject) => setTimeout(reject,  100, new Error("a")));
const b = new Promise((resolve)   => setTimeout(resolve, 200, "b"));

Promise.race([a, b]).then(
    value => {
        console.log(`race: fulfilled with ${value}`);
    },
    reason => {
        console.log(`race: rejected with ${reason.message}`);
    }
);

Promise.any([a, b]).then(
    value => {
        console.log(`any:  fulfilled with ${value}`);
    },
    reason => {
        console.log(`any:  rejected with ${reason.errors.map(({message}) => message).join()}`);
    }
);


// race: rejected with a
// any:  fulfilled with b
