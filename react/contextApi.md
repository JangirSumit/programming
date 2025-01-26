The **React Context API** is a powerful feature that allows you to share state or data between components without having to pass props manually at every level of the component tree. It provides a way to efficiently manage global state in a React application.

---

### Key Concepts in Context API

1. **Context**: A container for shared state or values.
2. **Provider**: Supplies the context value to its children.
3. **Consumer**: Retrieves and uses the context value.
4. **`useContext` Hook**: Simplifies access to context in function components.

---

### Example: Theme Context with Light and Dark Modes

#### Step 1: Create the Context

```tsx
import React, { createContext, useState, useContext } from "react";

// Create the context
const ThemeContext = createContext<{ theme: string; toggleTheme: () => void }>({
  theme: "light",
  toggleTheme: () => {},
});
```

---

#### Step 2: Create a Provider

```tsx
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
```

---

#### Step 3: Use the Context in Components

```tsx
const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Toggle to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};
```

---

#### Step 4: Wrap Your App with the Provider

```tsx
import React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "./ThemeProvider";
import ThemeToggleButton from "./ThemeToggleButton";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>React Context API Example</h1>
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```

---

### Benefits of Context API

1. **Avoids Prop Drilling**: Context eliminates the need to pass props down manually through multiple levels of components.
2. **Global State Management**: Useful for themes, authentication, language settings, etc.
3. **Built-In React Feature**: No need for external state management libraries like Redux for simpler cases.

---

### When to Use the Context API

- When you have global state or data shared across multiple components.
- Examples: themes, user authentication, language preferences, and app settings.

Let me know if you'd like to explore a more advanced use case! 😊