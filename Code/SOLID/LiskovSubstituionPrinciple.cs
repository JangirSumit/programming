namespace Practise.SOLID;

internal class LiskovSubstituionPrincipleViolation
{
    public class Rectangle
    {
        public int Width { get; set; }
        public int Height { get; set; }
        public int Area => Width * Height;
    }

    public class Square : Rectangle
    {
        public new int Width
        {
            set
            {
                base.Width = value;
                base.Height = value;
            }
        }
        public new int Height
        {
            set
            {
                base.Width = value;
                base.Height = value;
            }
        }
    }

    public static void CalculateArea(Rectangle rectangle)
    {
        rectangle.Width = 4;
        rectangle.Height = 5;
        Console.WriteLine(rectangle.Area);
    }
}


internal class LiskovSubstituionPrinciple
{
    public interface IShape
    {
        int Area { get; }
    }

    public class Rectangle : IShape
    {
        public int Width { get; set; }
        public int Height { get; set; }
        public int Area => Width * Height;
    }

    public class Square : IShape
    {
        public int Side { get; set; }
        public int Area => Side * Side;
    }

    public static void CalculateArea(IShape shape)
    {
        Console.WriteLine(shape.Area);
    }
}
