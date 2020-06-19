const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const {errors} = require('celebrate');

const app = express();

app.use(cors());
// app.use(cors({
// 	origin: 'http://meuapp.com'
// }));
app.use(express.json());

app.use(routes);

app.use(errors());

// app.listen(3333);
module.exports = app;


// npm start

/**
 * metodos http:
 * GET: buscar/listar uma informacao do backend
 * POST: criar uma informacao no backend
 * PUT: alterar uma informacao no backend
 * DELETE: deletar uma informacao no backend
 */

/** 
 * tipos de parametros:
 * Query params: parametros nomeados enviados na rota apos o ? (filtros e paginacao)
 * Route params: parametros utilizados para identificar recursos :id
 * Request body: corpo da requisicao utilizado para criar ou alterar recursos
 * 
 * backend: npm start
 * npx knex migrate:latest
 */

