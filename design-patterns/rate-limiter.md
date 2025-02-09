### **Rate Limiting Algorithms in C# 🚀**  

Rate limiting algorithms control the number of requests a system can process within a given time to **prevent abuse, ensure fair resource usage, and enhance security**.

---

## **📌 Common Rate Limiting Algorithms**
| **Algorithm**       | **Best For**                                     | **How It Works** |
|---------------------|------------------------------------------------|-----------------|
| **Fixed Window**    | Simple scenarios, per-minute request limits     | Counts requests in fixed time slots |
| **Sliding Window**  | More precise request control                    | Moves window dynamically based on request timestamps |
| **Token Bucket**    | Burst requests while maintaining a steady rate  | Requests consume tokens; tokens regenerate over time |
| **Leaky Bucket**    | Consistent request flow, preventing bursts      | Requests queue up and process at a fixed rate |
| **Concurrency Limit** | Limiting parallel processing of requests      | Controls concurrent active requests rather than rate |

---

## **🔹 1. Fixed Window Algorithm**
📌 **Scenario**: Allow **5 requests every 10 seconds** per user.  
- Uses a **counter that resets** at the start of each window.  
- Can cause **spikes at window edges** if users send all requests at once.  

```csharp
using System;
using System.Collections.Concurrent;

public class FixedWindowRateLimiter
{
    private readonly int _maxRequests;
    private readonly TimeSpan _windowSize;
    private readonly ConcurrentDictionary<string, (int Count, DateTime WindowStart)> _requestCounts = new();

    public FixedWindowRateLimiter(int maxRequests, TimeSpan windowSize)
    {
        _maxRequests = maxRequests;
        _windowSize = windowSize;
    }

    public bool IsAllowed(string userId)
    {
        var now = DateTime.UtcNow;
        var entry = _requestCounts.GetOrAdd(userId, (0, now));

        if ((now - entry.WindowStart) > _windowSize)
        {
            _requestCounts[userId] = (1, now);  // Reset window
            return true;
        }

        if (entry.Count < _maxRequests)
        {
            _requestCounts[userId] = (entry.Count + 1, entry.WindowStart);
            return true;
        }

        return false;
    }
}
```

---

## **🔹 2. Sliding Window Algorithm**
📌 **Scenario**: Allow **5 requests every 10 seconds** with a smooth limit.  
- Unlike Fixed Window, **old requests expire dynamically** instead of resetting abruptly.  
- Reduces **spikes at window edges**.  

```csharp
using System;
using System.Collections.Concurrent;
using System.Linq;

public class SlidingWindowRateLimiter
{
    private readonly int _maxRequests;
    private readonly TimeSpan _windowSize;
    private readonly ConcurrentDictionary<string, ConcurrentQueue<DateTime>> _requestLog = new();

    public SlidingWindowRateLimiter(int maxRequests, TimeSpan windowSize)
    {
        _maxRequests = maxRequests;
        _windowSize = windowSize;
    }

    public bool IsAllowed(string userId)
    {
        var now = DateTime.UtcNow;
        var requests = _requestLog.GetOrAdd(userId, new ConcurrentQueue<DateTime>());

        // Remove expired requests
        while (requests.TryPeek(out var timestamp) && (now - timestamp) > _windowSize)
        {
            requests.TryDequeue();
        }

        if (requests.Count < _maxRequests)
        {
            requests.Enqueue(now);
            return true;
        }

        return false;
    }
}
```

---

## **🔹 3. Token Bucket Algorithm**
📌 **Scenario**: Allow **5 requests per 10 seconds** but refill tokens gradually.  
- Each request **consumes a token**; tokens **refill over time**.  
- Allows **bursty traffic** but enforces a steady limit.  

```csharp
using System;

public class TokenBucket
{
    private readonly int _capacity;
    private int _tokens;
    private readonly TimeSpan _refillTime;
    private DateTime _lastRefill;

    public TokenBucket(int capacity, TimeSpan refillTime)
    {
        _capacity = capacity;
        _tokens = capacity;
        _refillTime = refillTime;
        _lastRefill = DateTime.UtcNow;
    }

    private void RefillTokens()
    {
        var now = DateTime.UtcNow;
        var elapsed = (now - _lastRefill).TotalSeconds;
        int refillAmount = (int)(elapsed / _refillTime.TotalSeconds);

        if (refillAmount > 0)
        {
            _tokens = Math.Min(_capacity, _tokens + refillAmount);
            _lastRefill = now;
        }
    }

    public bool AllowRequest()
    {
        RefillTokens();

        if (_tokens > 0)
        {
            _tokens--;
            return true;
        }

        return false;
    }
}
```

---

## **🔹 4. Leaky Bucket Algorithm**
📌 **Scenario**: Allow **5 requests per 10 seconds** but process at a **constant rate**.  
- Works like a queue: Requests **leak out at a fixed rate**.  
- Prevents **bursty traffic**, unlike Token Bucket.  

```csharp
using System;
using System.Collections.Concurrent;
using System.Threading;

public class LeakyBucket
{
    private readonly int _capacity;
    private readonly TimeSpan _leakRate;
    private readonly ConcurrentQueue<DateTime> _requests = new();
    private readonly Timer _timer;

    public LeakyBucket(int capacity, TimeSpan leakRate)
    {
        _capacity = capacity;
        _leakRate = leakRate;
        _timer = new Timer(Leak, null, leakRate, leakRate);
    }

    private void Leak(object? state)
    {
        if (_requests.TryDequeue(out _)) { }
    }

    public bool AllowRequest()
    {
        if (_requests.Count < _capacity)
        {
            _requests.Enqueue(DateTime.UtcNow);
            return true;
        }

        return false;
    }
}
```

---

## **🔹 5. Concurrency Limit**
📌 **Scenario**: Allow **5 concurrent API requests** but **no more than 5 at once**.  
- Instead of rate-limiting over time, it **restricts the number of parallel requests**.  
- Useful for **database connections, CPU-intensive tasks, or thread pools**.

```csharp
using System;
using System.Collections.Concurrent;
using System.Threading;

public class ConcurrencyLimiter
{
    private readonly int _maxConcurrentRequests;
    private int _currentRequests = 0;

    public ConcurrencyLimiter(int maxConcurrentRequests)
    {
        _maxConcurrentRequests = maxConcurrentRequests;
    }

    public bool TryEnter()
    {
        if (Interlocked.Increment(ref _currentRequests) <= _maxConcurrentRequests)
        {
            return true;
        }

        Interlocked.Decrement(ref _currentRequests);
        return false;
    }

    public void Exit()
    {
        Interlocked.Decrement(ref _currentRequests);
    }
}
```

---

## **📌 Comparison of Rate Limiting Algorithms**
| **Algorithm**          | **Pros**                                       | **Cons** |
|------------------------|----------------------------------------------|----------|
| **Fixed Window**       | Simple to implement                          | Edge-case spikes possible |
| **Sliding Window**     | Avoids sudden bursts, more accurate          | Higher memory usage |
| **Token Bucket**       | Allows bursts while enforcing limit          | Complex refill logic |
| **Leaky Bucket**       | Enforces constant flow of requests           | Adds queue delay |
| **Concurrency Limit**  | Prevents server overload, ensures fair use   | Doesn’t limit over time |

---

### **📌 Choosing the Right Algorithm**
- **APIs with request spikes?** → ✅ **Token Bucket**  
- **Stable, smooth request flow?** → ✅ **Leaky Bucket**  
- **Protecting database resources?** → ✅ **Concurrency Limiting**  
- **Simple per-timeframe limit?** → ✅ **Fixed/Sliding Window**  

Would you like an **ASP.NET Core Middleware version** of these algorithms? 🚀