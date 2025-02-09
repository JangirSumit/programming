### **Facade Design Pattern in C#**
The **Facade Pattern** is a **structural design pattern** that provides a **simplified interface** to a **complex system of classes, libraries, or APIs**.

---

## **📌 When to Use?**
✅ When you need to **simplify a complex system** for the client.  
✅ When you want to **reduce dependencies** between the client and multiple subsystems.  
✅ When you need a **single entry point** for multiple services.

---

## **🛠 Example: Home Theater System**
Imagine a **Home Theater System** with multiple subsystems:  
- **DVD Player**
- **Projector**
- **Sound System**
- **Lights**

💡 Instead of making the user call each system separately, we provide a **single `HomeTheaterFacade`** that handles everything.

---

### **1️⃣ Subsystems (Individual Components)**
```csharp
public class DVDPlayer
{
    public void TurnOn() => Console.WriteLine("DVD Player is ON");
    public void PlayMovie(string movie) => Console.WriteLine($"Playing movie: {movie}");
    public void TurnOff() => Console.WriteLine("DVD Player is OFF");
}

public class Projector
{
    public void TurnOn() => Console.WriteLine("Projector is ON");
    public void SetInputSource(string source) => Console.WriteLine($"Projector input set to {source}");
    public void TurnOff() => Console.WriteLine("Projector is OFF");
}

public class SoundSystem
{
    public void TurnOn() => Console.WriteLine("Sound System is ON");
    public void SetVolume(int level) => Console.WriteLine($"Volume set to {level}");
    public void TurnOff() => Console.WriteLine("Sound System is OFF");
}

public class Lights
{
    public void DimLights(int level) => Console.WriteLine($"Lights dimmed to {level}%");
}
```

---

### **2️⃣ Create the Facade**
```csharp
public class HomeTheaterFacade
{
    private readonly DVDPlayer _dvdPlayer;
    private readonly Projector _projector;
    private readonly SoundSystem _soundSystem;
    private readonly Lights _lights;

    public HomeTheaterFacade()
    {
        _dvdPlayer = new DVDPlayer();
        _projector = new Projector();
        _soundSystem = new SoundSystem();
        _lights = new Lights();
    }

    public void WatchMovie(string movie)
    {
        Console.WriteLine("\n🎬 Starting Movie Experience...");
        _lights.DimLights(30);
        _soundSystem.TurnOn();
        _soundSystem.SetVolume(50);
        _projector.TurnOn();
        _projector.SetInputSource("DVD Player");
        _dvdPlayer.TurnOn();
        _dvdPlayer.PlayMovie(movie);
    }

    public void EndMovie()
    {
        Console.WriteLine("\n🛑 Stopping Movie...");
        _dvdPlayer.TurnOff();
        _projector.TurnOff();
        _soundSystem.TurnOff();
        _lights.DimLights(100);
    }
}
```

---

### **3️⃣ Client Code (Simplified Interface)**
```csharp
class Program
{
    static void Main()
    {
        var homeTheater = new HomeTheaterFacade();

        homeTheater.WatchMovie("Inception");
        homeTheater.EndMovie();
    }
}
```

---

### **📌 Output**
```
🎬 Starting Movie Experience...
Lights dimmed to 30%
Sound System is ON
Volume set to 50
Projector is ON
Projector input set to DVD Player
DVD Player is ON
Playing movie: Inception

🛑 Stopping Movie...
DVD Player is OFF
Projector is OFF
Sound System is OFF
Lights dimmed to 100%
```

---

## **✅ Benefits of Facade Pattern**
✔ **Hides complexity** – The client only interacts with `HomeTheaterFacade`, not individual subsystems.  
✔ **Loose coupling** – The client doesn’t need to know about internal details.  
✔ **Improves maintainability** – Changes in subsystems don’t affect client code.  

---

Would you like another example, maybe something related to **APIs or Database Operations**? 🚀