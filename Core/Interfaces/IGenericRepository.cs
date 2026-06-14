using Core.Entities;

namespace Core.Interfaces;

public interface IGenericRepository<T> where T : BaseEntity
{
    Task<IReadOnlyList<T>> ListAllAsync();
    Task<T?> GetByIdAsync(int id);
    Task<T?> GetEntityAsync(ISpecification<T> spec);
    Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec);
    void Add(T entity);
    void Remove(T entity);
    void Update(T entity);
    bool Exists(int id);
    Task<bool> SaveAllAsync();

}
