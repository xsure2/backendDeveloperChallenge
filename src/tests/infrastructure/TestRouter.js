import Router from 'express';
import TestController from '../interfaces/controllers/TestController.js';
import { createTestUseCase }from '../application/index.js';

const router = Router();

// Instanciamos el controlador con los casos de uso
const testController = new TestController({ createTestUseCase });

// Definimos las rutas
router.post('/', testController.createTest);


// Futuro: podrías añadir GET, DELETE, etc.

export default router;
