import express, { request, response } from 'express';

const app = express();

app.get("/", (request, response) => {
  return response.json({message: "Hello World"});
})

// 1 param == rota(recurso da API)
// 2 param == req, res

// As rotas podem ser iguais, desde que os métodos sejam diferentes

app.post("/", (request, response) => {
  //receveu os dados que devem ser salvos
  return response.json({message: "Os dados foram salvos com sucesso!"});
})

app.listen(3333, () => console.log("Server is running!"));