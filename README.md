# FrontendAngular



## Development server

Para rodar o frontend
```bash
ng serve
```

## Inserções no banco
Foram adicionadas categorias como:

Eletrônicos
Informática
Celulares
Casa
Escritório
Acessórios
Games
Áudio

Exemplo:

INSERT INTO Categorias (Nome, Descricao, Ativo)
VALUES
('Eletrônicos', 'Produtos eletrônicos e acessórios', 'S'),
('Informática', 'Computadores e periféricos', 'S'),
('Celulares', 'Smartphones e acessórios', 'S'),
('Casa', 'Produtos para casa', 'S'),
('Escritório', 'Produtos para escritório', 'S'),
('Acessórios', 'Acessórios diversos', 'S'),
('Games', 'Produtos para jogos', 'S'),
('Áudio', 'Fones, caixas e equipamentos )

## Operações disponíveis no frontend
A tela de Categorias permite realizar as seguintes operações:

Listar
GET /api/Categorias

Exibe todas as categorias cadastradas.

Buscar por ID
GET /api/Categorias/{id}

Busca uma categoria específica.

Cadastrar
POST /api/Categorias

Adiciona uma nova categoria.

Atualizar
PUT /api/Categorias/{id}

Atualiza uma categoria existente.

Excluir
DELETE /api/Categorias/{id}

Remove uma categoria.

## Testando o sistema
### Backend
```
cd backend/exemplo02
dotnet run
```

### Frontend
```
cd frontend/frontend-angular
ng serve
```

Na tela de categorias é possível:

1. visualizar as categorias cadastradas;
2. cadastrar uma nova categoria;
3. editar uma categoria;
4. excluir uma categoria.