```Csharp
// Step 1: Define Observer Interface
public interface IObserver
{
    void Update(string stock, double price);
}

// Step 2: Subject (Observable)
public class StockMarket
{
    private List<IObserver> _observers = new();
    public void Attach(IObserver observer) => _observers.Add(observer);
    public void Notify(string stock, double price)
    {
        foreach (var observer in _observers) observer.Update(stock, price);
    }
}

// Step 3: Implement Observers
public class Investor : IObserver
{
    private string _name;
    public Investor(string name) => _name = name;
    public void Update(string stock, double price)
    {
        Console.WriteLine($"{_name} notified: {stock} is now {price}");
    }
}

// Usage
var market = new StockMarket();
var investor1 = new Investor("Alice");
market.Attach(investor1);
market.Notify("AAPL", 150.0);
```