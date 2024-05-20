The Decorator design pattern is a structural pattern that allows behavior to be added to individual objects, dynamically, without affecting the behavior of other objects from the same class. This pattern is useful for adhering to the Single Responsibility Principle since it allows functionality to be divided between classes with unique areas of concern.

### Implementing the Decorator Pattern in C#

Let's consider an example where we have a simple text editor that can apply different formatting styles like bold, italic, and underline to text.

### Step-by-Step Example

1. **Define the Component Interface**: This interface will define the common operations for both the core object and its decorators.
2. **Create Concrete Component**: This class will represent the core object to which additional responsibilities can be added.
3. **Create Base Decorator**: This class will implement the component interface and will have a reference to a component object.
4. **Create Concrete Decorators**: These classes will extend the base decorator class and add additional functionality.

#### 1. Define the Component Interface

This interface defines the common operations for both the core object and its decorators.

```csharp
public interface IText
{
    string Format();
}
```

#### 2. Create Concrete Component

This class represents the core object that will have additional responsibilities dynamically added.

```csharp
public class PlainText : IText
{
    private readonly string _text;

    public PlainText(string text)
    {
        _text = text;
    }

    public string Format()
    {
        return _text;
    }
}
```

#### 3. Create Base Decorator

This class implements the component interface and has a reference to a component object. It forwards all requests to this component.

```csharp
public abstract class TextDecorator : IText
{
    protected readonly IText _text;

    protected TextDecorator(IText text)
    {
        _text = text;
    }

    public virtual string Format()
    {
        return _text.Format();
    }
}
```

#### 4. Create Concrete Decorators

These classes extend the base decorator class and add additional functionality.

```csharp
public class BoldDecorator : TextDecorator
{
    public BoldDecorator(IText text) : base(text)
    {
    }

    public override string Format()
    {
        return "<b>" + base.Format() + "</b>";
    }
}

public class ItalicDecorator : TextDecorator
{
    public ItalicDecorator(IText text) : base(text)
    {
    }

    public override string Format()
    {
        return "<i>" + base.Format() + "</i>";
    }
}

public class UnderlineDecorator : TextDecorator
{
    public UnderlineDecorator(IText text) : base(text)
    {
    }

    public override string Format()
    {
        return "<u>" + base.Format() + "</u>";
    }
}
```

#### 5. Use the Decorator Pattern

Now, you can use the decorators to dynamically add responsibilities to the core object.

```csharp
class Program
{
    static void Main()
    {
        IText plainText = new PlainText("Hello, World!");

        IText boldText = new BoldDecorator(plainText);
        IText italicBoldText = new ItalicDecorator(boldText);
        IText underlineItalicBoldText = new UnderlineDecorator(italicBoldText);

        Console.WriteLine(plainText.Format());
        Console.WriteLine(boldText.Format());
        Console.WriteLine(italicBoldText.Format());
        Console.WriteLine(underlineItalicBoldText.Format());
    }
}
```

### Complete Example

Here is the complete code together:

```csharp
using System;

public interface IText
{
    string Format();
}

public class PlainText : IText
{
    private readonly string _text;

    public PlainText(string text)
    {
        _text = text;
    }

    public string Format()
    {
        return _text;
    }
}

public abstract class TextDecorator : IText
{
    protected readonly IText _text;

    protected TextDecorator(IText text)
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
    public BoldDecorator(IText text) : base(text)
    {
    }

    public override string Format()
    {
        return "<b>" + base.Format() + "</b>";
    }
}

public class ItalicDecorator : TextDecorator
{
    public ItalicDecorator(IText text) : base(text)
    {
    }

    public override string Format()
    {
        return "<i>" + base.Format() + "</i>";
    }
}

public class UnderlineDecorator : TextDecorator
{
    public UnderlineDecorator(IText text) : base(text)
    {
    }

    public override string Format()
    {
        return "<u>" + base.Format() + "</u>";
    }
}

class Program
{
    static void Main()
    {
        IText plainText = new PlainText("Hello, World!");

        IText boldText = new BoldDecorator(plainText);
        IText italicBoldText = new ItalicDecorator(boldText);
        IText underlineItalicBoldText = new UnderlineDecorator(italicBoldText);

        Console.WriteLine(plainText.Format());
        Console.WriteLine(boldText.Format());
        Console.WriteLine(italicBoldText.Format());
        Console.WriteLine(underlineItalicBoldText.Format());
    }
}
```

### Explanation
- **IText**: The component interface that declares the `Format` method for formatting text.
- **PlainText**: The concrete component that implements the `IText` interface and represents the core object.
- **TextDecorator**: The base decorator class that implements the `IText` interface and has a reference to a component object.
- **BoldDecorator**, **ItalicDecorator**, **UnderlineDecorator**: The concrete decorator classes that extend the base decorator class and add additional functionality.

This implementation allows you to add responsibilities to objects dynamically and flexibly, adhering to the Open/Closed Principle. The decorator pattern is useful for adding functionality to objects without modifying their structure, providing a scalable and maintainable solution for extending behavior.