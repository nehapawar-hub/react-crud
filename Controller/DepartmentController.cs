using Microsoft.AspNetCore.Mvc;
using EmployeeAPI.Models;

namespace EmployeeAPI.Controllers
{
    [ApiController]
    [Route("api/department")]
    public class DepartmentController : ControllerBase
    {
        [HttpGet]
        public IActionResult department()
        {
            var departments = new List<Department>
            {
                new Department
                {
                    DepartmentId = 1,
                    DepartmentName = "IT"
                },
                new Department
                {
                    DepartmentId = 2,
                    DepartmentName = "HR"
                }
            };

            return Ok(departments);
        }
    }
}