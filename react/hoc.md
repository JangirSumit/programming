A **Higher-Order Component (HOC)** in React is a pattern used to reuse component logic. An HOC is a function that takes a component as an argument and returns a new component, usually wrapping the input component to provide enhanced functionality.

Here’s a good example to help understand HOCs:

---

### Example: Adding Loading State to a Component

Let's create an HOC that adds a loading state to a wrapped component.

#### Step 1: Create the HOC

```tsx
import React from "react";

// The HOC function
function withLoading<T>(WrappedComponent: React.ComponentType<T>) {
  return function ComponentWithLoading(props: T & { isLoading: boolean }) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    // Render the wrapped component with the remaining props
    return <WrappedComponent {...(restProps as T)} />;
  };
}
```

#### Step 2: Create a Wrapped Component

Here’s a simple component that displays user data:

```tsx
interface UserProps {
  name: string;
  age: number;
}

const UserDetails: React.FC<UserProps> = ({ name, age }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
};
```

#### Step 3: Use the HOC

Now wrap the `UserDetails` component using the `withLoading` HOC:

```tsx
const UserDetailsWithLoading = withLoading(UserDetails);

// Usage
const App: React.FC = () => {
  const isLoading = true; // Simulating loading state
  const userData = { name: "John Doe", age: 30 };

  return (
    <div>
      <h1>User Information</h1>
      <UserDetailsWithLoading isLoading={isLoading} {...userData} />
    </div>
  );
};

export default App;
```

---

### Explanation:

1. **HOC (`withLoading`)**: Enhances any component by adding a loading state.
2. **Wrapped Component (`UserDetails`)**: Contains the core logic of rendering user information.
3. **Enhanced Component (`UserDetailsWithLoading`)**: Adds a "Loading..." message until the `isLoading` prop becomes `false`.

---

### Why is this a Good Example?
- **Reusability**: The HOC can be reused for any component that needs a loading state.
- **Separation of Concerns**: The HOC handles the loading logic, while the original component focuses on rendering content.
- **Type Safety**: TypeScript ensures that props are correctly passed to the wrapped component.

Let me know if you'd like more examples or extensions of this concept! 😊