import knex from '../../shared/infrastructure/Database.js';
import Tester from '../domain/entities/Tester.js';
import EmailType from '../domain/value-objects/EmailType.js';
import PasswordType from '../domain/value-objects/PasswordType.js';
import TestsDoneType from '../domain/value-objects/TestsDoneType.js';

export default class TesterRepository {
  constructor(measureRepository) {
    this.measureRepository = measureRepository;
  }

  async save(tester) {
    const { id, name, birthday, sex, email, password, testsDone, measure} = tester.toPrimitives();
    const [testerId] = await knex('testers').insert({
      id, 
      name, 
      birthday, 
      sex, 
      email, 
      password, 
      tests_done: testsDone,
      measure_id: measure.id,
    });
    return testerId;
  }

  async update(tester) {
    const { id, name, birthday, sex, email, password, testsDone, measure} = tester.toPrimitives();

    await knex('testers')
      .where({ id: id })
      .update({
        name, 
        birthday, 
        sex, 
        email, 
        password, 
        tests_done: testsDone,
        measure_id: measure.id,  
      });
  }

  async findById(id) {
    const row = await knex('testers').where({ id }).first();
    if (!row) return null;
    const measure = await this.measureRepository.findById(row.measure_id);
    return new Tester({
      id: row.id,
      birthday: new BirthdayType(row.birthday),
      sex: new SexType(row.sex),
      email: new EmailType(row.email),
      password: new PasswordType(row.password),
      testsDone: new TestsDoneType(row.testsDone),
      measure: measure
      
    });
  }

}

