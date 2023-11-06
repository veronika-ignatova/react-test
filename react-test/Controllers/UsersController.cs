using Core.Entities;
using Core.Interface;
using Core.Interface.Service;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]

    public class UsersController : Controller
    {
        private readonly IUserService _userService;
        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public IEnumerable<IUser> Get()
        {
            return _userService.GetAllUsers();
        }

        [HttpGet("{id}")]
        public IUser GetUser(Guid id)
        {
            return _userService.GetUserById(id);
        }

        [HttpGet("email/{email}")]
        public IUser GetUserByEmail(string email)
        {
            return _userService.GetUserByEmail(email);
        }

        [HttpPut("Update")]
        public bool UpdateUser([FromBody] UserApiModel user)
        {
            var iUser = new User()
            {
                Id = user.Id,
                Name = user.Name,
                Age = user.Age,
                Password = user.Password,
                Address = user.Address != null ? new Address()
                {
                    City = user.Address.City,
                    Country = user.Address.Country,
                    Index = user.Address.Index,
                    Street = user.Address.Street
                } : null,
            };

            return _userService.UpdateUser(iUser);
        }

        [HttpPost("create")]
        public IActionResult Post(UserApiModel user)
        {
            if (!string.IsNullOrEmpty(user?.Email) && _userService.IsUsedEmail(user?.Email)) return BadRequest();
            var iUser = new User()
            {
                Email = user.Email,
                Name = user.Name,
                Age = user.Age,
                Password = user.Password,
                Address = user.Address != null ? new Address()
                {
                    City = user.Address.City,
                    Country = user.Address.Country,
                    Index = user.Address.Index,
                    Street = user.Address.Street
                } : null
            };

            return Ok(_userService.CreateUser(iUser));
        }
    }
}