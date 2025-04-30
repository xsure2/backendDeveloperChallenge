import Tester from '../../domain/entities/Tester.js';

export default class CreateTesterUseCase {
  constructor({testerRepository, measureRepository}) {
    this.testerRepository = testerRepository;
    this.measureRepository = measureRepository;
  }

  async execute({ id, name, birthday, sex, email, password, testsDone, measure}) {
    measure = await this.measureRepository.findOrCreate(measure);
    const tester = new Tester({ id, name, birthday, sex, email, password, testsDone, measure});
    await this.testerRepository.save(tester);
    return tester;
  }
}

