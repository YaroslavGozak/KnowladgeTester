using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using University_Test.Services;
using University_Test.Models;
using System.Web.Http;

namespace University_Test.Controllers
{
    //[Route("api/tests")]
    public class TestsController : ApiController
    {
        private TestService testService;

        public TestsController()
        {
            testService = new TestService();
        }
        // GET: api/tests
        [System.Web.Http.HttpGet]
        public IEnumerable<Test> Get()
        {
            return testService.GetAllTests();
        }

        // GET: api/tests/5
       // [System.Web.Http.Route("{testid}")]
        [System.Web.Http.HttpGet]
        public Test Get(int id)
        {
            return testService.GetTest(id);
        }


    }
}
