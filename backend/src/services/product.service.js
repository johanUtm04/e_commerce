const db = require('../config/db');

class ProductService {
    async getAllProducts(){
        try {
            const [rows] = await db.query('SELECT * FROM products');
            return rows;
        } catch (error) {
            throw new Error ('Error al obtener los productos, el error especifico es el siguiente: ' + error.message);
        }
    }
}

module.exports = new ProductService();