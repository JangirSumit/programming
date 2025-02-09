```Csharp
// Step 1: Command Interface
public interface ICommand
{
    void Execute();
}

// Step 2: Concrete Commands
public class TurnOnCommand : ICommand
{
    private TV _tv;
    public TurnOnCommand(TV tv) => _tv = tv;
    public void Execute() => _tv.TurnOn();
}

public class TurnOffCommand : ICommand
{
    private TV _tv;
    public TurnOffCommand(TV tv) => _tv = tv;
    public void Execute() => _tv.TurnOff();
}

// Step 3: Receiver
public class TV
{
    public void TurnOn() => Console.WriteLine("TV is ON");
    public void TurnOff() => Console.WriteLine("TV is OFF");
}

// Step 4: Invoker
public class RemoteControl
{
    private ICommand _command;
    public void SetCommand(ICommand command) => _command = command;
    public void PressButton() => _command.Execute();
}

// Usage
var tv = new TV();
var remote = new RemoteControl();
remote.SetCommand(new TurnOnCommand(tv));
remote.PressButton();
```