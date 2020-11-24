const redux = require("redux");
const {
  increaseBy1,
  increaseBy5,
  decreaseBy1,
  decreaseBy5,
  reset,
  sendMessage,
} = require("./actions");
const reducer = require("./reducer");

console.log(sendMessage);

// Create Store
const createStore = redux.createStore;
const store = createStore(reducer);

// Subscribe to the Store
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increaseBy1());
store.dispatch(increaseBy5());
store.dispatch(reset());
store.dispatch(decreaseBy1());
store.dispatch(decreaseBy5());

store.dispatch(sendMessage("Hello"));
