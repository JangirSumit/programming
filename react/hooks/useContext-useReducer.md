Using **Context API with `useReducer`** is a great way to manage global state in a React application. It helps in state sharing between components without prop drilling.

---

## **🔹 Steps to Implement Context API with `useReducer`**
1. **Create a Context**
2. **Create a Reducer Function**
3. **Provide Context to Components**
4. **Consume Context in Components**

---

## **🛠 Example: Global Counter using Context API and `useReducer`**
### **1️⃣ Create Context & Reducer (CounterContext.js)**
```jsx
import React, { createContext, useReducer } from "react";

const CounterContext = createContext();

const initialState = { count: 0 };

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
```

---

### **2️⃣ Provide Context to the Application (App.js)**
```jsx
import React from "react";
import { CounterProvider } from "./CounterContext";
import Counter from "./Counter";

const App = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

export default App;
```

---

### **3️⃣ Consume Context in Components (Counter.js)**
```jsx
import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>➕ Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>➖ Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>🔄 Reset</button>
    </div>
  );
};

export default Counter;
```

---

## **🎯 Why Use Context API with `useReducer`?**
✅ **Avoids prop drilling** (No need to pass props down multiple levels).  
✅ **Centralized state management** without external libraries like Redux.  
✅ **Easier to maintain complex state logic** compared to `useState`.  

Would you like to extend this with persistent state using `localStorage`? 🚀