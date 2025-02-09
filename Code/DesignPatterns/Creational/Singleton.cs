namespace Practise.DesignPatterns.Creational;

internal sealed class Singleton
{
    private static Singleton? _instance;
    private static readonly object _lockObject = new object();
    private static Guid _id;

    private static Singleton Instance
    {
        get
        {
            if (Instance == null)
            {
                lock (_lockObject)
                {
                    if (Instance == null)
                    {
                        _instance = new();
                    }
                }
            }

            return _instance;
        }
    }

    private Singleton()
    {
        _id = Guid.NewGuid();
    }

    public void PrintMessage() => Console.WriteLine("Singleton instance created", _id);
}
