namespace Practise.DesignPatterns.Behavioral;

internal class Observer
{
    // Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

    public interface  IObserver
    {
        void Notify();
    }

    public class Observer1 : IObserver
    {
        public void Notify()
        {
            Console.WriteLine("Observer1 notified");
        }
    }

    public class Observer2 : IObserver
    {
        public void Notify()
        {
            Console.WriteLine("Observer2 notified");
        }
    }

    public class Subject
    {
        private readonly List<IObserver> _observers = new();
        public void Attach(IObserver observer)
        {
            _observers.Add(observer);
        }
        public void Detach(IObserver observer)
        {
            _observers.Remove(observer);
        }
        public void Notify()
        {
            foreach (var observer in _observers)
            {
                observer.Notify();
            }
        }
    }

    public class Application
    {
        private readonly Subject _subject;
        public Application(Subject subject)
        {
            _subject = subject;
        }
        public void AddObserver(IObserver observer) => _subject.Attach(observer);
        public void RemoveObserver(IObserver observer) => _subject.Detach(observer);
        public void NotifyObservers() => _subject.Notify();
    }
}
