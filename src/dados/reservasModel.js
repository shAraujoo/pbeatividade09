const connect = require('../connect/connect');

const getAllReservas = (callback) => {
    const query = 'SELECT * FROM reservas';
    connect.query(query, (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
};

const getReservaById = (id, callback) => {
    const query = 'SELECT * FROM reservas WHERE reserva_id = ?';
    connect.query(query, [id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, results[0]);
    });
};

const createReserva = (data, callback) => {
    const query = 'INSERT INTO reservas SET ?';
    connect.query(query, data, (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, ...data });
    });
};

const updateReserva = (id, data, callback) => {
    const query = 'UPDATE reservas SET ? WHERE reserva_id = ?';
    connect.query(query, [data, id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Reserva atualizada com sucesso' });
    });
};

const deleteReserva = (id, callback) => {
    const query = 'DELETE FROM reservas WHERE reserva_id = ?';
    connect.query(query, [id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Reserva deletada com sucesso' });
    });
};

module.exports = {
    getAllReservas,
    getReservaById,
    createReserva,
    updateReserva,
    deleteReserva
};
