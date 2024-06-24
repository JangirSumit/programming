Socket exhaustion is a condition that occurs when an application consumes all available network sockets, preventing new network connections from being established. This is particularly problematic in long-running applications that make frequent network requests, such as web services or APIs. Socket exhaustion can lead to `SocketException` errors and can severely degrade application performance or cause the application to fail altogether.

### Causes of Socket Exhaustion

1. **Improper Disposal of HttpClient Instances**: 
   Creating new `HttpClient` instances frequently without proper disposal can lead to socket exhaustion. `HttpClient` uses underlying `HttpMessageHandler` instances to manage network connections. If these handlers are not disposed of correctly, the sockets they use remain open, eventually leading to socket exhaustion.

   **Anti-pattern Example**:
   ```csharp
   public async Task<string> GetDataAsync(string url)
   {
       using (var httpClient = new HttpClient())
       {
           var response = await httpClient.GetStringAsync(url);
           return response;
       }
   }
   ```
   In this example, a new `HttpClient` instance is created for every request. Even though the instance is disposed of after use, the underlying `HttpMessageHandler` may not be properly cleaned up, leading to socket exhaustion.

2. **Long-lived Connections**: 
   Applications that hold onto connections for extended periods without releasing them can exhaust the available pool of sockets.

3. **High Concurrency**: 
   Applications that open many concurrent connections can exceed the available socket limit, especially if sockets are not reused efficiently.

### Symptoms of Socket Exhaustion

- `SocketException` errors with messages indicating that there are no available sockets.
- Decreased application performance due to the inability to establish new network connections.
- Intermittent connectivity issues, especially under high load.

### Mitigating Socket Exhaustion

1. **Reuse HttpClient Instances**:
   Reusing a single instance of `HttpClient` for multiple requests helps manage socket connections efficiently. This is because `HttpClient` is designed to be reused and is thread-safe.

   **Example**:
   ```csharp
   public class MyService
   {
       private static readonly HttpClient _httpClient = new HttpClient();

       public async Task<string> GetDataAsync(string url)
       {
           var response = await _httpClient.GetStringAsync(url);
           return response;
       }
   }
   ```

2. **Use HttpClientFactory**:
   `HttpClientFactory`, introduced in .NET Core 2.1, manages the lifecycle of `HttpClient` instances and their underlying `HttpMessageHandler`s. It prevents socket exhaustion by reusing handlers and refreshing them periodically.

   **Setting up HttpClientFactory**:
   ```csharp
   public void ConfigureServices(IServiceCollection services)
   {
       services.AddHttpClient<MyService>();
   }
   ```

   **Using HttpClientFactory**:
   ```csharp
   public class MyService
   {
       private readonly HttpClient _httpClient;

       public MyService(HttpClient httpClient)
       {
           _httpClient = httpClient;
       }

       public async Task<string> GetDataAsync(string url)
       {
           var response = await _httpClient.GetStringAsync(url);
           return response;
       }
   }
   ```

3. **Proper Disposal**:
   If you must create `HttpClient` instances dynamically, ensure that they are disposed of properly to free up the underlying `HttpMessageHandler` and sockets.

4. **Configure Sockets and Connections**:
   Adjust socket and connection settings in the application configuration, such as increasing the maximum number of connections per host.

### Summary

- **Socket exhaustion** occurs when all available network sockets are consumed, preventing new connections from being established.
- It is commonly caused by improper management of `HttpClient` instances, leading to unclosed sockets.
- **Symptoms** include `SocketException` errors and degraded application performance.
- **Mitigation strategies** include reusing `HttpClient` instances, using `HttpClientFactory`, and ensuring proper disposal of network resources.
- **HttpClientFactory** is a recommended approach in modern .NET applications as it efficiently manages the lifecycle of `HttpClient` instances and their underlying handlers, preventing socket exhaustion.