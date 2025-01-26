const {
  INCREASE_BY_1,
  INCREASE_BY_5,
  DECREASE_BY_1,
  DECREASE_BY_5,
  RESET,
} = require("./constants");

const initialState = {
  counter: 1,
};

const counterReducer = function (state = initialState, action) {
  switch (action.type) {
    case INCREASE_BY_1:
      return {
        counter: state.counter + 1,
      };
    case INCREASE_BY_5:
      return {
        counter: state.counter + 5,
      };
    case DECREASE_BY_1:
      return {
        counter: state.counter - 1,
      };
    case DECREASE_BY_5:
      return {
        counter: state.counter - 5,
      };
    case RESET:
      return {
        counter: 1,
      };
    default:
      return state;
  }
};

module.exports = counterReducer;
