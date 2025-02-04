**Render props** is a React design pattern for sharing logic between components using a **prop that takes a function**. The function provided as the render prop allows you to dynamically decide what to render based on shared or reusable logic.

---

### When to Use Render Props

Use render props when you need to:

1. Share reusable logic between components (e.g., stateful logic, event handling).
2. Avoid duplication and enhance code flexibility.
3. Allow parent components to control how children are rendered while delegating logic to reusable components.

---

### Basic Example

```tsx
type RenderProps = {
  render: (count: number, increment: () => void) => React.ReactNode;
};

const Counter = ({ render }: RenderProps) => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount((prev) => prev + 1);

  return <>{render(count, increment)}</>;
};

const App = () => (
  <Counter
    render={(count, increment) => (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    )}
  />
);

export default App;
```

- **Key Points**:
  - The `Counter` component manages the `count` state and exposes the logic (`count`, `increment`) through the `render` function prop.
  - The parent component (`App`) decides how the `Counter` component is rendered.

---

### Example 2: Fetching Data with Render Props

```tsx
type FetchProps = {
  url: string;
  render: (data: any, loading: boolean) => React.ReactNode;
};

const Fetch = ({ url, render }: FetchProps) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return <>{render(data, loading)}</>;
};

const App = () => (
  <Fetch
    url="https://jsonplaceholder.typicode.com/posts/1"
    render={(data, loading) => (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </div>
        )}
      </div>
    )}
  />
);

export default App;
```

- **Key Points**:
  - The `Fetch` component handles fetching data and exposes `data` and `loading` through the `render` prop.
  - The parent controls how the fetched data is displayed.

---

### Comparison: Render Props vs. Other Patterns

#### 1. **Render Props vs. Higher-Order Components (HOCs)**
- Render props:
  - Allow more flexibility in how the UI is structured.
  - Pass functionality and data via a render function.
- HOCs:
  - Wrap components and inject props.

```tsx
// HOC Example
const withCounter = (Component) => {
  return () => {
    const [count, setCount] = React.useState(0);
    const increment = () => setCount((prev) => prev + 1);

    return <Component count={count} increment={increment} />;
  };
};

const CounterDisplay = ({ count, increment }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
);

export default withCounter(CounterDisplay);
```

#### 2. **Render Props vs. Custom Hooks**
- Render props:
  - Pass logic and state via a component.
  - Can make JSX structure more nested.
- Custom hooks:
  - Share logic without affecting the component tree.
  - Provide cleaner syntax.

```tsx
// Custom Hook Example
const useCounter = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((prev) => prev + 1);
  return { count, increment };
};

const CounterDisplay = () => {
  const { count, increment } = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```

---

### Benefits of Render Props

1. **Reusability**: Encapsulate complex logic and share it across components.
2. **Decoupled Rendering**: Parent components control rendering, enhancing flexibility.
3. **Fine-Grained Control**: Customize UI behavior per usage scenario.

---

### Drawbacks of Render Props

1. **Verbose Syntax**: Can lead to deeply nested components ("wrapper hell").
2. **Performance Concerns**: Anonymous functions (used in the `render` prop) may cause unnecessary re-renders.
   - **Solution**: Use `React.memo` or `useCallback` where needed.

---

### Advanced Example: Combining Context API with Render Props

```tsx
const AuthContext = React.createContext({ user: null });

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  const login = (username) => setUser({ name: username });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthConsumer = ({ render }) => (
  <AuthContext.Consumer>
    {(auth) => render(auth)}
  </AuthContext.Consumer>
);

const App = () => (
  <AuthProvider>
    <AuthConsumer
      render={({ user, login, logout }) => (
        <div>
          {user ? (
            <div>
              <p>Welcome, {user.name}</p>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <button onClick={() => login("John")}>Login</button>
          )}
        </div>
      )}
    />
  </AuthProvider>
);
```

---

### Summary

- **Render props** is a powerful pattern for sharing logic in React components.
- It shines when you need flexibility in rendering while encapsulating reusable logic.
- Consider alternatives like custom hooks for simpler and more modern approaches in function components.

Would you like to explore examples combining render props with state management libraries like Redux or Zustand? 😊

-----------------------------------------


### **🔹 React Render Props**
Render props is a pattern in React where a component takes a function as a prop and calls it to render UI dynamically. This helps in **code reusability** and **logic sharing** between components.

---

## **🛠 Example: Mouse Tracker (Sharing State)**
Here’s a **render props** example where a `MouseTracker` component tracks the mouse position and shares it with another component via a function.

### **1️⃣ Create the MouseTracker Component**
```jsx
import React, { useState } from "react";

const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
    {render(position)}
  </div>;
};

export default MouseTracker;
```
- `MouseTracker` tracks the mouse position.
- Instead of rendering UI itself, it calls the `render` function prop.

---

### **2️⃣ Use `MouseTracker` in Another Component**
```jsx
import React from "react";
import MouseTracker from "./MouseTracker";

const App = () => {
  return (
    <MouseTracker
      render={(position) => (
        <h1>Mouse Position: {position.x}, {position.y}</h1>
      )}
    />
  );
};

export default App;
```
- Here, `render` is a function that receives `position` and returns JSX.
- The `MouseTracker` component controls **when and how** the function is called.

---

## **🎯 When to Use Render Props?**
✅ When multiple components need **shared logic** (e.g., tracking, fetching, subscriptions).  
✅ When using **HOCs (Higher Order Components) becomes complex**.  
✅ When needing **more control over what gets rendered**.  

Would you like an example for handling API data using Render Props? 🚀