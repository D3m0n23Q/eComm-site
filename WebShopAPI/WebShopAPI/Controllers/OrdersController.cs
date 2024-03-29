﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebShopAPI.Entities;

namespace WebShopAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {

        private const decimal SHIPPING_COST_BOUNDARY = 50M;
        private const decimal SHIPPING_COST_SMALL_ORDER = 10M;
        private const decimal SHIPPING_COST_LARGE_ORDER = 20M;

        // POST api/Orders/Create
        [HttpPost("Create")]
        public StatusCodeResult CreateOrder([FromBody] ShoppingCart cart) => this.Ok();

        // POST api/Orders/GetShipping
        [HttpPost("GetShipping")]
        public ActionResult<decimal> GetShippingCost([FromBody] ShoppingCart cart) => cart.CartValue == 0 ? 0 : cart.CartValue < SHIPPING_COST_BOUNDARY ? SHIPPING_COST_SMALL_ORDER : SHIPPING_COST_LARGE_ORDER;

    }

}