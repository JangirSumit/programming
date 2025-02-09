namespace Practise.DesignPatterns.Behavioral;

internal class UnitOfWorkDesignPattern
{
    // Considers a unit of work as a single transaction.

    public class Employee
    {
        public string Name { get; set; }
        public string Role { get; set; }
    }

    public class Product
    {
        public string Name { get; set; }
        public string Category { get; set; }
    }

    public interface IRepository<T>
    {
        void Add(T entity);
        void Remove(T entity);
    }

    public interface IEmployeeRepository : IRepository<Employee>
    {
    }

    public interface IProductRepository : IRepository<Product>
    {
    }

    public class EmployeeRepository : IEmployeeRepository
    {
        public void Add(Employee entity)
        {
            // Add employee to the database.
        }
        public void Remove(Employee entity)
        {
            // Remove employee from the database.
        }
    }

    public class ProductRepository : IProductRepository
    {
        public void Add(Product entity)
        {
            // Add product to the database.
        }
        public void Remove(Product entity)
        {
            // Remove product from the database.
        }
    }

    public interface IUnitOfWork
    {
        IEmployeeRepository EmployeeRepository { get; }
        IProductRepository ProductRepository { get; }
        void Commit();
    }

    public class UnitOfWork : IUnitOfWork
    {
        private readonly IEmployeeRepository _employeeRepository;
        private readonly IProductRepository _productRepository;
        public UnitOfWork(IEmployeeRepository employeeRepository, IProductRepository productRepository)
        {
            _employeeRepository = employeeRepository;
            _productRepository = productRepository;
        }
        public IEmployeeRepository EmployeeRepository => _employeeRepository;
        public IProductRepository ProductRepository => _productRepository;
        public void Commit()
        {
            // Commit the transaction.
        }
    }

    public class Application
    {
        private readonly IUnitOfWork _unitOfWork;
        public Application(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        public void AddEmployee(Employee employee) => _unitOfWork.EmployeeRepository.Add(employee);
        public void AddProduct(Product product) => _unitOfWork.ProductRepository.Add(product);
        public void RemoveEmployee(Employee employee) => _unitOfWork.EmployeeRepository.Remove(employee);
        public void RemoveProduct(Product product) => _unitOfWork.ProductRepository.Remove(product);
        public void Commit() => _unitOfWork.Commit();
    }
}
