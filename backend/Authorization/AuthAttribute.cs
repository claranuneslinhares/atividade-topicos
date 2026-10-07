using exemplo02.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace exemplo02.Authorization;

public class AuthAttribute : Attribute, IAuthorizationFilter
{
    public void OnAuthorization(AuthorizationFilterContext context)
    {
        var authHeader = context.HttpContext.Request.Headers.Authorization.ToString();

        if (string.IsNullOrEmpty(authHeader))
        {
            context.Result = new UnauthorizedObjectResult(new
            {
                mensagem = "Usuário não autenticado."
            });

            return;
        }

        var token = authHeader.Replace("Bearer ", "");

        var authService = context.HttpContext.RequestServices
            .GetRequiredService<AuthService>();

        if (!authService.ValidarToken(token))
        {
            context.Result = new UnauthorizedObjectResult(new
            {
                mensagem = "Token inválido."
            });
        }
    }
}
public class AdminAttribute : Attribute, IAuthorizationFilter
{
    public void OnAuthorization(AuthorizationFilterContext context)
    {
        var authHeader = context.HttpContext.Request.Headers.Authorization.ToString();

        if (string.IsNullOrEmpty(authHeader))
        {
            context.Result = new UnauthorizedObjectResult(new
            {
                mensagem = "Usuário não autenticado."
            });

            return;
        }

        var token = authHeader.Replace("Bearer ", "");

        var authService = context.HttpContext.RequestServices
            .GetRequiredService<AuthService>();

        if (!authService.ValidarToken(token))
        {
            context.Result = new UnauthorizedObjectResult(new
            {
                mensagem = "Token inválido."
            });

            return;
        }

        var tipo = authService.ObterTipo(token);

        if (tipo != "Administrador")
{
    context.Result = new ObjectResult(new
    {
        mensagem = "Acesso negado. Apenas Administradores podem realizar esta operação."
    })
    {
        StatusCode = StatusCodes.Status403Forbidden
    };
}
    }
}