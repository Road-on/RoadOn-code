const db = require('../config/database')
let moment = require('moment');
moment.locale('pt-br')

// ==> Método responsável por criar um novo agendamento:

exports.createAgendamento = async (req, res) => {
    destino  = parseInt(req.query.destino);
    let empresa = 1
    const { data_saida_excursao , data_volta_excursao } = req.body;
    const { rows } = await db.query(
        "INSERT INTO agenda_excursao  (id_destino, id_empresa, data_saida_excursao, data_volta_excursao) VALUES ($1, $2, $3, $4)",
        [destino , empresa, data_saida_excursao , data_volta_excursao]
    );

    res.status(201).redirect('/agendados')
};

// ==> Método responsável por listar todos os agendamentos':

exports.listAllAgendamentos = async (req, res) => {
    const { id_excursao } = req.body;
    const response = await db.query('SELECT * FROM agenda_excursao INNER JOIN destino ON destino.id_destino = agenda_excursao.id_destino ORDER BY agenda_excursao.data_saida_excursao ASC');   
    res.status(200).render('agendados.ejs', { model: response.rows, moment: moment });
};

exports.findAgendamentoById = async (req, res) => {
    id_excursao  = parseInt(req.query.excursao);
    const response = await db.query('SELECT * FROM agenda_excursao INNER JOIN destino ON destino.id_destino = agenda_excursao.id_destino WHERE agenda_excursao.id_excursao  = $1', [id_excursao]);
    res.status(200).render('consultar-info-agendamento.ejs', { model: response.rows, moment: moment } )
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
    res.status(200).redirect('/agendados')
}