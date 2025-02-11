using System.Diagnostics;
using Microsoft.Extensions.Caching.Memory;
using Practise;
using Practise.Programming;

internal class Program
{
    private readonly IMemoryCache memoryCache;

    private static void Main(string[] args)
    {
        while (true)
        {
            Console.WriteLine("Select option");
            Console.WriteLine("1. Directory Explorer");
            Console.WriteLine("2. Linked List");
            Console.WriteLine("3. Dictionary");
            Console.WriteLine("4. Deck of Cards");

            var switch_on = Console.ReadLine();
            Console.WriteLine();
            var exit = false;
            switch (switch_on)
            {
                case "1":
                    var explorer = new DirectoryExplorer();
                    explorer.Explore(@"C:\My Apps");
                    break;
                case "2":
                    LinkedList linkedList = new();
                    StartLinkedList(linkedList);
                    break;
                case "3":
                    Dictionary<Person, string> keyValuePairs = new()
                    {
                        { new Person("John", 20), "John" },
                        { new Person("Doe", 25), "Doe" }
                    };
                    Console.WriteLine($"{keyValuePairs.TryGetValue(new Person("Doe", 25), out var value)}, {value}");
                    break;
                case "4":
                    Deck deck = new();
                    deck.Shuffle();
                    deck.Print();
                    Console.WriteLine();
                    deck.Sort();
                    deck.Print();
                    break;
                default:
                    exit = true;
                    break;
            }

            if (exit)
            {
                break;
            }
        }
    }

    private static void StartLinkedList(LinkedList linkedList)
    {
        linkedList.Add(1);
        linkedList.Add(2);
        linkedList.Add(3);
        linkedList.Add(4);

        linkedList.Print();

        linkedList.AddToFirstPosition(5);
        linkedList.Print();

        linkedList.AddToLastPosition(6);
        linkedList.Print();

        linkedList.Add(7);
        linkedList.Print();

        linkedList.RemoveAt(2);
        linkedList.Print();
    }
}