namespace Practise.SOLID;

internal class InterfaceSegregationPrincipleViolation
{
    public interface IExample
    {
        void Do1();
        void Do2();
    }

    public class Example1 : IExample
    {
        public void Do1()
        {
            Console.WriteLine("Do1");
        }
        public void Do2()
        {
            throw new NotImplementedException();
        }
    }

    public class Example2 : IExample
    {
        public void Do1()
        {
            throw new NotImplementedException();
        }
        public void Do2()
        {
            Console.WriteLine("Do2");
        }
    }
}


internal class InterfaceSegregationPrinciple
{
    public interface IExample1
    {
        void Do1();
    }

    public interface IExample2
    {
        void Do2();
    }

    public class Example1 : IExample1
    {
        public void Do1()
        {
            Console.WriteLine("Do1");
        }
    }

    public class Example2 : IExample2
    {
        public void Do2()
        {
            Console.WriteLine("Do2");
        }
    }
}
