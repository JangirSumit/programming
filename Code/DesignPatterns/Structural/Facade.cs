namespace Practise.DesignPatterns.Structural;

internal class Facade
{
    // Facade pattern provides a simplified interface to a complex system.

    public class SubsystemA
    {
        public void OperationA()
        {
            Console.WriteLine("Subsystem A");
        }
    }

    public class SubsystemB
    {
        public void OperationB()
        {
            Console.WriteLine("Subsystem B");
        }
    }

    public class SubsystemC
    {
        public void OperationC()
        {
            Console.WriteLine("Subsystem C");
        }
    }

    public class SubSystemFacade
    {
        // Abstraction of the subsystems.
        public void Operation()
        {
            var subsystemA = new SubsystemA();
            var subsystemB = new SubsystemB();
            var subsystemC = new SubsystemC();
            subsystemA.OperationA();
            subsystemB.OperationB();
            subsystemC.OperationC();
        }
    }

    public class Application
    {
        private readonly SubSystemFacade _subSystemFacade;
        public Application(SubSystemFacade subSystemFacade)
        {
            _subSystemFacade = subSystemFacade;
        }
        public void Run()
        {
            _subSystemFacade.Operation();
        }
    }
}
