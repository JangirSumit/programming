C# 12, released as part of .NET 8, introduces several new features and enhancements aimed at improving developer productivity, code readability, and performance. Below are some of the notable features of C# 12:

### 1. Primary Constructors for All Types

C# 12 extends primary constructors, previously available for records, to all types. This allows you to define a constructor directly in the type declaration, simplifying the initialization of properties.

```csharp
class Person(string name, int age)
{
    public string Name { get; } = name;
    public int Age { get; } = age;
}
```

### 2. Collection Literals

C# 12 introduces collection literals, enabling more concise syntax for creating collections. This makes initializing lists, dictionaries, and other collections more straightforward.

```csharp
var list = [1, 2, 3, 4, 5];
var dictionary = ["key1": "value1", "key2": "value2"];
```

### 3. Default Values for Lambda Parameters

Lambda expressions in C# 12 can now have default parameter values, enhancing their flexibility and reducing boilerplate code.

```csharp
Func<int, int, int> add = (x = 1, y = 2) => x + y;
Console.WriteLine(add()); // Output: 3
```

### 4. Inline Arrays

Inline arrays allow the declaration of arrays directly within methods, properties, or other code blocks, making array initialization more concise.

```csharp
var numbers = [1, 2, 3, 4, 5];
```

### 5. Using Directives in Method Scope

C# 12 allows `using` directives inside method bodies, limiting the scope of using directives to specific methods and improving code organization.

```csharp
void MyMethod()
{
    using System.Text;
    var sb = new StringBuilder();
    // Use StringBuilder within this method only
}
```

### 6. Relaxed Shift Operator Requirements

The shift operators (`<<`, `>>`) in C# 12 have been relaxed to allow for more flexible and intuitive usage, especially when dealing with larger bit shifts.

```csharp
int x = 1;
x <<= 32; // No longer requires an explicit cast or warning
```

### 7. With Expressions for All Types

C# 12 introduces `with` expressions for all types, not just records. This feature allows for creating new instances of types with modified properties in an immutable manner.

```csharp
var person1 = new Person("John", 30);
var person2 = person1 with { Age = 31 };
```

### 8. Improved Interpolation

String interpolation in C# 12 has been enhanced to support more complex expressions and improved formatting options.

```csharp
var name = "John";
var age = 30;
var message = $"Name: {name}, Age: {age,2:D}";
```

### 9. Expanded Pattern Matching

C# 12 continues to enhance pattern matching, making it even more powerful and expressive with new patterns and capabilities.

```csharp
static string DescribeShape(Shape shape) => shape switch
{
    Circle { Radius: > 10 } => "Large Circle",
    Rectangle { Width: < 5, Height: < 5 } => "Small Rectangle",
    _ => "Unknown Shape"
};
```

### 10. Inline Initialization of Dictionary Elements

C# 12 allows the inline initialization of dictionary elements within collection literals, making dictionary initialization more concise and readable.

```csharp
var dict = ["key1" => 1, "key2" => 2];
```

### Summary

C# 12 introduces several new features aimed at making the language more powerful and expressive, while also reducing boilerplate and improving readability. The primary features include:

- Primary Constructors for All Types
- Collection Literals
- Default Values for Lambda Parameters
- Inline Arrays
- Using Directives in Method Scope
- Relaxed Shift Operator Requirements
- With Expressions for All Types
- Improved Interpolation
- Expanded Pattern Matching
- Inline Initialization of Dictionary Elements

These enhancements continue to make C# a versatile and modern programming language, catering to the needs of developers building applications across various domains.