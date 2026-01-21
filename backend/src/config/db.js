const mysql = require('mysql2/promise');
const env = require('./env');

const db = mysql.createPool({
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

db.getConnection()
    .then(()=> console.log('Conexion Con la Base de Datos Realizada con exito'))
    .catch(err => console.error('Error de conexion: ' , err));

module.exports = db;

