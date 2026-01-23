const productService = require('../services/product.service');

class ProductController {
    
    async getProducts(req, res) {
        try {
            console.log('---  Solicitud recibida en el Controlador ---');

            // Call the service
            const products = await productService.getAllProducts();

            console.log(`---  Enviando ${products.length} productos al cliente ---`);
            res.json(products);

        } catch (error) {
            console.error('---  ERROR EN EL CONTROLADOR:', error.message);
            
            res.status(500).json({
                message: 'Error al obtener los productos',
                error: error.message
            });
        }
    }
}

module.exports = new ProductController();