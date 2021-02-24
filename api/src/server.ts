import "reflect-metadata";
import express from "express";
import { router } from "./routes";

// Não é necessário específicar qual é o arquivo neste caso por ele ter o nome de index
import "./database";

const app = express();

// informa ao server que vamos trabalhar com o formato .json, para que ele consiga pegar os dados do body
app.use(express.json());
app.use(router);

app.listen(3333, () => console.log("Server is running!"));