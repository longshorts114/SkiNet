using System;
using System.Security.Cryptography.X509Certificates;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure;

public class GenericRepository<T>(StoreContext context) : IGenericRepository<T> where T : BaseEntity
{
    public void Add(T entity)
    {
        context.Set<T>().Add(entity);
    }

    public void Delete(T entity)
    {
        context.Set<T>().Remove(entity);
    }

    public async Task<T> GetEntityById(int id)
    {
        return await context.Set<T>().FindAsync(id);
    }

    public async Task<IReadOnlyList<T>> GetListAsync()
    {
        return await context.Set<T>().ToListAsync();
    }

    public void Update(T entity)
    {
        var item = context.Set<T>().Attach(entity);
        item.State = EntityState.Modified;
    }
    
    public bool Exists(int id)
    {
        return context.Set<T>().Any(x => x.Id == id);
    }
}
