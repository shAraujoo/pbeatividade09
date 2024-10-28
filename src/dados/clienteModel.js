const connect = require('../connect/connect');

const getAllClientes = (callback) => {
    connect.query('SELECT * FROM clientes', (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
};

const getClientById = (id, callback) => {
    connect.query('SELECT * FROM clientes WHERE cliente_id = ?', [id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, results[0]);  
    });
};

const createCliente = (data, callback) => {
    connect.query('INSERT INTO clientes SET ?', data, (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, ...data });  
    });
};

const updateCliente = (id, data, callback) => {
    connect.query('UPDATE clientes SET ? WHERE cliente_id = ?', [data, id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Cliente atualizado com sucesso' });
    });
};

const deleteCliente = (id, callback) => {
    connect.query('DELETE FROM clientes WHERE cliente_id = ?', [id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Cliente deletado com sucesso' });
    });
};

module.exports = {
    getAllClientes,
    getClientById,
    createCliente,
    updateCliente,
    deleteCliente
};
