using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebShopAPI.Entities;

namespace WebShopAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        public ProductsController()
        {
            this.Products = new List<Product>()
            { 
                new Product { Id = 1, Name = "ProductA", Value = 20.69m },
                new Product { Id = 2, Name = "ProductB", Value = 16.49m },
                new Product { Id = 3, Name = "ProductC", Value = 9.29m },
                new Product { Id = 4, Name = "ProductD", Value = 63.26m },
                new Product { Id = 5, Name = "ProductE", Value = 45.61m },
                new Product { Id = 6, Name = "ProductF", Value = 73.33m },
                new Product { Id = 7, Name = "ProductG", Value = 64.47m }
            };
        }

        private List<Product> Products { get; }

        // GET api/Products
        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetProducts() => new ActionResult<IEnumerable<Product>>(this.Products);

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

    }

}