const { search } = require('../app');
const db = require('../config/db');

//Expert that talks with Laragon
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

    async searchByName(term){
         try {
        const [rows] = await db.query('SELECT * FROM products WHERE name LIKE ?', [`%{term}%`]);
        return rows;
        } catch(error){
            throw new Error('Error al Buscar por Nombre: ' + error.message);
        }
    }

    async updateStock(){
                                                                                              //Parameters
        const [result] = await db.query('UPDATE products SET stock = stock - ? WHERE id = ?', [quantity, id]);
        return result.affectedRows > 0;
    }

    async emptyProductStock(productId){
    try {
        const [result] = await db.query(
            'UPDATE products SET stock = 0 WHERE order_id = ?',
            [productId]
        );
        return result.affectedRows > 0;
    } catch (error) {
        throw new Error('Error técnico al vaciar stock: ' + error.message);
    }
    
    }
}

module.exports = new ProductService();