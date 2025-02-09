namespace Practise.DesignPatterns.Creational;

internal class Prototype
{
    public interface ICloneable
    {
        ICloneable Clone();
    }

    public class Address : ICloneable
    {
        public string Street { get; set; }
        public string City { get; set; }

        public Address(string street, string city)
        {
            Street = street;
            City = city;
        }

        public ICloneable Clone()
        {
            return new Address(Street, City);
        }
    }

    public class Employee : ICloneable
    {
        public string Name { get; set; }
        public string Role { get; set; }
        public Address Address { get; set; }
        public Employee(string name, string role, Address address)
        {
            Name = name;
            Role = role;
            Address = address;
        }
        public ICloneable Clone() => new Employee(Name, Role, Address.Clone() as Address);
    }
}
