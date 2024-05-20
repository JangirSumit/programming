The Composite design pattern is a structural design pattern that allows you to compose objects into tree structures to represent part-whole hierarchies. It lets clients treat individual objects and compositions of objects uniformly.

### Implementing the Composite Pattern in C#

Let's consider a scenario where we have a file system with files and directories. A directory can contain both files and other directories.

### Step-by-Step Example

1. **Define the Component Interface**: This interface defines common operations for both individual and composite objects.
2. **Create Leaf Class**: This class represents leaf objects in the composition (e.g., files).
3. **Create Composite Class**: This class represents composite objects (e.g., directories) that can contain leaf objects or other composite objects.
4. **Use the Composite Pattern**: Implement a client that uses the composite structure.

#### 1. Define the Component Interface
This interface defines common operations for both leaf and composite objects.

```csharp
public interface IFileSystemComponent
{
    void Display(string indent);
}
```

#### 2. Create Leaf Class
This class represents leaf objects, such as files, in the composition.

```csharp
public class File : IFileSystemComponent
{
    public string Name { get; }

    public File(string name)
    {
        Name = name;
    }

    public void Display(string indent)
    {
        Console.WriteLine($"{indent}- {Name}");
    }
}
```

#### 3. Create Composite Class
This class represents composite objects, such as directories, that can contain other `IFileSystemComponent` objects.

```csharp
public class Directory : IFileSystemComponent
{
    public string Name { get; }
    private readonly List<IFileSystemComponent> _components = new List<IFileSystemComponent>();

    public Directory(string name)
    {
        Name = name;
    }

    public void Add(IFileSystemComponent component)
    {
        _components.Add(component);
    }

    public void Remove(IFileSystemComponent component)
    {
        _components.Remove(component);
    }

    public void Display(string indent)
    {
        Console.WriteLine($"{indent}+ {Name}");
        foreach (var component in _components)
        {
            component.Display(indent + "  ");
        }
    }
}
```

#### 4. Use the Composite Pattern
Implement a client that uses the composite structure.

```csharp
class Program
{
    static void Main()
    {
        // Create files
        IFileSystemComponent file1 = new File("File1.txt");
        IFileSystemComponent file2 = new File("File2.txt");
        IFileSystemComponent file3 = new File("File3.txt");

        // Create directories and add files
        Directory dir1 = new Directory("Dir1");
        dir1.Add(file1);

        Directory dir2 = new Directory("Dir2");
        dir2.Add(file2);
        dir2.Add(file3);

        // Create root directory and add subdirectories
        Directory root = new Directory("Root");
        root.Add(dir1);
        root.Add(dir2);

        // Display the structure
        root.Display("");
    }
}
```

### Complete Example

Here is the complete code together:

```csharp
using System;
using System.Collections.Generic;

public interface IFileSystemComponent
{
    void Display(string indent);
}

public class File : IFileSystemComponent
{
    public string Name { get; }

    public File(string name)
    {
        Name = name;
    }

    public void Display(string indent)
    {
        Console.WriteLine($"{indent}- {Name}");
    }
}

public class Directory : IFileSystemComponent
{
    public string Name { get; }
    private readonly List<IFileSystemComponent> _components = new List<IFileSystemComponent>();

    public Directory(string name)
    {
        Name = name;
    }

    public void Add(IFileSystemComponent component)
    {
        _components.Add(component);
    }

    public void Remove(IFileSystemComponent component)
    {
        _components.Remove(component);
    }

    public void Display(string indent)
    {
        Console.WriteLine($"{indent}+ {Name}");
        foreach (var component in _components)
        {
            component.Display(indent + "  ");
        }
    }
}

class Program
{
    static void Main()
    {
        // Create files
        IFileSystemComponent file1 = new File("File1.txt");
        IFileSystemComponent file2 = new File("File2.txt");
        IFileSystemComponent file3 = new File("File3.txt");

        // Create directories and add files
        Directory dir1 = new Directory("Dir1");
        dir1.Add(file1);

        Directory dir2 = new Directory("Dir2");
        dir2.Add(file2);
        dir2.Add(file3);

        // Create root directory and add subdirectories
        Directory root = new Directory("Root");
        root.Add(dir1);
        root.Add(dir2);

        // Display the structure
        root.Display("");
    }
}
```

### Explanation
- **IFileSystemComponent**: The component interface that declares a method for displaying the component.
- **File**: The leaf class that represents individual objects in the composition. It implements the `IFileSystemComponent` interface.
- **Directory**: The composite class that represents composite objects. It contains a list of `IFileSystemComponent` objects and implements the `IFileSystemComponent` interface.
- **Program**: The client that creates a tree structure of files and directories and displays it using the composite pattern.

This implementation allows you to treat individual objects (files) and compositions of objects (directories) uniformly, enabling recursive composition. The composite pattern is useful for building hierarchical structures and working with tree-like data.



-----------------------------------------------------------------------


Certainly! Let's explore another example of the Composite design pattern. This time, we'll consider a company hierarchy where employees can be both individual contributors and managers who have other employees reporting to them.

### Step-by-Step Example

1. **Define the Component Interface**: This interface defines the common operations for both individual employees and composite employees (managers).
2. **Create Leaf Class**: This class represents individual employees.
3. **Create Composite Class**: This class represents composite employees (managers) who can contain other employees.
4. **Use the Composite Pattern**: Implement a client that uses the composite structure to display the company hierarchy.

#### 1. Define the Component Interface

This interface defines common operations for both leaf and composite objects.

```csharp
public interface IEmployee
{
    void Display(int indent);
}
```

#### 2. Create Leaf Class

This class represents individual employees in the hierarchy.

```csharp
public class Employee : IEmployee
{
    public string Name { get; }
    public string Position { get; }

    public Employee(string name, string position)
    {
        Name = name;
        Position = position;
    }

    public void Display(int indent)
    {
        Console.WriteLine(new string(' ', indent) + $"{Name} - {Position}");
    }
}
```

#### 3. Create Composite Class

This class represents composite employees (managers) who can contain other employees.

```csharp
public class Manager : IEmployee
{
    public string Name { get; }
    public string Position { get; }
    private readonly List<IEmployee> _subordinates = new List<IEmployee>();

    public Manager(string name, string position)
    {
        Name = name;
        Position = position;
    }

    public void Add(IEmployee employee)
    {
        _subordinates.Add(employee);
    }

    public void Remove(IEmployee employee)
    {
        _subordinates.Remove(employee);
    }

    public void Display(int indent)
    {
        Console.WriteLine(new string(' ', indent) + $"{Name} - {Position}");
        foreach (var subordinate in _subordinates)
        {
            subordinate.Display(indent + 2);
        }
    }
}
```

#### 4. Use the Composite Pattern

Now, you can use the composite structure to display the company hierarchy.

```csharp
class Program
{
    static void Main()
    {
        // Create individual employees
        IEmployee emp1 = new Employee("John Doe", "Developer");
        IEmployee emp2 = new Employee("Jane Smith", "Designer");
        IEmployee emp3 = new Employee("Emily Davis", "Developer");

        // Create a manager and add employees to their team
        Manager manager1 = new Manager("Alice Johnson", "Team Lead");
        manager1.Add(emp1);
        manager1.Add(emp2);

        // Create another manager and add employees and another manager to their team
        Manager manager2 = new Manager("Bob Brown", "Development Manager");
        manager2.Add(manager1);
        manager2.Add(emp3);

        // Create the CEO and add managers to their team
        Manager ceo = new Manager("Charlie Wilson", "CEO");
        ceo.Add(manager2);

        // Display the company hierarchy
        ceo.Display(0);
    }
}
```

### Complete Example

Here is the complete code together:

```csharp
using System;
using System.Collections.Generic;

public interface IEmployee
{
    void Display(int indent);
}

public class Employee : IEmployee
{
    public string Name { get; }
    public string Position { get; }

    public Employee(string name, string position)
    {
        Name = name;
        Position = position;
    }

    public void Display(int indent)
    {
        Console.WriteLine(new string(' ', indent) + $"{Name} - {Position}");
    }
}

public class Manager : IEmployee
{
    public string Name { get; }
    public string Position { get; }
    private readonly List<IEmployee> _subordinates = new List<IEmployee>();

    public Manager(string name, string position)
    {
        Name = name;
        Position = position;
    }

    public void Add(IEmployee employee)
    {
        _subordinates.Add(employee);
    }

    public void Remove(IEmployee employee)
    {
        _subordinates.Remove(employee);
    }

    public void Display(int indent)
    {
        Console.WriteLine(new string(' ', indent) + $"{Name} - {Position}");
        foreach (var subordinate in _subordinates)
        {
            subordinate.Display(indent + 2);
        }
    }
}

class Program
{
    static void Main()
    {
        // Create individual employees
        IEmployee emp1 = new Employee("John Doe", "Developer");
        IEmployee emp2 = new Employee("Jane Smith", "Designer");
        IEmployee emp3 = new Employee("Emily Davis", "Developer");

        // Create a manager and add employees to their team
        Manager manager1 = new Manager("Alice Johnson", "Team Lead");
        manager1.Add(emp1);
        manager1.Add(emp2);

        // Create another manager and add employees and another manager to their team
        Manager manager2 = new Manager("Bob Brown", "Development Manager");
        manager2.Add(manager1);
        manager2.Add(emp3);

        // Create the CEO and add managers to their team
        Manager ceo = new Manager("Charlie Wilson", "CEO");
        ceo.Add(manager2);

        // Display the company hierarchy
        ceo.Display(0);
    }
}
```

### Explanation
- **IEmployee**: The component interface that declares the `Display` method for displaying employee details.
- **Employee**: The leaf class that represents individual employees and implements the `IEmployee` interface.
- **Manager**: The composite class that represents managers. It contains a list of `IEmployee` objects and implements the `IEmployee` interface.
- **Program**: The client that creates a hierarchical structure of employees and managers and displays it using the composite pattern.

This implementation allows you to build complex organizational structures from simpler ones and treat both individual employees and groups of employees uniformly. The composite pattern is useful for building hierarchical structures and working with tree-like data, providing flexibility and reusability in your design.