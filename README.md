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

