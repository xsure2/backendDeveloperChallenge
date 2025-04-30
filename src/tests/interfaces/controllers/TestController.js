export default class TestController {
    constructor({createTestUseCase}) {
      this.createTestUseCase = createTestUseCase;
      this.createTest = this.createTest.bind(this);
    }
  
    async createTest(req, res) {
      try {
        const { id, tester, product, size } = req.body;
        const test = await this.createTestUseCase.execute({ id, tester, product, size });
        res.status(201).json({ message: 'Test created successfully.', test });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }

}
  