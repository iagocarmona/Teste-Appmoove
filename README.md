# Teste backend da AppMoove

---

## Como executar o projeto

```bash
    #via npm
    npm install

    #via yarn
    yarn
```

### Subindo banco de dados com Docker

```bash
    #com yarn script
    yarn docker up

    #sem yarn script
    docker-compose -f docker-compose.yml up
```

### Rodando a aplicação

```bash
    yarn dev
```

### Executando o arquivo que popula o banco

```bash
    #Antes disso, deve-se garantir que o arquivo .csv está na raiz do projeto
    ./importCSV.sh
```

---

## Documentação da API
Documentação realizada pelo swagger.
- Link: [http://localhost:3000/api](http://localhost:3000/api)

---

## Tecnologias

- Node.js
- Prisma
- Express
- Docker
- PostgreSQL
- Swagger

---

## Melhorias

- Implementação de testes
- Implementar mais funções para gerenciamento dos usuários

---

## 🦸 Autor

<table><tr>

<td align="center"><a href="https://github.com/iagocarmona">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/69121686?s=400&u=c6fc38d355b96f4abf690ae95912c07e5f057b94&v=4" width="100px;" alt=""/>
<br />
 <b>Iago Carmona</b>
 </a> <a href="https://github.com/iagocarmona" title="Repositorio Iago"></a>

[![Gmail Badge](https://img.shields.io/badge/-iagoortegacarmona@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:iagoortegacarmona@gmail.com)](mailto:iagoortegacarmona@gmail.com)</td>

</tr></table>
