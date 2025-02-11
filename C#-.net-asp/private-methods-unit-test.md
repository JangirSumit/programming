Testing private methods directly is generally **not recommended**, as unit tests should focus on **public APIs** (i.e., public methods) to validate behavior. However, there are cases where testing private methods might be necessary, such as complex internal logic that isn't easily tested through public methods.

Here are several ways to test private methods in C#:

---

### **1. Use Public Methods to Indirectly Test Private Methods (Best Practice)**
If a private method contributes to the logic of a **public method**, write test cases for the **public method**. This ensures that private methods are tested **indirectly**.

**Example:**
```csharp
public class Calculator
{
    public int Add(int a, int b) => Sum(a, b);

    private int Sum(int x, int y) => x + y;
}
```
**Test Case (Indirectly Testing `Sum`)**
```csharp
[Test]
public void Add_ShouldReturnSum()
{
    var calculator = new Calculator();
    int result = calculator.Add(3, 5);
    Assert.AreEqual(8, result);
}
```
✅ This approach follows **Encapsulation** principles.

---

### **2. Use Reflection to Access Private Methods (Not Recommended for Normal Use)**
If you **must** test a private method directly, you can use **Reflection** to access it.

**Example:**
```csharp
[Test]
public void Sum_ShouldReturnCorrectResult()
{
    var calculator = new Calculator();
    MethodInfo method = typeof(Calculator).GetMethod("Sum", BindingFlags.NonPublic | BindingFlags.Instance);
    int result = (int)method.Invoke(calculator, new object[] { 3, 5 });
    Assert.AreEqual(8, result);
}
```
⚠ **Downsides**:
- Breaks encapsulation.
- Fails if the private method name changes.
- Harder to maintain.

---

### **3. Use InternalsVisibleTo for Internal Methods**
If the method is **internal** instead of private, you can expose it to your test project by adding this to your **AssemblyInfo.cs** or `.csproj`:

```csharp
[assembly: InternalsVisibleTo("YourTestProject")]
```
Then, change the method from `private` → `internal` and test it normally.

---

### **4. Use Partial Classes in Test Projects**
You can create a **partial class** in the test project that exposes private methods.

```csharp
// Original class (in Production Code)
public partial class Calculator
{
    private int Sum(int x, int y) => x + y;
}

// Partial class in Test Project (only available in test scope)
public partial class Calculator
{
    public int Test_Sum(int x, int y) => Sum(x, y);
}

// Unit Test
[Test]
public void TestSum_ShouldReturnCorrectResult()
{
    var calculator = new Calculator();
    int result = calculator.Test_Sum(3, 5);
    Assert.AreEqual(8, result);
}
```
✅ Safer than reflection, but still breaks encapsulation.

---

### **5. Convert Private Method into a Separate Class (Refactoring Approach)**
If the private method contains complex logic, consider **extracting it into a separate class** with a **public method**, which makes it easier to test.

**Before:**
```csharp
public class Calculator
{
    private int Sum(int x, int y) => x + y;
}
```
**After (Extracted Logic into a Separate Class):**
```csharp
public class MathHelper
{
    public int Sum(int x, int y) => x + y;
}
```
Now, `MathHelper` can be unit tested independently.

---

### **Which Approach Should You Use?**
| Approach | Pros | Cons |
|----------|------|------|
| **Test via Public Methods (Best Practice)** | Encapsulation remains intact | Might require extra logic |
| **Reflection** | Works for private methods | Hard to maintain, breaks encapsulation |
| **InternalsVisibleTo** | Allows normal unit testing | Only works for `internal` methods |
| **Partial Classes** | No need for reflection | Still exposes private methods |
| **Refactoring (Extract Method to Separate Class)** | Best long-term solution | Requires code changes |

Would you like a **real-world scenario** for one of these approaches? 🚀