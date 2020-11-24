const combineReducers = require("redux").combineReducers;

const messageReducer = require("./messageReducer");
const counterReducer = require("./counterReducer");

const reducer = combineReducers({
  message: messageReducer,
  counter: counterReducer,
});

module.exports = reducer;
