export default class CreateTestUseCase {
    constructor(testRepository) {
      this.testRepository = testRepository;
    }
  
    async execute(test) {
      await this.testRepository.save(test);
    }
  }
  