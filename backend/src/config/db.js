const mysql = require('mysql2/promise.js');
const env = require('./env');

const db = mysql.createPool({
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

db.getConnection()
    .then(()=> console.log('Conexion Realizada con exito'))
    .catch(err => console.error('Error de conexion: ' , err));

module.exports = db;

