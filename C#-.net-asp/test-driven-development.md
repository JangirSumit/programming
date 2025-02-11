### **Test-Driven Development (TDD) in .NET**
Test-Driven Development (TDD) is a **software development process** that follows this cycle:

1. **Write a failing test** (Red)
2. **Write the minimal code** to pass the test (Green)
3. **Refactor** the code while ensuring tests still pass (Refactor)
4. **Repeat** the process

---

## **1. Setting Up TDD in .NET**
To follow TDD in .NET, you'll need:

- **.NET SDK** installed (for .NET 6/7/8+)
- **xUnit, MSTest, or NUnit** (popular unit testing frameworks)
- **FluentAssertions** (for better assertions)
- **Moq** (for mocking dependencies)

---

## **2. Creating a .NET TDD Project**
Run the following in a terminal:

```sh
mkdir TDDExample
cd TDDExample
dotnet new classlib -n TDDExample
dotnet new xunit -n TDDExample.Tests
dotnet add TDDExample.Tests/TDDExample.Tests.csproj reference TDDExample/TDDExample.csproj
dotnet add TDDExample.Tests package Moq FluentAssertions
```

This creates:
- A **Class Library** (`TDDExample`) for business logic
- A **Test Project** (`TDDExample.Tests`) using `xUnit`
- Adds **Moq** (for mocking) and **FluentAssertions** (for readable assertions)

---

## **3. Writing the First Test (RED)**
Create a failing test in `TDDExample.Tests/CalculatorTests.cs`:

```csharp
using Xunit;
using TDDExample;

public class CalculatorTests
{
    [Fact]
    public void Add_ShouldReturnSum_WhenTwoNumbersAreProvided()
    {
        // Arrange
        var calculator = new Calculator();

        // Act
        var result = calculator.Add(2, 3);

        // Assert
        Assert.Equal(5, result);
    }
}
```
🚨 **This test fails because the `Calculator` class does not exist yet!**  
Let's create it.

---

## **4. Implement Minimum Code (GREEN)**
Now, create the `Calculator` class in `TDDExample/Calculator.cs`:

```csharp
namespace TDDExample
{
    public class Calculator
    {
        public int Add(int a, int b)
        {
            return a + b; // Just enough to pass the test!
        }
    }
}
```

---

## **5. Run the Tests**
Run tests using:

```sh
dotnet test
```

✅ If the test passes, proceed to the next feature.  
🔴 If it fails, fix the implementation.

---

## **6. Refactor (Optional)**
Once tests pass, **refactor without changing behavior**.

For example, improving readability:

```csharp
public int Add(int a, int b) => a + b;
```

Run `dotnet test` again to ensure everything still works.

---

## **7. Adding More Tests**
Now, let's add tests for subtraction:

```csharp
[Fact]
public void Subtract_ShouldReturnDifference_WhenTwoNumbersAreProvided()
{
    // Arrange
    var calculator = new Calculator();

    // Act
    var result = calculator.Subtract(5, 3);

    // Assert
    Assert.Equal(2, result);
}
```

🚨 This test fails! We now implement `Subtract`:

```csharp
public int Subtract(int a, int b) => a - b;
```

---

## **8. Using Mocking (Dependency Injection Example)**
Let's say our `Calculator` relies on a **Logger**. We mock dependencies using **Moq**:

### **Modify Calculator to use logging**
```csharp
public class Calculator
{
    private readonly ILogger _logger;

    public Calculator(ILogger logger)
    {
        _logger = logger;
    }

    public int Add(int a, int b)
    {
        int result = a + b;
        _logger.Log($"Adding {a} + {b} = {result}");
        return result;
    }
}
```

### **Write a test using Moq**
```csharp
using Moq;
using Xunit;

public class CalculatorTests
{
    [Fact]
    public void Add_ShouldLogMessage_WhenCalled()
    {
        // Arrange
        var mockLogger = new Mock<ILogger>();
        var calculator = new Calculator(mockLogger.Object);

        // Act
        calculator.Add(2, 3);

        // Assert
        mockLogger.Verify(logger => logger.Log("Adding 2 + 3 = 5"), Times.Once);
    }
}
```

---

## **9. Running All Tests in CI/CD**
Integrate tests in **GitHub Actions, Azure DevOps, or GitLab CI/CD**:

```yaml
name: .NET TDD CI

on: [push, pull_request]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup .NET
        uses: actions/setup-dotnet@v3
        with:
          dotnet-version: '8.0.x'
      - name: Restore dependencies
        run: dotnet restore
      - name: Build
        run: dotnet build --no-restore
      - name: Test
        run: dotnet test --no-build --verbosity normal
```

---

## **10. Summary**
| Step | Action |
|------|--------|
| 1️⃣  | Write a failing test (RED) |
| 2️⃣  | Write minimal code to pass (GREEN) |
| 3️⃣  | Refactor (Refactor) |
| 4️⃣  | Repeat for new features |
| 5️⃣  | Automate tests in CI/CD |

---

## **Final Thoughts**
- 🚀 **TDD helps write clean, testable code from the start.**
- 🔄 **Fast feedback loop:** Write a test → Implement → Pass → Refactor.
- ✅ **Automated tests reduce regressions** in production.

Would you like an example with **integration tests** or **Mocking HTTP requests** next? 😊

-----------------------

### **Motive Behind Test-Driven Development (TDD)**  

Test-Driven Development (TDD) isn't just about testing—it's a **development methodology** aimed at improving **code quality, maintainability, and reliability**. Here are the key motives behind using TDD:

---

### **1. Ensuring Correctness from the Start**
- In TDD, **tests are written before implementation**.
- This forces developers to **think about requirements first**, leading to fewer bugs and misunderstandings.
- Example: If you're building a calculator, writing `Add_ShouldReturnSum_WhenTwoNumbersAreProvided` **before implementing `Add`** ensures the method behaves correctly from the start.

---

### **2. Faster Debugging and Easier Maintenance**
- If a new feature breaks something, **tests fail immediately**—making it easy to pinpoint the issue.
- When refactoring, you **already have test coverage** to ensure no unintended changes break functionality.
- Example: If you update a function, running tests ensures that existing features **still work correctly**.

---

### **3. Encouraging Simplicity and Minimal Code**
- Since you **only write code to pass tests**, TDD discourages **over-engineering**.
- Developers avoid unnecessary complexity and write **just enough code** to meet requirements.
- Example: Instead of adding multiple features at once, you build **incrementally**—one test at a time.

---

### **4. Improving Code Design and Modularity**
- Writing testable code often leads to **better software design**.
- TDD encourages **separation of concerns (SoC)**, leading to smaller, reusable, and modular functions.
- Example: Instead of writing a large, complex function, you break it into smaller, **independent** functions that can be tested individually.

---

### **5. Reducing Regression Bugs**
- Automated tests act as a **safety net** against regressions.
- When new code is added, tests ensure **existing functionality still works**.
- Example: If a developer changes a database query and an old test fails, it **immediately highlights potential breakage**.

---

### **6. Boosting Developer Confidence**
- Developers can **refactor and optimize code without fear** because tests validate correctness.
- It increases **trust in the codebase**, making collaboration easier across teams.
- Example: A junior developer can modify a function, run tests, and **immediately know if their changes are correct**.

---

### **7. Supporting Continuous Integration (CI) & DevOps**
- TDD works well with **CI/CD pipelines**—automated tests run on every commit.
- Bugs are caught early in **development** rather than in **production**.
- Example: In **GitHub Actions or Azure DevOps**, tests run automatically before merging changes.

---

### **8. Reducing Technical Debt**
- **Technical debt** accumulates when bad practices lead to code that is hard to maintain.
- Since TDD enforces **clean code and modular design**, future changes are **cheaper and faster**.
- Example: Without tests, modifying old code **may break things** without knowing. With TDD, you have tests ensuring safe modifications.

---

## **Summary: Why Use TDD?**
| Motive | Benefit |
|--------|---------|
| ✅ **Catch Bugs Early** | Writing tests first reduces defects. |
| ✅ **Faster Debugging** | Tests identify issues immediately. |
| ✅ **Better Design** | Code becomes more modular and testable. |
| ✅ **Confidence in Code** | Changes don’t break existing features. |
| ✅ **Easier Maintenance** | Tests act as documentation and prevent regressions. |
| ✅ **Improves CI/CD** | Automated testing ensures reliability in deployment. |

---

### **Final Thought: Is TDD Always Necessary?**
- **For core business logic?** ✅ **Yes**, it's highly recommended.
- **For UI-heavy apps?** ⚖️ **Depends**, integration tests might be better.
- **For quick prototypes?** 🚀 **Maybe not**, but unit tests should still be considered.

Would you like a deeper dive into **mocking, integration tests, or behavior-driven development (BDD)?** 😊