using Core.Entities;

namespace Core.Interfaces;

public interface IGenericRepository<T> where T : BaseEntity
{
    Task<IReadOnlyList<T>> GetListAsync();
    Task<T> GetEntityById(int id);
    void Add(T entity);
    void Delete(T entity);
    void Update(T entity);
    bool Exists(int id);

}
