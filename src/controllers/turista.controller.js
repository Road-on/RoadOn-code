const db = require('../config/database')

// ==> Método responsável por criar uma pessoa no banco de dados:

exports.createPessoa = async (req, res) => {
    const {nome_pessoa  , telefone_pessoa  , email_pessoa } = req.body;
    const { rows } = await db.query(
        "INSERT INTO pessoa  (nome_pessoa, telefone_pessoa, email_pessoa) VALUES ($1, $2, $3)",
        [nome_pessoa , telefone_pessoa , email_pessoa]
    );

    res.status(201).send({
        message: "Pessoa cadastrada com sucesso!", 
        body: {
            destino: {nome_pessoa, telefone_pessoa, email_pessoa}
        },
    });
};

// ==> Método responsável por listar todas as Pessoas':

exports.listAllPessoas = async (req, res) => {
    const response = await db.query('SELECT * FROM pessoa ORDER BY id_pessoa  ASC');
    res.status(200).send(response.rows);
};

exports.findPessoaById = async (req, res) => {
    id_pessoa = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM pessoa WHERE id_pessoa  = $1', [id_pessoa]);
    res.status(200).send(response.rows);
}

exports.updatePessoaoById = async (req, res) => {
    id_pessoa = parseInt(req.params.id);
    const { nome_pessoa , telefone_pessoa , email_pessoa} = req.body;
    const { rows } = await db.query(
        "UPDATE pessoa SET nome_pessoa = $1, telefone_pessoa = $2, email_pessoa = $3, WHERE id_pessoa  = $4",
        [nome_pessoa , telefone_pessoa , email_pessoa , id_pessoa]
    );
    res.status(200).send({ message: "Pessoa atualizada com sucesso!" });
}

exports.deletePessoaById = async (req, res) => {
    id_pessoa = parseInt(req.params.id);
    const response = await db.query('DELETE FROM pessoa WHERE id_pessoa = $1', [id_pessoa]);
    res.status(200).send({ message: "Pessoa removida com sucesso!", id: id_excursao });
}