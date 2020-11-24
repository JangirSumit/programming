const { SEND_MESSAGE } = require("./constants");

const initialState = {
  message: "Hi",
};

const messageReducer = function (state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        message: action.message,
      };

    default:
      return {
        message: "",
      };
  }
};

module.exports = messageReducer;
