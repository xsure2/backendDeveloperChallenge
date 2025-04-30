import CreateTestUseCase from './use-cases/CreateTestUseCase.js';

// Importar repositorio concreto
import TestRepository from '../infrastructure/TestRepository.js';

// Instanciar repositorio
const testRepository = new TestRepository();

// Instanciar Casos de Uso
const createTestUseCase = new CreateTestUseCase(testRepository);

// Exportar casos de uso
export {
    createTestUseCase,
};
