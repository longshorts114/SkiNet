using System;
using API.RequestHelpers;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BaseApiController : ControllerBase
{
    protected async Task<ActionResult> CreatePagedResult<T>(ISpecification<T> spec, IGenericRepository<T> repo,
        int pageSize, int pageIndex) where T : BaseEntity
    {
        var items = await repo.ListAsync(spec);
        var count = await repo.GetCountAsync(spec);
        var pagination = new Pagination<T>(pageSize, pageIndex, count, items);
        return Ok(pagination);
    }
}
