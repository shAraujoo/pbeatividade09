const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'hoteis'
});

connection.connect((err) => {
    if (err) {
        console.error('error connecting:', err);
    } else {
        console.log('Connected to MySQL!');
    }
});

module.exports = connection;