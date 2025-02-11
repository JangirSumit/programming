### **IMemoryCache in .NET**
`IMemoryCache` is an **in-memory caching** interface provided by **Microsoft.Extensions.Caching.Memory** in .NET. It allows you to store and retrieve objects in memory, improving performance by reducing expensive computations, API calls, or database queries.

---

## **1. How IMemoryCache Works**
- Stores data **in RAM** for quick access.
- Uses **key-value pairs** to store and retrieve objects.
- Supports **absolute expiration** (expires after a fixed time) and **sliding expiration** (resets expiration time on access).
- Thread-safe and efficient.

---

## **2. Install Required Package**
If you’re using `.NET Core` or `.NET 8`, `IMemoryCache` is included in `Microsoft.Extensions.Caching.Memory`, so no additional installation is needed.

---

## **3. How to Use IMemoryCache**
### **Step 1: Register IMemoryCache in `Startup.cs` (Program.cs in .NET 6+)**
```csharp
services.AddMemoryCache();
```

---

### **Step 2: Inject and Use IMemoryCache in a Service**
```csharp
public class CacheService
{
    private readonly IMemoryCache _cache;

    public CacheService(IMemoryCache cache)
    {
        _cache = cache;
    }

    public string GetCachedData(string key)
    {
        if (_cache.TryGetValue(key, out string cachedValue))
        {
            return cachedValue; // Return from cache if available
        }

        // If not in cache, generate new data
        string newValue = "Hello from cache at " + DateTime.Now;
        
        // Set cache with expiration of 10 minutes
        _cache.Set(key, newValue, TimeSpan.FromMinutes(10));

        return newValue;
    }
}
```

---

## **4. Configuring Expiration & Eviction Policies**
### **1. Absolute Expiration (Fixed Expiry Time)**
```csharp
_cache.Set("key", "value", TimeSpan.FromMinutes(5));
```
- The value **expires after 5 minutes**, regardless of access.

---

### **2. Sliding Expiration (Reset Timer on Access)**
```csharp
var cacheOptions = new MemoryCacheEntryOptions()
{
    SlidingExpiration = TimeSpan.FromMinutes(5)
};
_cache.Set("key", "value", cacheOptions);
```
- The expiration resets to **5 minutes** every time the cache entry is accessed.

---

### **3. Absolute & Sliding Expiration Together**
```csharp
var cacheOptions = new MemoryCacheEntryOptions()
{
    AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(30),
    SlidingExpiration = TimeSpan.FromMinutes(5)
};
_cache.Set("key", "value", cacheOptions);
```
- The cache entry **must be accessed every 5 minutes**, but will be removed **after 30 minutes max**.

---

## **5. Removing Items from Cache**
```csharp
_cache.Remove("key");
```

---

## **6. Example: Using IMemoryCache in a Controller**
```csharp
[ApiController]
[Route("api/cache")]
public class CacheController : ControllerBase
{
    private readonly IMemoryCache _cache;

    public CacheController(IMemoryCache cache)
    {
        _cache = cache;
    }

    [HttpGet("get/{key}")]
    public IActionResult GetCache(string key)
    {
        if (_cache.TryGetValue(key, out string value))
            return Ok(value);

        return NotFound("Cache not found.");
    }

    [HttpPost("set")]
    public IActionResult SetCache(string key, string value)
    {
        _cache.Set(key, value, TimeSpan.FromMinutes(10));
        return Ok("Cached successfully.");
    }
}
```

---

## **7. Best Practices for IMemoryCache**
✅ Use `TryGetValue()` before retrieving to avoid exceptions.  
✅ Always set expiration times to **prevent memory leaks**.  
✅ Store only frequently used, **small-sized objects** in memory.  
✅ Use **DistributedCache (Redis)** if caching across multiple servers.  

---

## **8. When to Use IMemoryCache?**
| **Use Case** | **Reason** |
|-------------|-----------|
| Frequently accessed API responses | Reduces redundant database/API calls |
| Configurations that rarely change | Improves performance |
| User session data | Faster retrieval |
| Authentication tokens | Avoids unnecessary re-authentication |

---

Would you like a **real-world example** of caching in your Azure Functions or APIs? 🚀