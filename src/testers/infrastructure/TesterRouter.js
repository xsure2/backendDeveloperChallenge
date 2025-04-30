import Router from 'express';
import TesterController from '../interfaces/controllers/TesterController.js';
import { createTesterUseCase, listTestersUseCase } from '../application/index.js';

const router = Router();

// Instanciamos el controlador con los casos de uso
const testerController = new TesterController({ createTesterUseCase, listTestersUseCase });

// Definimos las rutas
router.post('/', testerController.createTester);
router.get('/', testerController.listTesters);

// Futuro: podrías añadir GET, DELETE, etc.

export default router;
