/**
    * Arquivo: config/database.js
    * Descrição: arquivo responsável pelas conexão da aplicação com o PostgreSQL.
    * Data: 10/09/2021
    * Author: Fabio Santos
 */

 const { Pool } = require('pg');
 const dotenv = require('dotenv').config();

 // ==> Conexão com a Base de Dados:

 const pool = new Pool({
   //connectionString: process.env.DATABASE_URL
   connectionString: 'postgresql://postgres:123456@localhost:5432/roadon'
 });
 pool.on('connect', () => {
   console.log('Banco de Dados conectado com sucesso!');
 });

//  (async () => {
 
//   require('dotenv-safe').config();
//   const app = require('../app');
//   const debug = require('debug')('nodejs-passport-login:server');
//   const http = require('http');
 
//   try {
//     await require('../db').connect();
//   } catch (err) {
//     return console.log(err);
//   }
// })

//  async function findEmpresa(email_empresa) {
//   const conn = await connect();
//   const res = await conn.query(`SELECT * FROM empresa WHERE email_empresa=$1 LIMIT 1`, [email_empresa]);

//   if (res.rows.length > 0)
//       return res.rows[0];
//   else return null;
// }

// async function findEmpresaById(id) {
//   const conn = await connect();
//   const res = await conn.query(`SELECT * FROM empresa WHERE id_empresa=$1 LIMIT 1`, [id_empresa]);
//   if (res.rows.length > 0)
//       return res.rows[0];
//   else return null;
// }

module.exports = {
  query: (text, params) => pool.query(text, params)//, findEmpresa, findEmpresaById
};

