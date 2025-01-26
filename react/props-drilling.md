### **What is Prop Drilling?**

Prop drilling is a pattern in React where data is passed from a parent component to deeply nested child components through intermediary components that do not directly use that data. These intermediate components act as conduits for the data but don’t have any meaningful interaction with it.

This can lead to:

1. **Redundant Props**: Components passing data they don’t need.
2. **Code Complexity**: Maintaining the structure becomes harder as the component hierarchy grows.
3. **Tight Coupling**: Changes in data requirements may affect many components unnecessarily.

---

### **Example of Prop Drilling**

```tsx
const GrandParent = () => {
  const user = { name: "John", age: 30 };

  return <Parent user={user} />;
};

const Parent = ({ user }) => {
  return <Child user={user} />;
};

const Child = ({ user }) => {
  return (
    <div>
      <h1>User: {user.name}</h1>
      <p>Age: {user.age}</p>
    </div>
  );
};
```

Here:
- `GrandParent` passes the `user` data to `Parent`.
- `Parent` does not use the `user` data itself but passes it down to `Child`.

This works fine for small apps but can become cumbersome in larger applications with deeply nested component trees.

---

### **How to Avoid Prop Drilling**

#### 1. **React Context API**
The Context API provides a way to share data globally in the component tree, avoiding the need to pass props manually at every level.

**Example Using Context API**:
```tsx
const UserContext = React.createContext();

const GrandParent = () => {
  const user = { name: "John", age: 30 };

  return (
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  );
};

const Parent = () => {
  return <Child />;
};

const Child = () => {
  const user = React.useContext(UserContext);

  return (
    <div>
      <h1>User: {user.name}</h1>
      <p>Age: {user.age}</p>
    </div>
  );
};
```

- The `UserContext` allows the `Child` component to access the `user` data directly without the intermediate `Parent` component.

---

#### 2. **Custom Hooks**
Custom hooks can encapsulate logic and make it reusable across components without relying on prop drilling.

**Example Using Custom Hook**:
```tsx
const useUser = () => {
  return { name: "John", age: 30 };
};

const GrandParent = () => {
  return <Parent />;
};

const Parent = () => {
  return <Child />;
};

const Child = () => {
  const user = useUser();

  return (
    <div>
      <h1>User: {user.name}</h1>
      <p>Age: {user.age}</p>
    </div>
  );
};
```

- `useUser` centralizes user data access, avoiding props altogether.

---

#### 3. **State Management Libraries (e.g., Redux, Zustand, MobX)**
For larger applications, state management libraries help manage application-wide state and make it accessible without passing props manually.

**Example Using Redux**:
```tsx
import { Provider, useSelector } from "react-redux";
import { createStore } from "redux";

const userReducer = () => ({ name: "John", age: 30 });
const store = createStore(userReducer);

const GrandParent = () => (
  <Provider store={store}>
    <Parent />
  </Provider>
);

const Parent = () => <Child />;

const Child = () => {
  const user = useSelector((state) => state);

  return (
    <div>
      <h1>User: {user.name}</h1>
      <p>Age: {user.age}</p>
    </div>
  );
};
```

- The Redux `Provider` makes the global state accessible anywhere in the component tree.

---

#### 4. **Component Composition**
Instead of passing data deeply, you can compose components and pass only what's needed to the lower levels.

**Example Using Composition**:
```tsx
const Child = ({ user }) => (
  <div>
    <h1>User: {user.name}</h1>
    <p>Age: {user.age}</p>
  </div>
);

const Parent = ({ user }) => <Child user={user} />;

const GrandParent = () => {
  const user = { name: "John", age: 30 };

  return <Parent user={user} />;
};
```

- This approach minimizes unnecessary intermediate props but still works well for simple hierarchies.

---

#### 5. **Third-Party Libraries for Context-Like Solutions**
Libraries like **React Query** and **Recoil** can help manage data and state more effectively without relying on excessive prop drilling.

**Example Using React Query**:
```tsx
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

const fetchUser = async () => {
  return { name: "John", age: 30 };
};

const Child = () => {
  const { data: user } = useQuery("user", fetchUser);

  return (
    <div>
      <h1>User: {user.name}</h1>
      <p>Age: {user.age}</p>
    </div>
  );
};

const GrandParent = () => (
  <QueryClientProvider client={queryClient}>
    <Child />
  </QueryClientProvider>
);
```

---

### **Key Considerations**
- **Context API** is great for global, shared state.
- **Custom hooks** offer encapsulation for reusable logic.
- **State management libraries** are better for large-scale apps with complex state.
- Choose **composition** for simple use cases.

Would you like examples of combining these approaches, like using React Query with the Context API?