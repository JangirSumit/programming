## **API Composition in Microservices Architecture** 🚀

### **What is API Composition?**  
**API Composition** is a **design pattern** used in **microservices** to aggregate data from multiple services and return a unified response to the client. It acts as a single entry point that gathers and processes data from multiple microservices before sending it back.  

---

## **🚀 Why Use API Composition?**
✅ **Solves the distributed data problem** in microservices  
✅ **Reduces multiple client requests** → improves performance  
✅ **Hides service complexity** from the frontend  
✅ **Improves maintainability** by keeping aggregation logic separate  

---

## **🛠️ How API Composition Works?**
1️⃣ **Client sends a request** to the API Gateway or Aggregator  
2️⃣ **Aggregator calls multiple microservices** in parallel or sequentially  
3️⃣ **Aggregator processes the responses** (joins, transforms, filters data)  
4️⃣ **Returns a single, unified response** to the client  

---

## **🖥️ Example: API Composition in an E-Commerce System**  
Imagine an **e-commerce platform** with multiple microservices:  

- **User Service** (fetches user profile)  
- **Orders Service** (fetches order history)  
- **Payments Service** (fetches payment details)  

Instead of making **3 separate API calls**, the **API Composer** aggregates them into **one response**:

### **API Aggregator Response:**
```json
{
  "user": {
    "id": 123,
    "name": "John Doe"
  },
  "orders": [
    { "id": 456, "total": 99.99, "status": "Delivered" }
  ],
  "payments": [
    { "method": "Credit Card", "status": "Success" }
  ]
}
```

---

## **🛠️ Implementing API Composition in C# (ASP.NET Core)**
### **Step 1: Create an API Aggregator**
```csharp
[ApiController]
[Route("api/composite")]
public class ApiAggregatorController : ControllerBase
{
    private readonly IHttpClientFactory _httpClientFactory;

    public ApiAggregatorController(IHttpClientFactory httpClientFactory)
    {
        _httpClientFactory = httpClientFactory;
    }

    [HttpGet("{userId}")]
    public async Task<IActionResult> GetUserDashboard(int userId)
    {
        var client = _httpClientFactory.CreateClient();
        
        // Call multiple microservices asynchronously
        var userTask = client.GetFromJsonAsync<UserDto>($"http://user-service/api/users/{userId}");
        var ordersTask = client.GetFromJsonAsync<List<OrderDto>>($"http://orders-service/api/orders/{userId}");
        var paymentsTask = client.GetFromJsonAsync<List<PaymentDto>>($"http://payments-service/api/payments/{userId}");

        await Task.WhenAll(userTask, ordersTask, paymentsTask);

        var response = new
        {
            user = await userTask,
            orders = await ordersTask,
            payments = await paymentsTask
        };

        return Ok(response);
    }
}
```

---

## **⚡ API Composition vs. API Gateway**
| Feature              | API Composition 🏗 | API Gateway 🌐 |
|----------------------|------------------|--------------|
| **Purpose**         | Aggregates responses from multiple services | Routes requests & applies security policies |
| **Data Transformation** | ✅ Yes | ❌ No |
| **Caching**         | ✅ Yes | ✅ Yes |
| **Rate Limiting**   | ❌ No | ✅ Yes |
| **Best Use Case**   | Querying & aggregating data | Securing & routing APIs |

---

## **🎯 When to Use API Composition?**
✅ **When multiple services need to be queried** for a single request  
✅ **To reduce API calls from the frontend**  
✅ **When the database-per-service model makes it hard to join data**  

---

## **🚀 Next Steps**
Would you like to implement **API Composition in AKS** using **Helm charts**? 🎯