const db = require('../config/database')

// ==> Método responsável por criar um novo agendamento:

exports.createAgendamento = async (req, res) => {
    const {id_destino , data_saida_excursao , data_volta_excursao} = req.body;
    const { rows } = await db.query(
        "INSERT INTO agenda_excursao  (id_destino, data_saida_excursao, data_volta_excursao) VALUES ($1, $2, $3)",
        [id_destino , data_saida_excursao , data_volta_excursao]
    );

    res.status(201).send({
        message: "Agendado com sucesso!", 
        body: {
            destino: {id_destino, data_saida_excursao, data_volta_excursao}
        },
    });
};

// ==> Método responsável por listar todos os agendamentos':

exports.listAllAgendamentos = async (req, res) => {
    const response = await db.query('SELECT * FROM agenda_excursao ORDER BY id_destino ASC');
    res.render('agendados.ejs', { model: response.rows });
};

exports.findAgendamentoById = async (req, res) => {
    id_destino = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM agenda_excursao WHERE id_excursao  = $1', [id_excursao]);
    res.status(200).send(response.rows);
}

exports.updateAgendamentoById = async (req, res) => {
    id_destino = parseInt(req.params.id);
    const { id_destino , data_saida_excursao , data_volta_excursao} = req.body;
    const { rows } = await db.query(
        "UPDATE agenda_excursao SET id_destino = $1, data_saida_excursao = $2, data_volta_excursao = $3, WHERE id_excursao  = $4",
        [id_destino , data_saida_excursao , data_volta_excursao , id_excursao]
    );
    res.status(200).send({ message: "Excursão atualizada com sucesso!" });
}

exports.deleteAgendamentoById = async (req, res) => {
    id_excursao = parseInt(req.params.id);
    const response = await db.query('DELETE FROM agenda_excursao WHERE id_excursao = $1', [id_excursao]);
    res.status(200).send({ message: "Excursão removida com sucesso!", id: id_excursao });
}