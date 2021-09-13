const db = require("../config/database");

// ==> Método responsável por criar uma nova Empresa':

exports.createEmpresa = async (req, res) => {
  const { nome_empresa, cnpj_empresa, telefone_empresa, email_empresa, senha_empresa  } = req.body;
  const { rows } = await db.query(
    "INSERT INTO empresa (nome_empresa, cnpj_empresa, telefone_empresa, email_empresa, senha_empresa) VALUES ($1, $2, $3, $4, $5)",
    [nome_empresa, cnpj_empresa, telefone_empresa, email_empresa, senha_empresa]
  );

  res.status(201).send({
    message: "Empresa adicionada com sucesso!",
    body: {
      product: { nome_empresa, cnpj_empresa, telefone_empresa, email_empresa, senha_empresa }
    },
  });
};