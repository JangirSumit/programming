namespace Practise.DesignPatterns.Creational;

internal class Builder
{
    public class Product
    {
        public string PartA { get; set; }
        public string PartB { get; set; }
        public string PartC { get; set; }
    }

    public interface IProductBuilder
    {
        void BuildPartA();
        void BuildPartB();
        void BuildPartC();
        Product GetProduct();
    }

    public class ProductBuilder : IProductBuilder
    {
        private readonly Product _product = new();
        public void BuildPartA() => _product.PartA = "Part A";
        public void BuildPartB() => _product.PartB = "Part B";
        public void BuildPartC() => _product.PartC = "Part C";
        public Product GetProduct() => _product;
    }

    public class Director
    {
        private readonly IProductBuilder _builder;
        public Director(IProductBuilder builder)
        {
            _builder = builder;
        }
        public void Construct()
        {
            _builder.BuildPartA();
            _builder.BuildPartB();
            _builder.BuildPartC();
        }
    }

    public class Application
    {
        public IProductBuilder ProductBuilder = new ProductBuilder();

        public void Run()
        {
            var director = new Director(ProductBuilder);
            director.Construct();
            var product = ProductBuilder.GetProduct();
        }
    }
}
