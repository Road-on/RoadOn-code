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

// ==> Método responsável por listar todos as Empresas':
exports.listAllEmpresas = async (req, res) => {
  const response = await db.query('SELECT * FROM empresa ORDER BY nome_empresa ASC');
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar Empresa pelo 'Id':
exports.findEmpresaById = async (req, res) => {
  const empresaId = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM empresa WHERE empresaid = $1', [productId]);
  res.status(200).send(response.rows);
}

// ==> Método responsável por atualizar um 'Product' pelo 'Id':
exports.updateEmpresaById = async (req, res) => {
  const empresaId = parseInt(req.params.id);
  const { nome_empresa, cnpj_empresa, telefone_empresa, email_empresa, senha_empresa} = req.body;
  const response = await db.query(
    "UPDATE empresa SET nome_empresa = $1, cnpj_empresa = $2, telefone_empresa = $3, email_empresa = $4, senha_empresa = $5 WHERE empresaId = $6",
    [product_name, quantity, price, productId]
  );
  res.status(200).send({ message: "Empresa Atualizada com sucesso!" });
};

// ==> Método responsável por excluir um 'Product' pelo 'Id':
exports.deleteEmpresaById = async (req, res) => {
  const empresaId = parseInt(req.params.id);
  await db.query('DELETE FROM empresa WHERE empresaid = $1', [
    productId
  ]);
  res.status(200).send({ message: 'Empresa deletada com sucesso!', productId });
};