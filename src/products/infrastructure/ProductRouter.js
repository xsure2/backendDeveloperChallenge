import Router from 'express';
import ProductController from '../interfaces/controllers/ProductController.js';
import { createProductUseCase, updateProductUseCase } from '../application/index.js';

const router = Router();

// Instanciamos el controlador con los casos de uso
const productController = new ProductController({ createProductUseCase, updateProductUseCase });

// Definimos las rutas
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);

// Futuro: podrías añadir GET, DELETE, etc.

export default router;
