const redux = require("redux");
const {
  INCREASE_BY_1,
  INCREASE_BY_5,
  DECREASE_BY_1,
  DECREASE_BY_5,
  RESET,
  SEND_MESSAGE,
} = require("./constants");
const reducer = require("./reducer");

// Create Store
const createStore = redux.createStore;
const store = createStore(reducer);

// Subscribe to the Store
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: INCREASE_BY_1 });
store.dispatch({ type: INCREASE_BY_5 });
store.dispatch({ type: RESET });
store.dispatch({ type: DECREASE_BY_1 });
store.dispatch({ type: DECREASE_BY_5 });

store.dispatch({ type: SEND_MESSAGE, message: "Hello" });
