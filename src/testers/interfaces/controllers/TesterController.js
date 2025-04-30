export default class TesterController {
    constructor({createTesterUseCase, listTestersUseCase}) {
      this.createTesterUseCase = createTesterUseCase;
      this.listTestersUseCase = listTestersUseCase;

      this.createTester = this.createTester.bind(this);
      this.listTesters = this.listTesters.bind(this);
    }
  
    async createTester(req, res) {
      try {
        const { id, name, birthday, sex, email, password, testsDone, measure} = req.body;
        const tester = await this.createTesterUseCase.execute({ id, name, birthday, sex, email, password, testsDone, measure});
        res.status(201).json({ message: 'Tester created successfully.', tester });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
    
    async listTesters(req, res) {
      try {
        const testers = await this.listTestersUseCase.execute();
        res.status(200).json(testers);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  }
  