The keywords **`virtual`**, **`override`**, and **`new`** in C# are used in **method overriding and hiding** when working with **inheritance**. Here's how they work and when to use them:

---

## **1. `virtual` - Allowing Method Overriding**
- When a method is marked as `virtual` in a **base class**, it **allows** derived classes to override it.

```csharp
public class BaseClass
{
    public virtual void Show()
    {
        Console.WriteLine("BaseClass Show");
    }
}

public class DerivedClass : BaseClass
{
    public override void Show()
    {
        Console.WriteLine("DerivedClass Show");
    }
}

BaseClass obj = new DerivedClass();
obj.Show();  // Output: "DerivedClass Show"
```

**Key Points:**
✔ `virtual` allows method overriding.  
✔ The derived class **must** use `override` to modify the method.  
✔ The call is **polymorphic**—the derived class method executes even if called on a base class reference.

---

## **2. `override` - Replacing a Virtual Method**
- When a derived class needs to modify the behavior of a `virtual` method, it uses `override`.

```csharp
public class Parent
{
    public virtual void Display()
    {
        Console.WriteLine("Parent Display");
    }
}

public class Child : Parent
{
    public override void Display()
    {
        Console.WriteLine("Child Display");
    }
}

Parent obj = new Child();
obj.Display();  // Output: "Child Display"
```

**Key Points:**
✔ `override` must be used when modifying a `virtual` method.  
✔ It **replaces** the base method implementation.  
✔ Calls to the method are **resolved at runtime** (runtime polymorphism).

---

## **3. `new` - Hiding Base Class Methods**
- If a method in the **base class** is **not virtual**, but you still define a method with the same name in the derived class, use `new` to **hide** it.

```csharp
public class Animal
{
    public void Speak()
    {
        Console.WriteLine("Animal speaks");
    }
}

public class Dog : Animal
{
    public new void Speak()
    {
        Console.WriteLine("Dog barks");
    }
}

Animal animal = new Dog();
animal.Speak();  // Output: "Animal speaks"

Dog dog = new Dog();
dog.Speak();  // Output: "Dog barks"
```

**Key Points:**
✔ `new` hides the base method instead of overriding it.  
✔ If called using a base class reference, the **base class method** executes.  
✔ If called using a derived class reference, the **derived method** executes.

---

## **4. `new` vs. `override` - Key Differences**
| Feature | `override` | `new` |
|---------|-----------|-------|
| Requires `virtual` method in base class | ✅ Yes | ❌ No |
| Supports polymorphism (base class reference calls derived method) | ✅ Yes | ❌ No |
| Modifies behavior of base class method | ✅ Yes | ❌ No (hides it) |
| Works with base class reference | ✅ Yes | ❌ No |

---

### **Which One to Use?**
- ✅ Use `override` when modifying a `virtual` method for **polymorphism**.
- ✅ Use `new` when **hiding** a method that is **not virtual**.

Would you like an example with `abstract` methods or interfaces as well? 🚀