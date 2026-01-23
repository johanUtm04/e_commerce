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

    async getProductById(req, res) {
        try {
            console.log('---  Solicitud recibida en el Controlador, Buscar producto en especifico ---');

            // Call the service
            const {id} = req.params;
            const product = await productService.getSpecificProduct(id);

            if (!product) {
                return res.status(404).json({message: 'Producto no encontrado'});

            }
            res.json(product);
        } catch (error) {
            console.error('---  ERROR EN EL CONTROLADOR:', error.message);
            
            res.status(500).json({
                message: 'Error al obtener el producto en especifico',
                error: error.message
            });
        }
    }

}

module.exports = new ProductController();