Managing **global state** in a React application is essential for sharing data across multiple components, especially when the application grows in complexity. React provides various ways to manage global state. Here are the most common approaches:

---

### 1. **Using React Context API**

**Context API** is built into React and allows you to share values across components without passing props manually at every level.

- **When to use**: Ideal for small to medium-sized apps where state needs to be shared between deeply nested components.
- **How it works**: You create a `Context` object and use `Provider` to wrap components that need access to the state.

**Example**:
```js
import React, { createContext, useState, useContext } from 'react';

// Create a Context
const AppContext = createContext();

// Create a Provider component
const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use context
const useAppContext = () => useContext(AppContext);

// Example of component that uses the context
const Profile = () => {
  const { user, setUser } = useAppContext();

  return (
    <div>
      <h1>{user ? `Hello, ${user.name}` : 'Please log in'}</h1>
      <button onClick={() => setUser({ name: 'John Doe' })}>
        Log In
      </button>
    </div>
  );
};

// App Component
const App = () => (
  <AppProvider>
    <Profile />
  </AppProvider>
);

export default App;
```

---

### 2. **Using Redux (External Library)**

**Redux** is a popular state management library that is used in larger applications where you need a more structured approach to global state.

- **When to use**: For larger apps with complex state management needs or when you need to manage a state that is shared across many components.
- **How it works**: It stores the entire state of your app in a centralized store and uses actions and reducers to modify the state.

**Example**:
```js
// actions.js
export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user,
});

// reducer.js
const initialState = { user: null };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;

// store.js
import { createStore } from 'redux';
import userReducer from './reducer';

const store = createStore(userReducer);

// App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './actions';

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{user ? `Hello, ${user.name}` : 'Please log in'}</h1>
      <button onClick={() => dispatch(setUser({ name: 'Jane Doe' }))}>
        Log In
      </button>
    </div>
  );
};

const App = () => (
  <Profile />
);

export default App;
```

---

### 3. **Using Recoil (External Library)**

**Recoil** is a relatively newer state management library that focuses on state management with atoms (units of state) and selectors (derived state).

- **When to use**: If you need more flexibility than Context API but want a simpler approach than Redux.
- **How it works**: Atoms hold state, and selectors allow you to compute derived state.

**Example**:
```js
import React from 'react';
import { atom, useRecoilState } from 'recoil';

// Define an atom
const userState = atom({
  key: 'userState', // unique ID
  default: null, // default value
});

const Profile = () => {
  const [user, setUser] = useRecoilState(userState);

  return (
    <div>
      <h1>{user ? `Hello, ${user.name}` : 'Please log in'}</h1>
      <button onClick={() => setUser({ name: 'Alice' })}>
        Log In
      </button>
    </div>
  );
};

// App Component
const App = () => (
  <Profile />
);

export default App;
```

---

### 4. **Using `useReducer` Hook**

`useReducer` is useful for handling complex state logic in React, and it’s particularly useful when the state changes depend on actions that are dispatched. While `useReducer` is typically used locally, it can be lifted up to the top level and combined with Context API to manage global state.

- **When to use**: For more complex state logic (e.g., when there are multiple actions that modify the state in different ways).
- **How it works**: It works similarly to Redux but is built into React.

**Example**:
```js
import React, { useReducer, useContext, createContext } from 'react';

// Define actions
const SET_USER = 'SET_USER';

// Reducer function
const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

// Context
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, { user: null });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to access context
const useAppContext = () => useContext(AppContext);

// Component
const Profile = () => {
  const { state, dispatch } = useAppContext();

  return (
    <div>
      <h1>{state.user ? `Hello, ${state.user.name}` : 'Please log in'}</h1>
      <button onClick={() => dispatch({ type: SET_USER, payload: { name: 'Bob' } })}>
        Log In
      </button>
    </div>
  );
};

// App Component
const App = () => (
  <AppProvider>
    <Profile />
  </AppProvider>
);

export default App;
```

---

### 5. **When to Choose What?**

- **Context API**: Best for small to medium-sized applications where state is shared across many components.
- **Redux**: Ideal for larger applications with complex state logic, or where you need a lot of middleware support (like for logging, analytics, etc.).
- **Recoil**: Suitable for more complex state management where you need fine-grained control over state and derived values, without the boilerplate of Redux.
- **`useReducer` + Context**: Use when you need to handle complex state transitions and prefer the simplicity of built-in React hooks over external libraries.

---

Each solution has its own strengths, and the right choice depends on the size and complexity of the application. For small apps, **Context API** is often sufficient, while larger apps may benefit from **Redux** or **Recoil**.