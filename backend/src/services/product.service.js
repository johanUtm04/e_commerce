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

        async getSpecificProduct(id){
        try {
            const [rows] = await db.query('SELECT * FROM products WHERE id = ?',[id]);
            return rows[0]; //Return first element of the array
        } catch (error) {
            throw new Error ('Error al obtener producto especifico ' + error.message);
        }
    }
}

module.exports = new ProductService();