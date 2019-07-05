using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        public ValuesController()
        {
            gen = new DataGenerator();
        }
        DataGenerator gen { get; set; }
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Event>> Get()
        {
            return gen.generateEvents(50);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Event> Get(int id)
        {
            return gen.generateEvents(1).Single();
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
