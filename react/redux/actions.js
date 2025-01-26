const {
  INCREASE_BY_1,
  INCREASE_BY_5,
  DECREASE_BY_1,
  DECREASE_BY_5,
  RESET,
  SEND_MESSAGE,
} = require("./constants");

const increaseBy1 = function () {
  return {
    type: INCREASE_BY_1,
  };
};

const increaseBy5 = function () {
  return {
    type: INCREASE_BY_5,
  };
};

const decreaseBy1 = function () {
  return {
    type: DECREASE_BY_1,
  };
};

const decreaseBy5 = function () {
  return {
    type: DECREASE_BY_5,
  };
};

const reset = function () {
  return {
    type: RESET,
  };
};

const sendMessage = function (message) {
  return {
    type: SEND_MESSAGE,
    message,
  };
};

module.exports = {
  increaseBy1,
  increaseBy5,
  decreaseBy1,
  decreaseBy5,
  reset,
  sendMessage,
};
