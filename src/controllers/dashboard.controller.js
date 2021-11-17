const db = require('../database')

exports.populaDados = async (req, res) => {
    const pendentes = await db.query('SELECT COUNT(id_excursao) as agendamentos FROM Agenda_Excursao WHERE data_saida_excursao > CURRENT_DATE');
    const realizados = await db.query('SELECT COUNT(id_excursao) as agendamentos FROM Agenda_Excursao WHERE data_saida_excursao < CURRENT_DATE');
    const lucroAnual = await db.query('SELECT TRUNC(SUM(destino.valor_excursao/12), 2) AS qtd FROM destino JOIN agenda_excursao on agenda_excursao.id_destino = destino.id_destino')
    const lucroViagem = await db.query('SELECT TRUNC(SUM(destino.valor_excursao / (SELECT COUNT(id_excursao) FROM Agenda_Excursao)), 2) AS qtd FROM destino JOIN agenda_excursao on agenda_excursao.id_destino = destino.id_destino')

    // ==> Dados Gráficos
    const dadosJaneiro = await db.query('SELECT SUM(destino.valor_excursao), EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) as mes FROM destino JOIN agenda_excursao on agenda_excursao.id_destino = destino.id_destino WHERE EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) = 1 GROUP BY mes')
    const dadosFevereiro = await db.query('SELECT SUM(destino.valor_excursao), EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) as mes FROM destino JOIN agenda_excursao on agenda_excursao.id_destino = destino.id_destino WHERE EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) = 2 GROUP BY mes')
    const dadosMarco = await db.query('SELECT SUM(destino.valor_excursao), EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) as mes FROM destino JOIN agenda_excursao on agenda_excursao.id_destino = destino.id_destino WHERE EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) = 3 GROUP BY mes')
    const dadosAbril = await db.query('SELECT SUM(destino.valor_excursao), EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) as mes FROM destino JOIN agenda_excursao on agenda_excursao.id_destino = destino.id_destino WHERE EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) = 4 GROUP BY mes')
    const dadosMaio = await db.query('SELECT SUM(destino.valor_excursao), EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) as mes FROM destino JOIN agenda_excursao on agenda_excursao.id_destino = destino.id_destino WHERE EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) = 5 GROUP BY mes')
    const dadosJunho = await db.query('SELECT SUM(destino.valor_excursao), EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) as mes FROM destino JOIN agenda_excursao on agenda_excursao.id_destino = destino.id_destino WHERE EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) = 6 GROUP BY mes')
    const dadosJulho = await db.query('SELECT SUM(destino.valor_excursao), EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) as mes FROM destino JOIN agenda_excursao on agenda_excursao.id_destino = destino.id_destino WHERE EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) = 7 GROUP BY mes')
    const dadosAgosto = await db.query('SELECT SUM(destino.valor_excursao), EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) as mes FROM destino JOIN agenda_excursao on agenda_excursao.id_destino = destino.id_destino WHERE EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) = 8 GROUP BY mes')
    const dadosSetembro = await db.query('SELECT SUM(destino.valor_excursao), EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) as mes FROM destino JOIN agenda_excursao on agenda_excursao.id_destino = destino.id_destino WHERE EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) = 9 GROUP BY mes')
    const dadosOutubro = await db.query('SELECT SUM(destino.valor_excursao), EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) as mes FROM destino JOIN agenda_excursao on agenda_excursao.id_destino = destino.id_destino WHERE EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) = 10 GROUP BY mes;')
    const dadosNovembro = await db.query('SELECT SUM(destino.valor_excursao), EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) as mes FROM destino JOIN agenda_excursao on agenda_excursao.id_destino = destino.id_destino WHERE EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) = 11 GROUP BY mes;')
    const dadosDezembro = await db.query('SELECT SUM(destino.valor_excursao), EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) as mes FROM destino JOIN agenda_excursao on agenda_excursao.id_destino = destino.id_destino WHERE EXTRACT(MONTH FROM agenda_excursao.data_saida_excursao) = 12 GROUP BY mes;')
    const dadosPizza = await db.query('SELECT agenda_excursao.id_destino, destino.nome_destino,COUNT(*) As QTD FROM agenda_excursao INNER JOIN destino ON destino.id_destino = agenda_excursao.id_destino GROUP BY agenda_excursao.id_destino, destino.nome_destino ORDER BY QTD DESC LIMIT 3;')

    res.status(200).render('dashboard.ejs', 
        {
            modelPendentes: pendentes.rows, 
            modelRealizados: realizados.rows, 
            modelLucroAnual: lucroAnual.rows, 
            modelLucroViagem: lucroViagem.rows,
            modelJaneiro: dadosJaneiro.rows,
            modelFevereiro: dadosFevereiro.rows,
            modelMarco: dadosMarco.rows,
            modelAbril: dadosAbril.rows,
            modelMaio: dadosMaio.rows,
            modelJunho: dadosJunho.rows,
            modelJulho: dadosJulho.rows,
            modelAgosto: dadosAgosto.rows,
            modelSetembro: dadosSetembro.rows,
            modelOutubro: dadosOutubro.rows,
            modelNovembro: dadosNovembro.rows,
            modelDezembro: dadosDezembro.rows,
            modelPizza: dadosPizza.rows,
        }
    )
}