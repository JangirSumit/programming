namespace Practise.DesignPatterns.Structural;

internal class Repository
{

    public class Employee
    {
    }

    public class Product
    {
    }

    // Centralized repository for storing and managing objects.
    public interface IRepository<T>
    {
        void Add(T entity);
        void Remove(T entity);
    }

    public class EmployeeRepository : IRepository<Employee>
    {
        void IRepository<Employee>.Add(Employee entity)
        {
            throw new NotImplementedException();
        }

        void IRepository<Employee>.Remove(Employee entity)
        {
            throw new NotImplementedException();
        }
    }

    public class ProductRepository : IRepository<Product>
    {
        void IRepository<Product>.Add(Product entity)
        {
            throw new NotImplementedException();
        }

        void IRepository<Product>.Remove(Product entity)
        {
            throw new NotImplementedException();
        }
    }
}