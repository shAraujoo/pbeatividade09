const connect = require('../connect/connect')

const createEstacionamento = (data, callback) => {
    const sql = 'INSERT INTO estacionamento SET ?'
    connect.query(sql, data, (err, results) => {
        if (err) return callback(err, null)
        callback(null, { id: results.insertId, ...data })
    })
}

const getAllEstacionamentos = (callback) => {
    const sql = 'SELECT * FROM estacionamento'
    connect.query(sql, (err, results) => {
        if (err) return callback(err, null)
        callback(null, results)
    })
}

const getEstacionamentoById = (id, callback) => {
    const sql = 'SELECT * FROM estacionamento WHERE estacionamento_id = ?'
    connect.query(sql, [id], (err, results) => {
        if (err) return callback(err, null)
        callback(null, results[0])
    })
}

const updateEstacionamento = (id, data, callback) => {
    const sql = 'UPDATE estacionamento SET ? WHERE estacionamento_id = ?'
    connect.query(sql, [data, id], (err, results) => {
        if (err) return callback(err, null)
        callback(null, { message: 'Estacionamento atualizado com sucesso' })
    })
}

const deleteEstacionamento = (id, callback) => {
    const sql = 'DELETE FROM estacionamento WHERE estacionamento_id = ?'
    connect.query(sql, [id], (err, results) => {
        if (err) return callback(err, null)
        callback(null, { message: 'Estacionamento deletado com sucesso' })
    })
}

module.exports = {
    createEstacionamento,
    getAllEstacionamentos,
    getEstacionamentoById,
    updateEstacionamento,
    deleteEstacionamento
}
