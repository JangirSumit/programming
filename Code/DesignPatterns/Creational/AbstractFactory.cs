namespace Practise.DesignPatterns.Creational;

internal class AbstractFactory
{
    public interface IButton
    { 
        void Render();
    }

    public interface ICheckbox
    {
        void Render();
    }

    public class DynamicsButton : IButton
    {
        public void Render() => Console.WriteLine("Windows button rendered");
    }

    public class DynamicsCheckbox : ICheckbox
    {
        public void Render() => Console.WriteLine("Windows checkbox rendered");
    }

    public class SalesforceButton : IButton
    {
        public void Render() => Console.WriteLine("Salesforce button rendered");
    }

    public class SalesforceCheckbox : ICheckbox
    {
        public void Render() => Console.WriteLine("Salesforce checkbox rendered");

    }

    public interface IElementFactory
    {
        IButton CreateButton();
        ICheckbox CreateCheckbox();
    }

    public class DynamicsElementFactory : IElementFactory
    {
        public IButton CreateButton() => new DynamicsButton();
        public ICheckbox CreateCheckbox() => new DynamicsCheckbox();
    }

    public class SalesforceElementFactory : IElementFactory
    {
        public IButton CreateButton() => new SalesforceButton();
        public ICheckbox CreateCheckbox() => new SalesforceCheckbox();
    }

    public class Application
    {
        private readonly IElementFactory _elementFactory;
        public Application(IElementFactory elementFactory)
        {
            _elementFactory = elementFactory;
        }
        public void RenderButton()
        {
            var button = _elementFactory.CreateButton();
            button.Render();
        }
        public void RenderCheckbox()
        {
            var checkbox = _elementFactory.CreateCheckbox();
            checkbox.Render();
        }
    }
}
