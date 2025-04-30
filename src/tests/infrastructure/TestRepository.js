import Test from '../domain/entities/Test.js'
import knex from '../../shared/infrastructure/Database.js';

export default class TestRepository {
  constructor(testerRepository, productRepository) {
    this.testerRepository = testerRepository;
    this.productRepository = productRepository;
  }

  async save(test) {
    const [result] =  await knex('tests').insert({
      tester_id: test.tester,
      product_id: test.product,
      size: test.size,
    });
    return result.insertId;
  }

  async findByTesterId(testerId) {
    const rows = await knex('tests').where({ tester_id: testerId });
    return Promise.all(rows.map(async (row) => {
      const tester = await this.testerRepository.findById(row.tester_id);
      const product = await this.productRepository.findById(row.product_id);
      return Test.fromPrimitives({
        id: row.id,
        tester,
        product,
        size: row.size,
      });
    }));
  }

  async findByProductId(productId) {
    const rows = await this.knex('tests').where({ product_id: productId });
    return Promise.all(rows.map(async (row) => {
      const tester = await this.testerRepository.findById(row.tester_id);
      const product = await this.testerRepository.findById(row.product_id);
      return Test.fromPrimitives({
        id: row.id,
        tester,
        product,
        size: row.size,
      });
    }));
  }
}