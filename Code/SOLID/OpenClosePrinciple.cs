namespace Practise.SOLID;

internal class OpenClosePrincipleViolation
{
    public static void PerformAction(string block)
    {
        switch (block)
        {
            case "Click":
                Console.WriteLine("Peforming Click");
                break;
            case "SetDropdown":
                Console.WriteLine("Performing Set dropdown");
                break;

            case "SetCheckbox":
                Console.WriteLine("Performing Set checkbox");
                break;
            default:
                Console.WriteLine("Block type is not supported");
                break;
        }
    }
}

internal class OpenClosePrinciple
{
    public static void PerformAction(IBlock block)
    {
        block.PerformAction();
    }
}
