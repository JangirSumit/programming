## **🔹 React Portals: Rendering Outside the Root DOM**  

### **🔸 What is a Portal in React?**
A **portal** allows React components to be rendered **outside** their normal DOM hierarchy (i.e., outside the root `<div id="root">`). This is useful when you want a component (like a modal, tooltip, or popover) to break out of parent elements that might have **CSS overflow or z-index restrictions**.

### **🔹 How to Create a Portal?**
React provides the `ReactDOM.createPortal()` method to render a component outside its parent DOM node.

### **🔹 Syntax**
```jsx
ReactDOM.createPortal(child, container)
```
- `child` → The React component or elements to be rendered.  
- `container` → The **DOM node** where the component should be mounted.

---

## **🎯 Example: Creating a Modal using Portals**
Let's create a **modal component** using a portal.

### **1️⃣ Add a Separate `<div>` for Portals in `index.html`**
```html
<body>
  <div id="root"></div>
  <div id="portal-root"></div>  <!-- This is where the modal will be rendered -->
</body>
```

### **2️⃣ Create the `Modal.js` Component**
```jsx
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {children}
        <button onClick={onClose} style={styles.button}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root") // Rendering outside the root div
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Modal;
```

### **3️⃣ Use the `Modal` in `App.js`**
```jsx
import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>React Portals Example</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && <Modal onClose={() => setIsOpen(false)}>Hello from Modal!</Modal>}
    </div>
  );
};

export default App;
```

---

## **🛠 Why Use Portals?**
✅ **Escape parent CSS restrictions** (useful when a parent has `overflow: hidden` or `z-index` issues).  
✅ **Better accessibility** (placing modals or tooltips at the end of `<body>` ensures they don’t get hidden).  
✅ **Improved performance** (reduces unnecessary re-renders within deeply nested components).  

---

## **🚀 Final Thoughts**
- **Portals are best used for modals, tooltips, dropdowns, and popovers** that need to break out of their parent’s DOM.  
- **Event bubbling still works inside portals**, meaning events inside the portal will propagate up the React tree as expected.  

Would you like an example of event handling inside portals? 🚀