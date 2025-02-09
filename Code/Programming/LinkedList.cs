


namespace Practise.Programming;

public class Node
{
    public int Value { get; set; }
    public Node? Next { get; set; }

    public Node(int value) => Value = value;
}

internal class LinkedList
{
    public Node? Head { get; set; }

    public void Add(int value)
    {
        if (Head is null)
        {
            Head = new Node(value);
            return;
        }

        var head = Head;

        while (head?.Next is not null)
        {
            head = head.Next;
        }

        head!.Next = new Node(value);
    }

    internal void AddToFirstPosition(int value)
    {
        var newNode = new Node(value);

        if (Head is null)
        {
            Head = newNode;
            return;
        }

        var head = Head;
        newNode.Next = head;
        Head = newNode;
    }

    internal void AddToLastPosition(int value)
    {
        var newNode = new Node(value);
        if (Head is null)
        {
            Head = newNode;
            return;
        }
        var head = Head;
        while (head?.Next is not null)
        {
            head = head.Next;
        }
        head!.Next = newNode;
    }

    internal void Print()
    {
        var head = Head;
        var spacer = "==>";
        var result = "";

        while (head?.Next is not null)
        {
            result += $"{head.Value}{spacer}";
            head = head.Next;
        }

        result += $"{head?.Value}";

        Console.WriteLine(result);
    }

    internal void RemoveAt(int position)
    {
        var head = Head;
        var index = 0;

        while (head?.Next is not null && index < position)
        {
            index++;
        }

        if (head is null)
        {
            Console.WriteLine("Out of bound position");
            return;
        }

        head.Next = head.Next?.Next;
    }

    public void Reverse()
    {
        var head = Head;
        var newHead = Head;

        while (head?.Next is not null)
        {
            head = head.Next;

            var temp = newHead;
            newHead = head;
        }
    }
}
