namespace exemplo02.Services;

public class AuthService
{
    private readonly Dictionary<string, string> tokens = new();

    public string CriarToken(string usuario, string tipo)
    {
        var token = Guid.NewGuid().ToString();

        tokens[token] = $"{usuario}|{tipo}";

        return token;
    }

    public bool ValidarToken(string token)
    {
        return tokens.ContainsKey(token);
    }

    public string? ObterTipo(string token)
    {
        if (tokens.TryGetValue(token, out var dados))
        {
            var partes = dados.Split('|');

            return partes[1];
        }

        return null;
    }
}