### **Garbage Collector (GC) in C#**  
The **Garbage Collector (GC)** in C# is an **automatic memory management system** that reclaims memory occupied by **unused objects** to prevent memory leaks.

---

## **1. How Garbage Collection Works in C#**
The GC runs **automatically** and follows these steps:
1. **Identifies unreachable objects** (objects that are no longer referenced).
2. **Pauses execution** (for a short time) to reclaim memory.
3. **Releases memory** back to the system.
4. **Compacts the heap** to improve performance.

---

## **2. GC Heap Memory Organization**
The **managed heap** is divided into **three generations** to optimize performance:

| **Generation** | **Description** |
|---------------|----------------|
| **Gen 0** | Stores short-lived objects (e.g., local variables). Cleared frequently. |
| **Gen 1** | Used as a buffer between Gen 0 and Gen 2. |
| **Gen 2** | Stores long-lived objects (e.g., static data, global objects). Cleared rarely. |

👉 **Objects that survive multiple collections move to the next generation.**  

---

## **3. Triggering Garbage Collection**
Although the GC runs **automatically**, you can **force** it to run manually:

```csharp
GC.Collect();  // Forces garbage collection (not recommended for frequent use)
GC.WaitForPendingFinalizers();  // Ensures finalizers are executed
```

🚀 **Best practice:** Avoid calling `GC.Collect()` unless necessary (e.g., after a large memory-consuming operation).

---

## **4. Finalization & IDisposable**
### **Finalizers (`~Destructor`)**
- Called before an object is collected.
- Defined using `~ClassName()`.
- Slower because GC runs it asynchronously.

```csharp
class MyClass
{
    ~MyClass()
    {
        Console.WriteLine("Finalizer called!");
    }
}
```

### **IDisposable & `using`**
For objects holding **unmanaged resources** (e.g., file handles, database connections), use **`IDisposable`**:

```csharp
class MyResource : IDisposable
{
    public void Dispose()
    {
        Console.WriteLine("Dispose called!");
        GC.SuppressFinalize(this);  // Prevents unnecessary finalization
    }
}
```
🔹 **Using the `using` statement:**  
```csharp
using (var resource = new MyResource())
{
    // Use the resource
}  // Dispose() is called automatically
```

---

## **5. Preventing Memory Leaks**
✅ **Best Practices:**
- Set **unused objects to `null`** to allow GC to collect them.
- Use **`IDisposable`** for unmanaged resources.
- Avoid **static references** to objects that are no longer needed.
- Use **WeakReference** for cache-like structures.

---

## **6. Checking GC Performance**
🔹 **Get memory usage:**
```csharp
long memoryUsed = GC.GetTotalMemory(false);
Console.WriteLine($"Memory Used: {memoryUsed} bytes");
```
🔹 **Check the current GC generation of an object:**
```csharp
Console.WriteLine(GC.GetGeneration(myObject));
```

---

## **Summary**
| **Feature** | **Description** |
|------------|----------------|
| **Automatic Memory Management** | Frees unused memory automatically. |
| **Three Generations** | **Gen 0 (short-lived)**, **Gen 1 (intermediate)**, **Gen 2 (long-lived)**. |
| **GC.Collect()** | Manually triggers GC (not recommended often). |
| **Finalizer (`~ClassName()`)** | Runs before GC collects an object. |
| **IDisposable** | Used for unmanaged resources (use `Dispose()` method). |
| **Memory Optimization** | Avoid unnecessary memory allocations & leaks. |

Would you like a deep dive into **specific GC optimizations**? 🚀