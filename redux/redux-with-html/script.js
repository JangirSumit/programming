const ACTION_BUY_CAKE = "ACTION_BUY_CAKE";
const ACTION_FETCH_DATA = "ACTION_FETCH_DATA";
const ACTION_UPDATE_ERROR = "ACTION_UPDATE_ERROR";
const ACTION_UPDATE_ISLOADING = "ACTION_UPDATE_ISLOADING";

const initialState = {
  cakes: 10,
};

const fetchDataInitialState = {
  data: [],
  error: "",
  isLoading: false,
};

function buyCake() {
  return {
    type: ACTION_BUY_CAKE,
    info: "",
  };
}

function updateData(data) {
  return {
    type: ACTION_FETCH_DATA,
    info: data,
  };
}

function updateError(error) {
  return {
    type: ACTION_UPDATE_ERROR,
    info: error,
  };
}

function updateIsLoading(isloading) {
  return {
    type: ACTION_UPDATE_ERROR,
    isLoading: isloading,
  };
}

function fetchData() {
  return (dispatch) => {
    dispatch(updateIsLoading(true));
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(updateIsLoading(false));
        dispatch(updateError(""));
        dispatch(updateData(data));
      })
      .catch((error) => {
        dispatch(updateError(error.error));
      });
  };
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_BUY_CAKE:
      return {
        ...state,
        cakes: state.cakes - 1,
      };

    default:
      return state;
  }
};

const dataReducer = (state = fetchDataInitialState, action) => {
  switch (action.type) {
    case ACTION_FETCH_DATA:
      return {
        ...state,
        data: action.info,
      };
    case ACTION_UPDATE_ERROR:
      return {
        ...state,
        error: action.info,
      };
    case ACTION_UPDATE_ERROR:
      return {
        ...state,
        isLoading: action.info,
      };
    default:
      return state;
  }
};

const reducer = Redux.combineReducers({
  cakes: cakeReducer,
  data: dataReducer,
});

const thunkMiddleware = ReduxThunk;
const store = Redux.createStore(
  reducer,
  Redux.applyMiddleware(thunkMiddleware)
);

document.getElementById("cakes").innerHTML = initialState.cakes;

document.getElementById("buyCakes").addEventListener("click", function () {
  store.dispatch(buyCake());
});

document.getElementById("fetchData").addEventListener("click", function () {
  store.dispatch(fetchData());
});

const unsubscribe = store.subscribe(() => {
  document.getElementById("cakes").innerHTML = store.getState().cakes.cakes;
  const data = store.getState().data;
  const dataElemet = document.getElementById("data");

  if (data && data.data.length) {
    dataElemet.innerHTML = data.data.map((d) => `<div>${d.title}</div>`);
  } else if (data.isLoading) {
    dataElemet.innerHTML = "Loading...";
  } else if (data.error) {
    dataElemet.innerHTML = "Error" + data.error;
  }
});
