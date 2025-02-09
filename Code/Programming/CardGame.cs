namespace Practise.Programming;


public enum Suit { Heart, Diamond, spade, Club }
public enum Rank { Two = 2, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King, Ace }

public class Card
{
    public Suit Suit { get; set; }
    public Rank Rank { get; set; }

    public Card(Suit suit, Rank rank)
    {
        Suit = suit;
        Rank = rank;
    }

    public override string ToString() => $"{Rank} of {Suit}";
}

public class Deck
{
    public List<Card> Cards { get; set; }

    public Deck()
    {
        Cards = new List<Card>();

        foreach (Suit suit in Enum.GetValues(typeof(Suit)))
        {
            foreach (Rank rank in Enum.GetValues(typeof(Rank)))
            {
                Cards.Add(new Card(suit, rank));
            }
        }
    }

    public void Shuffle()
    {
        var random = new Random();
        for (int i = 0; i < Cards.Count; i++)
        {
            int j = random.Next(i, Cards.Count);
            (Cards[j], Cards[i]) = (Cards[i], Cards[j]);
        }
    }

    public void Sort()
    {
        Cards.Sort((a, b) => a.Rank.CompareTo(b.Rank));
    }

    public void Print()
    {
        foreach (var card in Cards)
        {
            var forgroundColor = Console.ForegroundColor;

            switch (card.Suit)
            {
                case Suit.Heart:
                    Console.ForegroundColor = ConsoleColor.Red;
                    break;
                case Suit.Diamond:
                    Console.ForegroundColor = ConsoleColor.Red;
                    break;
                case Suit.spade:
                    Console.ForegroundColor = ConsoleColor.Blue;
                    break;
                case Suit.Club:
                    Console.ForegroundColor = ConsoleColor.Blue;
                    break;
                default:
                    break;
            }
            Console.WriteLine(card.ToString());
            Console.ForegroundColor = forgroundColor;
        }
    }
}
