const connect = require('../connect/connect');

const getAllQuartos = (callback) => {
    connect.query('SELECT * FROM quartos', (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
};

const getQuartosById = (id, callback) => {
    connect.query('SELECT * FROM quartos WHERE quarto_id = ?', [id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, results[0]);  
    });
};

const createQuartos = (data, callback) => {
    connect.query('INSERT INTO quartos SET ?', data, (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, ...data });  
    });
};

const updateQuartos = (id, data, callback) => {
    connect.query('UPDATE quartos SET ? WHERE quarto_id = ?', [data, id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Quarto atualizado com sucesso' });
    });
};

const deleteQuartos = (id, callback) => {
    connect.query('DELETE FROM quartos WHERE quartos_id = ?', [id], (err, results) => {
        if (err) return callback(err, null);
        callback(null, { message: 'Quarto deletado com sucesso' });
    });
};

module.exports = {
    getAllQuartos,
    getQuartosById,
    createQuartos,
    updateQuartos,
    deleteQuartos
};
