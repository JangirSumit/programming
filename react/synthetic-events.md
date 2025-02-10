In React, **Synthetic Events** are a wrapper around the browser’s native events. They provide a consistent event system that works across different browsers. React's event system is implemented using a mechanism called **event delegation**, where events are attached to the root DOM rather than individual elements.  

## 🔹 Why Use Synthetic Events?  
1. **Cross-Browser Compatibility** → React normalizes event properties across browsers.  
2. **Performance Optimization** → React uses **event pooling** to reuse event objects.  
3. **Consistent API** → React provides the same interface regardless of the platform.  

## 🔹 Example: Handling Synthetic Events  
```jsx
import React from "react";

function MyComponent() {
  const handleClick = (event) => {
    console.log("Button clicked!", event); // Synthetic event object
    console.log("Event Type:", event.type);
    console.log("Native Event:", event.nativeEvent); // Access the original event
  };

  return <button onClick={handleClick}>Click me</button>;
}

export default MyComponent;
```
### 🔹 Event Pooling (Performance Optimization)
React **reuses** event objects to improve performance. After the event callback executes, the `event` object is **recycled**.  
To keep the event properties available asynchronously, you need to **store** values before React reuses the event.  

```jsx
const handleClick = (event) => {
  event.persist(); // Prevent event pooling
  setTimeout(() => {
    console.log(event.type); // Now it's accessible!
  }, 1000);
};
```

## 🔹 Common Synthetic Events
React supports most native DOM events:  
| Event Type  | Handler |
|------------|----------|
| Click | `onClick` |
| Change | `onChange` |
| Focus | `onFocus` |
| Key Press | `onKeyPress` |
| Mouse Enter | `onMouseEnter` |
| Submit | `onSubmit` |

Would you like a deeper dive into event delegation or how React handles event bubbling? 🚀