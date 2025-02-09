namespace Practise.SOLID;

public interface IBlock
{
    void PerformAction();
}

public class Click : IBlock
{
    public void PerformAction()
    {
        Console.WriteLine("Click");
    }
}

public class SetCheckbox : IBlock
{
    public void PerformAction()
    {
        Console.WriteLine("SetCheckbox");
    }
}

public class SetDropdown : IBlock
{
    public void PerformAction()
    {
        Console.WriteLine("SetDropdown");
    }
}