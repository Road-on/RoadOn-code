/**
    * Arquivo: config/database.js
    * Descrição: arquivo responsável pelas conexão da aplicação com o PostgreSQL.
    * Data: 10/09/2021
    * Author: Fabio Santos
 */

 const { Pool } = require('pg');
 const dotenv = require('dotenv');
 dotenv.config();

 // ==> Conexão com a Base de Dados:

 const pool = new Pool({
   connectionString: process.env.DATABASE_URL
 });
 pool.on('connect', () => {
   console.log('Banco de Dados conectado com sucesso!');
 });
 module.exports = {
   query: (text, params) => pool.query(text, params),
 };