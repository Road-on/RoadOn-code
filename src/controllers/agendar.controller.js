const db = require('../database')
let moment = require('moment');
moment.locale('pt-br')

// ==> Método responsável por criar um novo agendamento:

exports.createAgendamento = async (req, res) => {
    destino  = parseInt(req.query.destino);
    const { id_empresa } = req.user;
    const { data_saida_excursao , data_volta_excursao, roteiro_excursao } = req.body;
    const { rows } = await db.query(
        "INSERT INTO agenda_excursao  (id_destino, id_empresa, data_saida_excursao, data_volta_excursao, roteiro_excursao) VALUES ($1, $2, $3, $4, $5)",
        [destino , id_empresa, data_saida_excursao , data_volta_excursao, roteiro_excursao]
    );

    res.status(201).redirect('/agendados')
};

// ==> Método responsável por listar todos os agendamentos':

exports.listAllAgendamentos = async (req, res) => {
    const { id_empresa} = req.user;
    const response = await db.query('SELECT * FROM agenda_excursao INNER JOIN destino ON destino.id_destino = agenda_excursao.id_destino WHERE agenda_excursao.id_empresa = $1 ORDER BY agenda_excursao.data_saida_excursao ASC ', [id_empresa]);   
    res.status(200).render('agendados.ejs', { model: response.rows, moment: moment });
};

exports.findAgendamentoById = async (req, res) => {
    const { id_empresa } = req.user;
    id_excursao  = parseInt(req.query.excursao);
    const response = await db.query('SELECT * FROM agenda_excursao INNER JOIN destino ON destino.id_destino = agenda_excursao.id_destino WHERE agenda_excursao.id_excursao  = $1 AND agenda_excursao.id_empresa = $2', [id_excursao, id_empresa]);
    res.status(200).render('consultar-info-agendamento.ejs', { model: response.rows, moment: moment } )
}

exports.updateAgendamentoById = async (req, res) => {
    const { data_saida_excursao , data_volta_excursao} = req.body;
    id_excursao = parseInt(req.query.excursao);
    const { rows } = await db.query(
        "UPDATE agenda_excursao SET data_saida_excursao = $1, data_volta_excursao = $2 WHERE id_excursao  = $3",
        [data_saida_excursao , data_volta_excursao , id_excursao]
    );
    res.status(200).redirect('/agendados')
}

exports.deleteAgendamentoById = async (req, res) => {
    id_excursao = parseInt(req.query.excursao);
    const response = await db.query('DELETE FROM agenda_excursao WHERE id_excursao = $1', [id_excursao]);
    res.status(200).redirect('/agendados')
}