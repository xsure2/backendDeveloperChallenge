import CreateTesterUseCase from './use-cases/CreateTesterUseCase.js';
import ListTestersUseCase from './use-cases/ListTestersUseCase.js';

// Importar repositorio concreto
import TesterRepository from '../infrastructure/TesterRepository.js';
import MeasureRepository from '../infrastructure/MeasureRepository.js';

// Instanciar repositorio
const testerRepository = new TesterRepository();
const measureRepository = new MeasureRepository();

// Instanciar Casos de Uso
const createTesterUseCase = new CreateTesterUseCase({testerRepository,measureRepository});
const listTestersUseCase = new ListTestersUseCase(testerRepository);

// Exportar casos de uso
export {
  createTesterUseCase,
  listTestersUseCase,
};
