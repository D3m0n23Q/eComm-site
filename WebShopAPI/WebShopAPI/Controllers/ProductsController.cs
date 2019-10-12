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
                new Product { Id = 1, Name = "Product A", Value = 20.69m },
                new Product { Id = 2, Name = "Product B", Value = 16.49m },
                new Product { Id = 3, Name = "Product C", Value = 9.29m },
                new Product { Id = 4, Name = "Product D", Value = 63.26m },
                new Product { Id = 5, Name = "Product E", Value = 45.61m },
                new Product { Id = 6, Name = "Product F", Value = 73.33m },
                new Product { Id = 7, Name = "Product G", Value = 64.47m },
                new Product { Id = 8, Name = "Product H", Value = 84.47m },
                new Product { Id = 9, Name = "Product I", Value = 34.47m },
                new Product { Id = 10, Name = "Product J", Value = 65.47m },
                new Product { Id = 11, Name = "Product K", Value = 44.47m },
                new Product { Id = 12, Name = "Product L", Value = 24.47m },
                new Product { Id = 13, Name = "Product M", Value = 83.47m },
                new Product { Id = 14, Name = "Product N", Value = 24.44m },
                new Product { Id = 15, Name = "Product O", Value = 54.57m },
                new Product { Id = 16, Name = "Product P", Value = 35.46m },
                new Product { Id = 17, Name = "Product Q", Value = 74.27m },
                new Product { Id = 18, Name = "Product R", Value = 64.47m },
                new Product { Id = 19, Name = "Product S", Value = 37.47m },
                new Product { Id = 20, Name = "Product T", Value = 66.47m },
                new Product { Id = 21, Name = "Product U", Value = 84.88m },
                new Product { Id = 22, Name = "Product V", Value = 68.47m },
                new Product { Id = 23, Name = "Product W", Value = 44.77m },
                new Product { Id = 24, Name = "Product X", Value = 30.64m },
                new Product { Id = 25, Name = "Product Y", Value = 79.49m },
                new Product { Id = 26, Name = "Product Z", Value = 15.47m }
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