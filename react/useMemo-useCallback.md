### **🔹 `useCallback` vs `useMemo` in React**  
Both `useCallback` and `useMemo` are React hooks used for **performance optimization**, but they serve different purposes. Let’s break it down. 🚀  

---

## **1️⃣ `useCallback`**
✅ **Returns a memoized function**  
✅ Used to **prevent unnecessary re-creation of functions**  

### **🔸 When to use?**  
- When passing **functions as props** to child components (to prevent unnecessary re-renders).  
- When using functions inside `useEffect` dependencies.  

### **🔹 Syntax**
```jsx
const memoizedCallback = useCallback(() => {
  // Function logic
}, [dependencies]);
```

### **🔹 Example**
```jsx
import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child Rendered");
  return <button onClick={onClick}>Click Me</button>;
});

const Parent = () => {
  const [count, setCount] = useState(0);

  // Without useCallback, this function would be re-created on every render
  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
};

export default Parent;
```
### **🔹 Why use `useCallback` here?**
- Without `useCallback`, `handleClick` **would be re-created** every render, causing the `Child` component to **re-render unnecessarily**.  
- With `useCallback`, the function **remains the same** between renders (unless dependencies change).  

---

## **2️⃣ `useMemo`**
✅ **Returns a memoized value**  
✅ Used to **optimize expensive calculations**  

### **🔸 When to use?**  
- When **computing expensive values** that don’t need to be recalculated on every render.  
- When optimizing **derived state values**.  

### **🔹 Syntax**
```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(arg1, arg2), [dependencies]);
```

### **🔹 Example**
```jsx
import React, { useState, useMemo } from "react";

const ExpensiveCalculation = (num) => {
  console.log("Computing...");
  return num * 2;
};

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  // Without useMemo, this would run on every render
  const computedValue = useMemo(() => ExpensiveCalculation(number), [number]);

  return (
    <div>
      <p>Computed Value: {computedValue}</p>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
    </div>
  );
};

export default MemoExample;
```
### **🔹 Why use `useMemo` here?**
- Without `useMemo`, `ExpensiveCalculation` **would run on every render**, even when `count` changes.  
- With `useMemo`, it **only runs when `number` changes**.  

---

## **🎯 Key Differences**
| Feature       | `useCallback` | `useMemo` |
|--------------|--------------|-----------|
| **Returns**  | A memoized function | A memoized value |
| **Purpose**  | Prevents unnecessary function re-creation | Prevents unnecessary recalculations |
| **Use case** | Optimizing function dependencies (especially when passing as props) | Caching expensive calculations |
| **When to use?** | When passing functions to child components | When performing expensive computations |

### **🚀 TL;DR**
- **Use `useCallback` when passing functions as props** to prevent unnecessary re-renders.  
- **Use `useMemo` for expensive calculations** to avoid recalculating values unnecessarily.  

Let me know if you need further clarification! 🚀