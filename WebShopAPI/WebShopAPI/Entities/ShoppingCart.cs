using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebShopAPI.Entities
{
    public class ShoppingCart

    {
        public decimal CartValue { get; set; }

        public IEnumerable<ShoppingCartProduct> Products { get; set; }
    }

}