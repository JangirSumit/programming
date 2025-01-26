Custom hooks in React allow you to encapsulate and reuse stateful logic across components. They enhance code readability, reusability, and separation of concerns. Here are some **useful custom hook examples**:

---

### 1. **`useToggle`**: Toggle a Boolean Value
A simple hook to toggle between `true` and `false`.

```tsx
import { useState } from "react";

function useToggle(initialValue: boolean = false) {
  const [state, setState] = useState(initialValue);

  const toggle = () => setState((prev) => !prev);

  return [state, toggle] as const;
}

// Usage
const App: React.FC = () => {
  const [isVisible, toggleVisibility] = useToggle();

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>This is a toggleable text!</p>}
    </div>
  );
};
```

---

### 2. **`useFetch`**: Fetch Data from an API
A hook to handle fetching data from APIs with loading and error states.

```tsx
import { useState, useEffect } from "react";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage
const App: React.FC = () => {
  const { data, loading, error } = useFetch<{ name: string }[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.name}>{user.name}</li>
      ))}
    </ul>
  );
};
```

---

### 3. **`useDebounce`**: Debounce a Value
A hook to delay the execution of a function, useful for search inputs or APIs.

```tsx
import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

// Usage
const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log("API Call with:", debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
};
```

---

### 4. **`useLocalStorage`**: Manage Local Storage
A hook for syncing state with local storage.

```tsx
import { useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value: T) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue] as const;
}

// Usage
const App: React.FC = () => {
  const [name, setName] = useLocalStorage("name", "Guest");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name}!</p>
    </div>
  );
};
```

---

### 5. **`usePrevious`**: Get the Previous Value of a State
A hook to track the previous value of a variable.

```tsx
import { useRef, useEffect } from "react";

function usePrevious<T>(value: T) {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

// Usage
const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <p>
        Current: {count}, Previous: {prevCount}
      </p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};
```

---

### 6. **`useClickOutside`**: Detect Clicks Outside a Component
A hook to detect when a user clicks outside a specific element.

```tsx
import { useEffect, useRef } from "react";

function useClickOutside(callback: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [callback]);

  return ref;
}

// Usage
const App: React.FC = () => {
  const ref = useClickOutside(() => alert("Clicked outside!"));

  return (
    <div ref={ref} style={{ padding: "20px", border: "1px solid black" }}>
      Click inside this box
    </div>
  );
};
```

---

### Summary

These custom hooks can make your code cleaner and easier to manage by encapsulating reusable logic. They're particularly helpful for common patterns like toggling, API calls, debouncing, local storage, and handling user interactions.

Let me know if you want more examples or have a specific use case in mind! 😊