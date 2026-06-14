using System;
using System.Security.Cryptography.X509Certificates;
using Core.Entities;
using Core.Specifications;

namespace Core;

//// if using primary constrcutor
// public class ProductSpecification(string? brand, string? type): BaseSpecification<Product>(x => 
// ( (string.IsNullOrWhiteSpace(brand) || x.Brand == brand) &&
//      (string.IsNullOrWhiteSpace(type) || x.Type == type)))

public class ProductSpecification : BaseSpecification<Product>
{
    public ProductSpecification(string? brand, string? type, string? sort) : base(x =>
        (string.IsNullOrWhiteSpace(brand) || x.Brand == brand) &&
        (string.IsNullOrWhiteSpace(type) || x.Type == type))
    {
        switch(sort)
        {
            case "priceAsc":
                AddOrderBy(x => x.Price);
                break;
            case "priceDesc":
                AddOrderByDescending(x => x.Price);
                break;
            default:
                AddOrderBy(x => x.Name);
                break;
        }
    }
}
