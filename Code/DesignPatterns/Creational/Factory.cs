namespace Practise.DesignPatterns.Creational;

internal class Factory
{
    public interface IBrowser
    {
        void Launch();
    }

    public class Chrome : IBrowser
    {
        public void Launch() => Console.WriteLine("Chrome launched");
    }

    public class Firefox : IBrowser
    {
        public void Launch() => Console.WriteLine("Firefox launched");
    }

    public class Edge : IBrowser
    {
        public void Launch() => Console.WriteLine("Edge launched");
    }

    public class BrowserFactory
    {
        public static IBrowser GetBrowser(string browser)
        {
            return browser switch
            {
                "Chrome" => new Chrome(),
                "Firefox" => new Firefox(),
                "Edge" => new Edge(),
                _ => throw new ArgumentException("Invalid browser")
            };
        }
    }

    public class Application
    {
        private readonly IBrowser _browser;
        public Application(string browser)
        {
            _browser = BrowserFactory.GetBrowser(browser);
        }

        public void LaunchBrowser() => _browser.Launch();
    }
}
