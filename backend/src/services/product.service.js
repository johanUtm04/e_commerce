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

    async updateStock(productData){
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

    async create(productData) {
        try {
            const { name, category_id, price, stock, image } = productData;
            const [result] = await db.query(
                'INSERT INTO products (name, category_id, price, stock, image, status) VALUES (?, ?, ?, ?, ?, "active")',
                [name, category_id, price, stock, image]
            );
            return result.insertId;
        } catch (error) {
            throw new Error('Error al crear producto: ' + error.message);
        }
    }

    async update(id, updateData) {
        try {
            const { name, price, stock, image, status } = updateData;
            const [result] = await db.query(
                'UPDATE products SET name = ?, price = ?, stock = ?, image = ?, status = ? WHERE id = ?',
                [name, price, stock, image, status, id]
            );
            return result.affectedRows > 0;
        } catch (error) {
            throw new Error('Error al actualizar producto: ' + error.message);
        }
    }

    async delete(id) {
        try {
            const [result] = await db.query('UPDATE products SET status = "inactive" WHERE id = ?', [id]);
            return result.affectedRows > 0;
        } catch (error) {
            throw new Error('Error al desactivar producto: ' + error.message);
        }
    }


}

module.exports = new ProductService();