# FrontendAngular

## Configuração do backend

1. Acesse a pasta do backend:

```bash
cd ../exemplo02/exemplo02
```

2. Inicie a API:

```bash
dotnet run
```

A API será iniciada em:

```text
http://localhost:5236
```

## Configuração do frontend

1. Acesse a pasta do projeto Angular:

```bash
cd ../atividade-topicos
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o frontend:

```bash
ng serve
```

O frontend fica disponível em:

```text
http://localhost:4200
```

## API de categorias

A API expõe os seguintes endpoints:

### Listar categorias

```http
GET /api/Categorias
```

### Buscar categoria por ID

```http
GET /api/Categorias/{id}
```

### Cadastrar categoria

```http
POST /api/Categorias
```

### Atualizar categoria

```http
PUT /api/Categorias/{id}
```

### Excluir categoria

```http
DELETE /api/Categorias/{id}
```

## Dados de exemplo

Exemplo de registros para a tabela `Categorias`:

```sql
INSERT INTO Categorias (Nome, Descricao, Ativo)
VALUES
('Eletrônicos', 'Produtos eletrônicos e acessórios', 'S'),
('Informática', 'Computadores e periféricos', 'S'),
('Celulares', 'Smartphones e acessórios', 'S'),
('Casa', 'Produtos para casa', 'S'),
('Escritório', 'Produtos para escritório', 'S'),
('Acessórios', 'Acessórios diversos', 'S'),
('Games', 'Produtos para jogos', 'S'),
('Áudio', 'Fones, caixas e equipamentos', 'S');
```

## Funcionalidades da interface

Na tela de categorias, é possível:

1. visualizar todas as categorias cadastradas;
2. cadastrar uma nova categoria;
3. editar uma categoria existente;
4. excluir uma categoria;
5. validar campos obrigatórios antes de salvar.
## Alterações no Program.cs
```python
using exemplo02.Data;
using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")
    )
);

builder.Services.AddCors(options =>
{
    options.AddPolicy("Angular", policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddControllers();
builder.Services.AddOpenApi();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference();
}

// Ativa o CORS
app.UseCors("Angular");

app.MapControllers();

app.Run();
```

## Autenticação
Foi implementado um sistema simples de autenticação para controlar o acesso à API.
O usuário realiza login informando:
- Usuário;
- Senha.
Após o login, o back-end gera um token que é utilizado nas requisições seguintes.


| Usuário | Senha | Tipo |
| :--- | :---: | ---: |
| admin | 123456 | Administrador  |
|usuario | 123456 | Usuário  |


## Autorização
Além da autenticação, o sistema possui controle de permissões.
Usuários autenticados podem consultar as categorias, porém operações de alteração dos dados são restritas ao usuário do tipo Administrador.
As operações protegidas por administrador são:
- Cadastrar categoria;
- Atualizar categoria;
- Excluir categoria.
Caso um usuário não autenticado tente acessar uma operação protegida, a API retorna 401 - Unauthorized.
Caso um usuário autenticado, mas sem permissão de administrador, tente realizar uma operação administrativa, a API retorna 403 - Forbidden.
