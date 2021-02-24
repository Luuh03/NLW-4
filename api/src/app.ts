import "reflect-metadata";
import express from "express";
import createConnection from "./database";
import { router } from "./routes";

// Não é necessário específicar qual é o arquivo neste caso por ele ter o nome de index (usado no começo)
//import "./database";

const app = express();

// informa ao server que vamos trabalhar com o formato .json, para que ele consiga pegar os dados do body
app.use(express.json());
app.use(router);

export { app }