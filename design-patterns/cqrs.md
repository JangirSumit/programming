The Command Query Responsibility Segregation (CQRS) pattern is a design pattern that separates the operations that read data (queries) from the operations that update data (commands). This separation can lead to more optimized and scalable systems by allowing each side to be designed and scaled independently.

### Key Concepts

1. **Commands**:
   - Represent actions that change the state of the application.
   - Typically, commands are write operations such as creating, updating, or deleting data.
   - Commands often involve business logic and validation.

2. **Queries**:
   - Represent requests to retrieve data without modifying it.
   - Typically, queries are read operations such as retrieving a list of items or getting details of a specific item.
   - Queries can be optimized for read performance and can use different data models from commands.

3. **Separation of Models**:
   - The write model handles commands and uses a data model optimized for writing operations.
   - The read model handles queries and uses a data model optimized for reading operations.

### Benefits

- **Scalability**: Each side can be scaled independently based on specific requirements. For example, read operations often need to handle high loads and can be scaled out with read replicas.
- **Performance**: Queries can be optimized separately from commands, allowing for faster read operations.
- **Maintainability**: Simplifies complex domains by separating concerns and reducing the coupling between read and write operations.
- **Flexibility**: Different data storage technologies can be used for read and write models, allowing for more appropriate choices based on specific needs.

### Example Scenario

Consider an e-commerce application where CQRS can be applied.

#### Commands

- **CreateOrderCommand**: A command to create a new order.
- **UpdateOrderCommand**: A command to update an existing order.
- **CancelOrderCommand**: A command to cancel an order.

#### Queries

- **GetOrderByIdQuery**: A query to retrieve order details by order ID.
- **GetOrdersByCustomerQuery**: A query to retrieve all orders for a specific customer.
- **GetRecentOrdersQuery**: A query to retrieve recently placed orders.

### Implementation Example in C#

Below is a simplified example of how CQRS can be implemented in C#.

```csharp
using System;
using System.Collections.Generic;

// Command side

public class CreateOrderCommand
{
    public Guid OrderId { get; }
    public Guid CustomerId { get; }
    public List<OrderItem> Items { get; }

    public CreateOrderCommand(Guid orderId, Guid customerId, List<OrderItem> items)
    {
        OrderId = orderId;
        CustomerId = customerId;
        Items = items;
    }
}

public class OrderCommandHandler
{
    private readonly IOrderRepository _orderRepository;

    public OrderCommandHandler(IOrderRepository orderRepository)
    {
        _orderRepository = orderRepository;
    }

    public void Handle(CreateOrderCommand command)
    {
        var order = new Order(command.OrderId, command.CustomerId, command.Items);
        _orderRepository.Save(order);
    }
}

public interface IOrderRepository
{
    void Save(Order order);
}

// Query side

public class GetOrderByIdQuery
{
    public Guid OrderId { get; }

    public GetOrderByIdQuery(Guid orderId)
    {
        OrderId = orderId;
    }
}

public class OrderQueryHandler
{
    private readonly IOrderReadRepository _orderReadRepository;

    public OrderQueryHandler(IOrderReadRepository orderReadRepository)
    {
        _orderReadRepository = orderReadRepository;
    }

    public OrderDto Handle(GetOrderByIdQuery query)
    {
        return _orderReadRepository.GetById(query.OrderId);
    }
}

public interface IOrderReadRepository
{
    OrderDto GetById(Guid orderId);
}

// Data Models

public class Order
{
    public Guid OrderId { get; }
    public Guid CustomerId { get; }
    public List<OrderItem> Items { get; }

    public Order(Guid orderId, Guid customerId, List<OrderItem> items)
    {
        OrderId = orderId;
        CustomerId = customerId;
        Items = items;
    }
}

public class OrderItem
{
    public Guid ProductId { get; }
    public int Quantity { get; }
    public decimal Price { get; }

    public OrderItem(Guid productId, int quantity, decimal price)
    {
        ProductId = productId;
        Quantity = quantity;
        Price = price;
    }
}

public class OrderDto
{
    public Guid OrderId { get; set; }
    public Guid CustomerId { get; set; }
    public List<OrderItemDto> Items { get; set; }
}

public class OrderItemDto
{
    public Guid ProductId { get; set; }
    public int Quantity { get; set; }
    public decimal Price { get; set; }
}

// Example Usage

public class Program
{
    public static void Main()
    {
        // Create repositories (in-memory for simplicity)
        IOrderRepository orderRepository = new InMemoryOrderRepository();
        IOrderReadRepository orderReadRepository = new InMemoryOrderReadRepository();

        // Command handler
        var commandHandler = new OrderCommandHandler(orderRepository);
        var createOrderCommand = new CreateOrderCommand(
            Guid.NewGuid(), 
            Guid.NewGuid(), 
            new List<OrderItem> { new OrderItem(Guid.NewGuid(), 2, 19.99m) }
        );
        commandHandler.Handle(createOrderCommand);

        // Query handler
        var queryHandler = new OrderQueryHandler(orderReadRepository);
        var getOrderByIdQuery = new GetOrderByIdQuery(createOrderCommand.OrderId);
        OrderDto orderDto = queryHandler.Handle(getOrderByIdQuery);

        Console.WriteLine($"Order ID: {orderDto.OrderId}, Customer ID: {orderDto.CustomerId}");
    }
}

// In-memory repositories (for demonstration purposes)

public class InMemoryOrderRepository : IOrderRepository
{
    private readonly Dictionary<Guid, Order> _orders = new();

    public void Save(Order order)
    {
        _orders[order.OrderId] = order;
    }
}

public class InMemoryOrderReadRepository : IOrderReadRepository
{
    private readonly Dictionary<Guid, OrderDto> _orders = new();

    public OrderDto GetById(Guid orderId)
    {
        return _orders.ContainsKey(orderId) ? _orders[orderId] : null;
    }

    // Simulate saving to read repository when orders are created (for demonstration purposes)
    public void Save(OrderDto orderDto)
    {
        _orders[orderDto.OrderId] = orderDto;
    }
}
```

### Explanation:

1. **Commands**: The `CreateOrderCommand` class represents a command to create a new order. The `OrderCommandHandler` handles this command by creating an `Order` object and saving it through the `IOrderRepository` interface.

2. **Queries**: The `GetOrderByIdQuery` class represents a query to retrieve an order by its ID. The `OrderQueryHandler` handles this query by retrieving an `OrderDto` from the `IOrderReadRepository` interface.

3. **Data Models**: Separate data models are used for the write (`Order`, `OrderItem`) and read (`OrderDto`, `OrderItemDto`) sides. This allows for optimized data structures for each operation.

4. **Example Usage**: The `Program` class demonstrates how to create and handle commands and queries using the defined handlers and repositories.

5. **In-Memory Repositories**: `InMemoryOrderRepository` and `InMemoryOrderReadRepository` are simple in-memory implementations of the repository interfaces for demonstration purposes.

By separating commands and queries, the CQRS pattern allows for more flexible and scalable designs, particularly in complex systems where read and write operations have different performance and scalability requirements.


## Blogs
    - [Microsoft Blog](https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs)