namespace Practise.DesignPatterns.Structural;

internal class Decorator
{
    // Adds new functionality to an existing object without altering its structure.
    public interface IText
    {
        string Format();
    }

    public class Text : IText
    {
        private readonly string _text;
        public Text(string text)
        {
            _text = text;
        }
        public string Format()
        {
            return _text;
        }
    }

    public class TextDecorator : IText
    {
        private readonly IText _text;
        public TextDecorator(IText text)
        {
            _text = text;
        }
        public virtual string Format()
        {
            return _text.Format();
        }
    }

    public class BoldDecorator : TextDecorator
    {
        public BoldDecorator(IText text) : base(text) { }

        public override string Format()
        {
            Console.WriteLine("Bold");
            return $"<b>{base.Format()}</b>";
        }
    }

    public class ItalicDecorator : TextDecorator
    {
        public ItalicDecorator(IText text) : base(text) { }
        public override string Format()
        {
            Console.WriteLine("Italic");
            return $"<i>{base.Format()}</i>";
        }
    }

    public class UnderlineDecorator : TextDecorator
    {
        public UnderlineDecorator(IText text) : base(text) { }
        public override string Format()
        {
            Console.WriteLine("Underline");
            return $"<u>{base.Format()}</u>";
        }
    }

    public class Application
    {
        public Application()
        {
            IText plainText = new Text("Hello, World!");

            IText boldText = new BoldDecorator(plainText);
            IText italicBoldText = new ItalicDecorator(boldText);
            IText underlineItalicBoldText = new UnderlineDecorator(italicBoldText);

            Console.WriteLine(plainText.Format());
            Console.WriteLine(boldText.Format());
            Console.WriteLine(italicBoldText.Format());
            Console.WriteLine(underlineItalicBoldText.Format());
        }
    }
}
