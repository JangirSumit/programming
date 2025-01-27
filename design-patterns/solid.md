The **SOLID** principles are a set of design principles in object-oriented programming that help create maintainable, scalable, and testable software. Let's break down each principle with a C# example.

---

### **1. Single Responsibility Principle (SRP)**

**Definition**: A class should have one, and only one, reason to change. It should only have one responsibility.

**Example**:
```csharp
// Violates SRP: Handles both user data and saving to a database
public class UserService
{
    public void AddUser(string name)
    {
        // Logic to add a user
        Console.WriteLine($"User {name} added.");

        // Logic to save user to a database
        SaveToDatabase(name);
    }

    private void SaveToDatabase(string name)
    {
        Console.WriteLine($"User {name} saved to database.");
    }
}

// Fix: Separate the responsibilities
public class User
{
    public string Name { get; set; }
}

public class UserRepository
{
    public void Save(User user)
    {
        Console.WriteLine($"User {user.Name} saved to database.");
    }
}

public class UserService
{
    private readonly UserRepository _repository;

    public UserService(UserRepository repository)
    {
        _repository = repository;
    }

    public void AddUser(string name)
    {
        var user = new User { Name = name };
        Console.WriteLine($"User {name} added.");
        _repository.Save(user);
    }
}
```

---

### **2. Open/Closed Principle (OCP)**

**Definition**: Software entities (classes, modules, functions) should be open for extension but closed for modification.

**Example**:
```csharp
// Violates OCP: Every time we need a new discount type, we modify this class
public class DiscountService
{
    public double GetDiscount(string customerType)
    {
        if (customerType == "Regular")
            return 10;
        if (customerType == "Premium")
            return 20;
        return 0;
    }
}

// Fix: Use polymorphism to add new discount types without modifying existing code
public interface IDiscount
{
    double GetDiscount();
}

public class RegularCustomerDiscount : IDiscount
{
    public double GetDiscount() => 10;
}

public class PremiumCustomerDiscount : IDiscount
{
    public double GetDiscount() => 20;
}

public class DiscountService
{
    private readonly IDiscount _discount;

    public DiscountService(IDiscount discount)
    {
        _discount = discount;
    }

    public double CalculateDiscount() => _discount.GetDiscount();
}
```

---

### **3. Liskov Substitution Principle (LSP)**

**Definition**: Subtypes must be substitutable for their base types without altering the correctness of the program.

**Example**:
```csharp
// Violates LSP: A derived class changes behavior of the base class
public class Rectangle
{
    public virtual int Width { get; set; }
    public virtual int Height { get; set; }
    public int GetArea() => Width * Height;
}

public class Square : Rectangle
{
    public override int Width
    {
        set { base.Width = base.Height = value; }
    }

    public override int Height
    {
        set { base.Width = base.Height = value; }
    }
}

// Fix: Refactor to ensure proper substitution
public interface IShape
{
    int GetArea();
}

public class Rectangle : IShape
{
    public int Width { get; set; }
    public int Height { get; set; }
    public int GetArea() => Width * Height;
}

public class Square : IShape
{
    public int Side { get; set; }
    public int GetArea() => Side * Side;
}
```

---

### **4. Interface Segregation Principle (ISP)**

**Definition**: Clients should not be forced to depend on interfaces they do not use.

**Example**:
```csharp
// Violates ISP: Forces all implementations to define unnecessary methods
public interface IPrinter
{
    void Print();
    void Scan();
    void Fax();
}

public class BasicPrinter : IPrinter
{
    public void Print() => Console.WriteLine("Printing...");
    public void Scan() => throw new NotImplementedException();
    public void Fax() => throw new NotImplementedException();
}

// Fix: Split the interface into smaller, specific ones
public interface IPrinter
{
    void Print();
}

public interface IScanner
{
    void Scan();
}

public class BasicPrinter : IPrinter
{
    public void Print() => Console.WriteLine("Printing...");
}

public class MultiFunctionPrinter : IPrinter, IScanner
{
    public void Print() => Console.WriteLine("Printing...");
    public void Scan() => Console.WriteLine("Scanning...");
}
```

---

### **5. Dependency Inversion Principle (DIP)**

**Definition**: High-level modules should not depend on low-level modules; both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions.

**Example**:
```csharp
// Violates DIP: High-level module depends on low-level module
public class EmailService
{
    public void SendEmail(string message)
    {
        Console.WriteLine($"Email sent: {message}");
    }
}

public class Notification
{
    private readonly EmailService _emailService = new EmailService();

    public void Notify(string message)
    {
        _emailService.SendEmail(message);
    }
}

// Fix: Depend on abstraction
public interface IMessageService
{
    void Send(string message);
}

public class EmailService : IMessageService
{
    public void Send(string message)
    {
        Console.WriteLine($"Email sent: {message}");
    }
}

public class SmsService : IMessageService
{
    public void Send(string message)
    {
        Console.WriteLine($"SMS sent: {message}");
    }
}

public class Notification
{
    private readonly IMessageService _messageService;

    public Notification(IMessageService messageService)
    {
        _messageService = messageService;
    }

    public void Notify(string message)
    {
        _messageService.Send(message);
    }
}
```

---

### **Summary of SOLID Principles**
| Principle                  | Key Idea                                      |
|----------------------------|-----------------------------------------------|
| **S**ingle Responsibility | A class should have one reason to change.     |
| **O**pen/Closed           | Open for extension, closed for modification. |
| **L**iskov Substitution   | Subtypes must replace base types seamlessly.  |
| **I**nterface Segregation | Interfaces should be specific to client needs.|
| **D**ependency Inversion  | Depend on abstractions, not implementations.  |

By following these principles, you ensure that your code is modular, maintainable, and adheres to best practices. Let me know if you need further clarifications or deeper examples!