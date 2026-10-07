using exemplo02.Model;
using exemplo02.Services;
using Microsoft.AspNetCore.Mvc;

namespace exemplo02.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly AuthService authService;

    public AuthController(AuthService authService)
    {
        this.authService = authService;
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequest login)
    {
        if (login.Usuario == "admin" && login.Senha == "123456")
        {
            var token = authService.CriarToken(
                "admin",
                "Administrador"
            );

            return Ok(new
            {
                autenticado = true,
                usuario = "admin",
                tipo = "Administrador",
                token = token
            });
        }

        if (login.Usuario == "usuario" && login.Senha == "123456")
        {
            var token = authService.CriarToken(
                "usuario",
                "Usuario"
            );

            return Ok(new
            {
                autenticado = true,
                usuario = "usuario",
                tipo = "Usuario",
                token = token
            });
        }

        return Unauthorized(new
        {
            autenticado = false,
            mensagem = "Usuário ou senha inválidos."
        });
    }
}