In React, functional components use **hooks** to manage lifecycle events, replacing the class component lifecycle methods. Here's a quick overview of how lifecycle methods are handled in functional components:

1. **`useState`**: Used to manage state in functional components, similar to `this.state` in class components.
2. **`useEffect`**: Used to perform side effects like fetching data, subscribing to events, or manually updating the DOM. It replaces `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` from class components.

### Key Lifecycle Events in Functional Components:

#### 1. **Mounting** (similar to `componentDidMount`):
   - You can use `useEffect` to run code when the component mounts. This is similar to the `componentDidMount` lifecycle method in class components.

   ```js
   useEffect(() => {
     console.log('Component mounted');
   }, []); // Empty dependency array means this runs once on mount
   ```

#### 2. **Updating** (similar to `componentDidUpdate`):
   - The `useEffect` hook can be used to run code when the component updates, based on dependencies you specify.

   ```js
   useEffect(() => {
     console.log('Component updated');
   }, [someState]); // Runs when 'someState' changes
   ```

#### 3. **Unmounting** (similar to `componentWillUnmount`):
   - You can return a cleanup function inside `useEffect` to handle component unmounting.

   ```js
   useEffect(() => {
     return () => {
       console.log('Component unmounted');
     };
   }, []); // Cleanup when the component unmounts
   ```

### Example:

```js
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  useEffect(() => {
    console.log('Count updated:', count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};
```

In this example:
- The first `useEffect` is similar to `componentDidMount` and `componentWillUnmount`.
- The second `useEffect` is triggered whenever `count` changes, similar to `componentDidUpdate`.