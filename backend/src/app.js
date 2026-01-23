const express = require('express');

const app = express();

const productRoutes = require('./routes/product.routes');

//Allow Json
app.use(express.json());

//test path
app.get('/', (req, res) =>{
    res.json({message: 'Servidor Encendido'});
});

//Products
app.use('/api/products', productRoutes);

module.exports = app;