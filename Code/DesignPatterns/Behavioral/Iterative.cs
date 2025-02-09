namespace Practise.DesignPatterns.Behavioral;

internal class Iterative
{
    // Sequentially access the elements of a collection without exposing its underlying representation.
    public interface IIterator<T>
    {
        T Current { get; }
        bool MoveNext();
    }

    public class MyList<T>
    {
        private readonly T[] _items;
        public MyList(T[] items)
        {
            _items = items;
        }
        public IIterator<T> GetIterator() => new ListIterator(_items);
        private class ListIterator : IIterator<T>
        {
            private readonly T[] _items;
            private int _index;
            public ListIterator(T[] items)
            {
                _items = items;
                _index = 0;
            }
            public T Current => _items[_index];
            public bool MoveNext()
            {
                _index++;
                return _index < _items.Length;
            }
        }
    }

    public class Application
    {
        public void Run()
        {
            var list = new MyList<int>(new[] { 1, 2, 3, 4, 5 });
            var iterator = list.GetIterator();
            while (iterator.MoveNext())
            {
                Console.WriteLine(iterator.Current);
            }
        }
    }
}
