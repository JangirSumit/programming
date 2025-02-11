In testing, particularly in **unit testing** (e.g., using xUnit in .NET), the terms **Fact** and **Theory** have specific meanings:

### **1. `[Fact]` (Single Case, Deterministic Test)**
- Used for **single test cases** that do not take any parameters.
- The test **always runs the same way**.
- It is like a **fixed assertion** that must always hold true.

#### ✅ **Example:**
```csharp
using Xunit;

public class MathTests
{
    [Fact]
    public void AddingTwoNumbers_ReturnsCorrectSum()
    {
        int result = 2 + 3;
        Assert.Equal(5, result);
    }
}
```
- This test **always runs with the same values** (2 and 3).
- There are **no variations**.

---

### **2. `[Theory]` (Parameterized Test, Multiple Cases)**
- Used for **parameterized tests** that run **multiple scenarios**.
- Requires **`[InlineData]`**, `[MemberData]`, or `[ClassData]` to provide test inputs.
- Allows testing **multiple variations of inputs** with a **single test method**.

#### ✅ **Example using `[InlineData]`:**
```csharp
using Xunit;

public class MathTests
{
    [Theory]
    [InlineData(2, 3, 5)]
    [InlineData(10, 5, 15)]
    [InlineData(0, 0, 0)]
    public void AddingNumbers_ReturnsCorrectSum(int a, int b, int expected)
    {
        int result = a + b;
        Assert.Equal(expected, result);
    }
}
```
- This test **runs three times** with different inputs:
  - `(2,3) → 5`
  - `(10,5) → 15`
  - `(0,0) → 0`

---

### **Key Differences**
| Feature       | `[Fact]` | `[Theory]` |
|--------------|---------|------------|
| Parameters   | ❌ No parameters | ✅ Supports multiple inputs |
| Test Runs    | ✅ Runs once | ✅ Runs multiple times with different data |
| Use Case     | ✅ Fixed, simple test cases | ✅ Parameterized tests for multiple scenarios |
| Example      | `Assert.Equal(5, 2+3);` | `Assert.Equal(expected, a+b);` |

**Use `[Fact]` when:**  
✔ You need a single, self-contained test with no parameters.  

**Use `[Theory]` when:**  
✔ You want to **test multiple inputs** using the same logic.

---

### **When to Use Each?**
- If a test **does not depend on external input**, use **`[Fact]`**.
- If a test **needs to run with different sets of data**, use **`[Theory]`**.

Let me know if you need more details! 🚀