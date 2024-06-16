The Mediator design pattern is a behavioral design pattern that allows objects to communicate with each other without having to know each other's identities. This pattern promotes loose coupling by preventing objects from referring to each other explicitly, and it lets you vary their interaction independently.

## Key Concepts

1. **Mediator**: Defines an interface for communicating with Colleague objects.
2. **Concrete Mediator**: Implements cooperative behavior by coordinating Colleague objects.
3. **Colleague**: Each Colleague communicates with its Mediator whenever it would have otherwise communicated with another Colleague.

## When to Use

- When a set of objects communicate in complex but well-defined ways.
- To re-use an object is difficult because it refers to and communicates with many other objects.
- To simplify object protocols by eliminating the need for objects to communicate directly.

## UML Diagram

Here's a simplified UML diagram of the Mediator pattern:

```
 +-----------+              +---------------------+
 |           | communicates |                     |
 | Colleague |--------------|      Mediator       |
 |           |              |  (ConcreteMediator) |
 +-----------+              +---------------------+
        ^                            ^
        |                            |
        |                            |
 +-------------+              +-------------+
 | ColleagueA  |              | ColleagueB  |
 +-------------+              +-------------+
```

## Example

Let's consider a simple example of a chat room where multiple users can send messages to each other through a mediator.

### Components

- **Mediator Interface**: Defines the contract for ConcreteMediator.
- **ConcreteMediator**: Manages communication between Colleague objects.
- **Colleague**: Abstract class for Colleagues (Users in this case).
- **Concrete Colleague**: Specific Colleagues that communicate through the Mediator.

### Code

```C#
using System;
using System.Collections.Generic;

// Mediator Interface
public interface IMediator
{
    void Send(string message, Colleague colleague);
}

// Concrete Mediator
public class ConcreteMediator : IMediator
{
    private List<Colleague> colleagues = new List<Colleague>();

    public void AddColleague(Colleague colleague)
    {
        colleagues.Add(colleague);
    }

    public void Send(string message, Colleague colleague)
    {
        foreach (var col in colleagues)
        {
            if (col != colleague)
            {
                col.Receive(message);
            }
        }
    }
}

// Colleague Abstract Class
public abstract class Colleague
{
    protected IMediator mediator;

    public Colleague(IMediator mediator)
    {
        this.mediator = mediator;
    }

    public void Send(string message)
    {
        mediator.Send(message, this);
    }

    public abstract void Receive(string message);
}

// Concrete Colleague
public class User : Colleague
{
    private string name;

    public User(string name, IMediator mediator) : base(mediator)
    {
        this.name = name;
    }

    public override void Receive(string message)
    {
        Console.WriteLine($"{name} received: {message}");
    }
}

// Usage
public class Program
{
    public static void Main()
    {
        IMediator mediator = new ConcreteMediator();

        User user1 = new User("User1", mediator);
        User user2 = new User("User2", mediator);
        User user3 = new User("User3", mediator);

        ((ConcreteMediator)mediator).AddColleague(user1);
        ((ConcreteMediator)mediator).AddColleague(user2);
        ((ConcreteMediator)mediator).AddColleague(user3);

        user1.Send("Hello, everyone!");
        user2.Send("Hi User1!");
        user3.Send("Hello User1 and User2!");
    }
}
```

### Output

```
User2 received: Hello, everyone!
User3 received: Hello, everyone!
User1 received: Hi User1!
User3 received: Hi User1!
User1 received: Hello User1 and User2!
User2 received: Hello User1 and User2!
```

In this example:
- The `Mediator` interface defines the method `send`.
- `ConcreteMediator` implements the `send` method to relay messages between users.
- `Colleague` is an abstract class that keeps a reference to the `Mediator` and has methods to send and receive messages.
- `User` is a concrete implementation of `Colleague` that defines how messages are received.

This pattern is useful in scenarios where you have many-to-many communication, and you want to avoid the direct coupling of objects.