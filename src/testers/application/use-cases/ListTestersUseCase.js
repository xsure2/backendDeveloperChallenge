//import Tester from '../../domain/entities/Tester.js';

export default class ListTestersUseCase {
  constructor(testerRepository) {
    this.testerRepository = testerRepository;
  }

  async execute() {
    return await this.testerRepository.findAll();
  }
}

