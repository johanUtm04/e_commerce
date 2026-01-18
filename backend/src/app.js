const express = require('express');

const app = express();

//Allow Json
app.use(express.json)

//test path
app.get('/api/test', (req, res) =>{
    res.json({message: 'Servidor Encendido'})
});

module.exports = app;