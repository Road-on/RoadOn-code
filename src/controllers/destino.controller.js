const db = require('../config/database')

// ==> Método responsável por criar um novo Destino:

exports.createDestino = async (req, res) => {
    const { nome_destino, id_empresa, valor_excursao, minimo_passageiro_excursao, maximo_passageiro_excursao } = req.body;
    const { rows } = await db.query(
        "INSERT INTO destino (nome_destino, id_empresa, valor_excursao, minimo_passageiro_excursao, maximo_passageiro_excursao) VALUES ($1, $2, $3, $4, $5)",
        [nome_destino, id_empresa, valor_excursao, minimo_passageiro_excursao, maximo_passageiro_excursao]
    );

    res.status(201).send({
        message: "Destino cadastrado com sucesso!", 
        body: {
            destino: {nome_destino, id_empresa, valor_excursao, minimo_passageiro_excursao, maximo_passageiro_excursao}
        },
    });
};

// ==> Método responsável por listar todos os Destinos':

exports.listAllDestinos = async (req, res) => {
    const response = await db.query('SELECT * FROM destino ORDER BY nome_destino ASC');
    res.render('destinos.ejs', { model: response.rows })
};

exports.findDestinoById = async (req, res) => {
    id_destino = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM destino WHERE id_destino = $1', [id_destino]);
    res.status(200).send(response.rows);
}

exports.updateDestinoById = async (req, res) => {
    id_destino = parseInt(req.params.id);
    const { nome_destino, valor_excursao, minimo_passageiro_excursao, maximo_passageiro_excursao } = req.body;
    const { rows } = await db.query(
        "UPDATE destino SET nome_destino = $1, valor_excursao = $2, minimo_passageiro_excursao = $3, maximo_passageiro_excursao = $4 WHERE id_destino = $5",
        [nome_destino, valor_excursao, minimo_passageiro_excursao, maximo_passageiro_excursao, id_destino]
    );
    res.status(200).send({ message: "Destino atualizado com sucesso!" });
}

exports.deleteDestinoById = async (req, res) => {
    id_destino = parseInt(req.params.id);
    const response = await db.query('DELETE FROM destino WHERE id_destino = $1', [id_destino]);
    res.status(200).redirect('/destinos')
}